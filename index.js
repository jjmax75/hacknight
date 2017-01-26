const maze = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
XXX.XXXXX                XXXXX            XXXXXXXXXXX\n\
XXX XXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXX XXXXXXXXXXX\n\
XXX XX                XXXXXXXX XXX   XXXX XXXXX  XXXX\n\
XXX XX XXXXXXXXXXXXXX XXXXXXXX XXX   XXXX XXXXX  XXXX\n\
XXX XX XXXXXXXXXXXXXX XX X XXX XXX   XXXX XXXXX  XXXX\n\
XXX XX XXX     XXXXXX XX X XXX XXX   XXXX XXXXX  XXXX\n\
XXX XX XXX XXX XXXXXX XX X XXX XXX   XXXX XXXXX  XXXX\n\
XXX XX XXX XXX XXXXXX XX X XXX XXXXXXXXXX XXXXX  XXXX\n\
XXX XX     XXX XXXXXX XX X XXX      XXXXX XXXXX  XXXX\n\
XXX XXXXXXXXXX XXXXXX XX X XXXXXXXX XXXXX XXXXX  XXXX\n\
XXX XXX        XXXXXX XXXXXXXX  XXX XXXXX XXXXX  XXXX\n\
XXX XXX XXXXXXXXXXXXX      XXX  XXX XXXXX XXXXX  XXXX\n\
XXX XXX XX         XXXXXXX XXX  XXX XXXXX XXXXXXXXXXX\n\
XXX     XXX            XXX XXXXXXXX XXXXX            .\n\
XXXXXXXXXXX            XXX          XXXXXXXXXXXXXXXXX\n\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

var lines = maze.split('\n');
console.log(lines);

var current_x = 3;
var current_y = 1;
var previous_x = 3;
var previous_y = 1;
var steps = 0;

function move() {
  for(var x=current_x - 1;x<= current_x +1; x++) {
    if (x<0 || x>=lines[current_y].length) continue;
    for (var y=current_y - 1;y<=current_y + 1; y++) {
      if(y<0 || y>=lines.length) continue;
      if(y === current_y && x === current_x) continue;
      if(previous_y === current_y && previous_x == current_x) continue;
      if (
           (x === current_x+1 && y == current_y+1) ||
           (x === current_x+1 && y == current_y-1) ||
           (x === current_x-1 && y == current_y-1) ||
           (x === current_x-1 && y == current_y+1)) continue;

      if (lines[y][x] === ' ') {
        previous_x = current_x;
        previous_y = current_y;
        current_x = x;
        current_y = y;
        return false;
      }
      else if (lines[y][x] === '.') {
        return true;
      }
    }
  }
}

while(true) {
  var found = move();
  steps++;
  if (found) break;
}

console.log(steps);
