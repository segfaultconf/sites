find ../ -name "*.jpg" -exec sh -c 'x="{}"; jpegtran  -optimize -progressive -copy none -outfile "$x" "$x"' \;    
find ../ -name "*.png" -exec ./pngout-static {} \;