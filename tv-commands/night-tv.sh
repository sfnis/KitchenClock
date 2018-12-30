#!/bin/bash
fireup()
{  
  while :; do
   currenttime=$(date +%H:%M)
   if [[ "$currenttime" > "18:00" ]] || [[ "$currenttime" < "06:00" ]]; then
     curl -d '' http://172.16.32.210:8060/keypress/Power
     sleep 4m
     curl -d '' http://172.16.32.210:8060/keypress/Power
   fi
   test "$?" -gt 128 && break
  done &
}
