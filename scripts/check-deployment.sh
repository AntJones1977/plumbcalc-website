#!/bin/bash
# PlumbCalc Marketing Website — Deployment Health Check
# Usage: bash scripts/check-deployment.sh [URL]
# Default URL: https://plumbcalc-website.vercel.app

SITE="${1:-https://plumbcalc-website.vercel.app}"
PASS=0
FAIL=0

check_page() {
  local path="$1"
  local expected_text="$2"
  local url="$SITE$path"

  status=$(curl -s -o /tmp/plumbcalc-check.html -w "%{http_code}" "$url")
  if [ "$status" != "200" ]; then
    echo "FAIL  $path — HTTP $status"
    FAIL=$((FAIL + 1))
    return
  fi

  if [ -n "$expected_text" ]; then
    if grep -qi "$expected_text" /tmp/plumbcalc-check.html; then
      echo "PASS  $path — 200 + contains '$expected_text'"
      PASS=$((PASS + 1))
    else
      echo "FAIL  $path — 200 but missing '$expected_text'"
      FAIL=$((FAIL + 1))
    fi
  else
    echo "PASS  $path — 200"
    PASS=$((PASS + 1))
  fi
}

echo "=== PlumbCalc Website Deployment Check ==="
echo "URL: $SITE"
echo ""

# Page checks
check_page "/" "Estimate jobs in minutes"
check_page "/features" "Parametric Job Estimating"
check_page "/pricing" "Plans that grow"
check_page "/about" "spreadsheet to the smartest"
check_page "/contact" "Get in touch"
check_page "/tutorials" "Tutorials"
check_page "/tutorials/bathroom-estimate" "Creating a Bathroom Estimate"
check_page "/tutorials/gas-certificate" "Gas Safety Certificate"

# Content checks on landing page
check_page "/" "19"
check_page "/" "39"
check_page "/" "69"
check_page "/" "Tradify"
check_page "/" "Start Free Trial"

echo ""
echo "=== Results: $PASS passed, $FAIL failed ==="

if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
