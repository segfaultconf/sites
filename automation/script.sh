find ../content/sites/krakow2019 -iname "*.jpg" -or -iname "*.jpeg" -exec sh -c 'x="{}"; jpegtran  -optimize -progressive -copy none -outfile "$x" "$x"' \;    
find ../content/sites/krakow2019 -name "*.png" -exec ./pngout-static {} \;
