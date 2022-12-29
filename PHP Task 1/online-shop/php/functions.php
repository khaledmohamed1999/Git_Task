<?php
function calculateStars($num){
    $string = '';
    for($i = 0; $i < 5; $i++){
        if($num - $i == 0.5)
            $string .= '<small class="fa fa-star-half-alt text-primary mr-1"></small>';
        elseif($i < $num)
            $string .= '<small class="fa fa-star text-primary mr-1"></small>';
        else
            $string .= '<small class="far fa-star text-primary mr-1"></small>';
    }

    return $string;
}



?>