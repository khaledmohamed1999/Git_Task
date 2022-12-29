<?php
function calculateStars($num){
    $string = '';
    for($i = 0; $i < (int)$num; $i++){
        $string .= '<small class="fa fa-star text-primary mr-1"></small>';
    }
    if(($num - (int)$num) > 0){
        $string .= '<small class="fa fa-star-half-alt text-primary mr-1"></small>';
    }

    return $string;
}



?>