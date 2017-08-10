#!/bin/bash

PAGEID=`uuidgen`
echo "Generating batch $PAGEID"
mkdir -p pages/$PAGEID
cd pages/$PAGEID
for i in $(seq 24)
do
	export ID=`uuidgen`
	SHORTID=`echo $ID | cut -d '-' -f 1`
	echo "$SHORTID $ID" >> index.txt
	mkdir -p full/
	mkdir -p short/
	qrencode -s 10 http://url.coderbunker.com/`uuidgen` -o full/$ID.png
	convert -pointsize 60 full/$ID.png label:"$SHORTID" -gravity Center -append short/$SHORTID.png
done
montage -mode concatenate short/*.png -tile 4x6 page.png
