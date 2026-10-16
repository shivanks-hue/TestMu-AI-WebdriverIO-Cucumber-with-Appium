
#!/usr/bin/env bash

TOTAL_RUNS=50
FAILED_RUNS=0

for i in $(seq 1 "$TOTAL_RUNS"); do
  echo "========== Run $i of $TOTAL_RUNS =========="

  if npx wdio run ./wdio.android.app.single.conf.ts; then
    echo "Run $i: PASSED"
  else
    echo "Run $i: FAILED"
    FAILED_RUNS=$((FAILED_RUNS + 1))
  fi

  echo "Finished run $i"
done

PASSED_RUNS=$((TOTAL_RUNS - FAILED_RUNS))

echo "========== FINAL SUMMARY =========="
echo "Total runs:  $TOTAL_RUNS"
echo "Passed runs: $PASSED_RUNS"
echo "Failed runs: $FAILED_RUNS"

if [ "$FAILED_RUNS" -gt 0 ]; then
  exit 1
fi
