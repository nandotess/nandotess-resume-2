<?php

$image = imagecreate( 1000, 1 );
$white = imagecolorallocate( $image, 255, 255, 255 );
imagesetpixel( $image, 1, 1, $white );
header( 'content-type:image/jpg' );
imagejpeg( $image );
imagedestroy( $image );
