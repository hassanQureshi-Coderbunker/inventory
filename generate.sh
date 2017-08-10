#!/bin/bash

PAGEID=`uuidgen`
mkdir -p pages/$PAGEID
cd pages/$PAGEID
for i in $(seq 24)
do
	export ID=`uuidgen`
	SHORTID=`echo $ID | cut -d '-' -f 1`
	mkdir -p full/
	mkdir -p short/
	qrencode http://url.coderbunker.com/`uuidgen` -o full/$ID.png
	convert full/$ID.png  label:"$SHORTID" -gravity Center -append short/$SHORTID.png
done
montage short/*.png -tile 4x6 page.png
