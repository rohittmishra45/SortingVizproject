function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="O(N^2)";
    document.getElementById("Time_Best").innerText="O(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

  c_delay = 0;
  for(var i= 1;i<array_size;i++){
    div_update(divs[i], div_sizes[i], "yellow")
    var key = div_sizes[i]
    var j =i-1
    while(j>=0 && key<div_sizes[j]){
      div_update(divs[j], div_sizes[j], "blue");
      div_update(divs[j+1], div_sizes[j+1], "blue");
      div_sizes[j+1] = div_sizes[j];
      div_update(divs[j], div_sizes[j], "blue");
      div_update(divs[j+1], div_sizes[j+1], "blue");
      j-=1;

    }
    div_sizes[j+1] =key;
    for(var t=0;t<i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }
  }
  div_update(divs[i-1], div_sizes[i-1], "green");
  enable_buttons()
}
