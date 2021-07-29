#!/bin/bash 

export JAVA_HOME=/webtools/java11
export CLARITY_HOME=/clarity

# Folders
DIR_LOG=$CLARITY_HOME/scripts
LOG=$DIR_LOG/log_restart_services.log

# Control dates
ACTUAL_DATE=`date +%s | awk '{ print $1 }'`

# Date formats
HOUR_LOG=`date | awk '{ print $4 }'`
DATE_LOG=`date | awk '{ print $3 "/" $2 "/" $6 }'`
DATE_FMT_DEL=`date -d "7 days ago" +"%d/%m/%Y"`

echo " " >> $LOG
echo " ***** STARTING SERVICES $DATE_LOG AS $HOUR_LOG *****" >> $LOG

cd $CLARITY_HOME/bin
./service stop start app beacon >> $LOG

echo " ***** END OF START SERVICES $DATE_LOG AS $HOUR_LOG *****" >> $LOG
