function Merge()
{
  document.getElementById('Time_Best').innerHTML = "O(N log N)";
  document.getElementById('Time_Worst').innerText = "O(N log N)";
  document.getElementById('Time_Average').innerHTML = "O(N log N)";


  document.getElementById('Space_Worst').innerText = "O(N)";

  c_delay=0;
  merge_partition(0, array_size-1);
  enable_buttons();
}

function merge_sort(start, mid, end){
  var a = start,b = mid+1;
  var Arr = [];
  k= 0;
  for(var i =start; i<=end;i++){
    if(a>mid){
      Arr[k] = div_sizes[b];
      div_update(divs[b],div_sizes[b],"blue");
      k++;
      b++;
    }
    else if (b>end) {
      Arr[k] = div_sizes[a];
      div_update(divs[a],div_sizes[a],"blue");
      k++;
      a++;

    }
    else if (div_sizes[a]> div_sizes[b]) {
      Arr[k] = div_sizes[a];
      div_update(divs[a],div_sizes[a],"blue");
      k++;
      a++;

    }
    else{
      Arr[k] = div_sizes[b];
      div_update(divs[b],div_sizes[b],"blue");
      k++;
      b++;
    }
  }
  for(var j =0; j<k;j++){
    div_sizes[start++] = Arr[j];
    div_update(divs[start-1], div_sizes[start-1], "green");
  }

}


function merge_partition(start, end)
{
  if (start<end){
  var mid = Math.floor((start+end)/2);
  div_update(divs[mid], div_sizes[mid], "yellow")
  merge_partition(start,mid);
  merge_partition(mid+1, end);

  merge_sort(start, mid, end);
}
}
