<?php
if ($_GET['run']) {
  # This code will run if ?run=true is set.
  echo $PWD
  exec("C:/Users/newsy/tryjango/project1/static/shell/test.sh");
}
?>