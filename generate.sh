#!/bin/bash

GERRIT_STATS_DIR="/tmp/gerritstats"
GERRIT_SERVER="zxiiro@gerrit.linuxfoundation.org"
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

PROJECTS=(
    -p releng/global-jjb
    -p releng/lftools
)

DAY=$(date -d "yesterday" '+%Y-%m-%d')
WEEK=$(date -d "1 week ago" '+%Y-%m-%d')
MONTH=$(date -d "1 month ago" '+%Y-%m-%d')
YEAR=$(date -d "1 year ago" '+%Y-%m-%d')

echo Day "$DAY"
echo Weeky "$WEEK"
echo Month "$MONTH"
echo year "$YEAR"

pushd "$GERRIT_STATS_DIR"
    ./gerrit_downloader.sh --server "$GERRIT_SERVER" ${PROJECTS[*]} --after-date "$DAY" --output-dir gerrit_day/
    ./gerrit_downloader.sh --server "$GERRIT_SERVER" ${PROJECTS[*]} --after-date "$WEEK" --output-dir gerrit_week/
    ./gerrit_downloader.sh --server "$GERRIT_SERVER" ${PROJECTS[*]} --after-date "$MONTH" --output-dir gerrit_month/
    ./gerrit_downloader.sh --server "$GERRIT_SERVER" ${PROJECTS[*]} --after-date "$YEAR" --output-dir gerrit_year/

    ./gerrit_stats.sh -f gerrit_day -o "${SCRIPT_DIR}/day"
    ./gerrit_stats.sh -f gerrit_week -o "${SCRIPT_DIR}/week"
    ./gerrit_stats.sh -f gerrit_month -o "${SCRIPT_DIR}/month"
    ./gerrit_stats.sh -f gerrit_year -o "${SCRIPT_DIR}/year"
popd

