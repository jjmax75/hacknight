// start point
// find blank space on 4 cardinals
// is it x-axis(horizontal) ( x, y ) => [ y, x ]
// two functions - search horizontal for x, push coords or add distance
// alternate betwen functions until hit exit

const maze = '\
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\
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
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
';

const mazeArr = maze.split( '\n' );

const startX = 3; // format [ y, x ]
const startY = 1;
let currentX = 3;
let currentY = 1;
let currentDirection;
let steps = 0;

const allDirections = {
  up: [ currentY - 1, currentX ],
  down: [ currentY + 1, currentX ],
  left: [ currentY, currentX - 1 ],
  right: [ currentY, currentX + 1 ]
};

// get coordinates of next move
function getMove(  direction ) {
  switch( direction ) {
    case 'up':
      return [ currentY - 1, currentX ];
    case 'down':
      return [ currentY + 1, currentX ];
    case 'left':
      return [ currentY, currentX - 1 ];
    case 'right':
      return [ currentY, currentX + 1 ];
  }
}

function findDirection( directions = allDirections ) {
  for ( let direction of Object.keys( directions ) ) {
    let x = directions[ direction ][ 1 ];
    let y = directions[ direction ][ 0 ];
    if ( mazeArr[ y ][ x ] === ' ' ) {
      return direction;
    }
  }
}

function findX() {
  let move = getMove( currentDirection );
  let x = move[ 1 ];
  let y = move[ 0 ];
  console.log( mazeArr[ y ][ x ], steps, y, x );

  if ( mazeArr[ y ][ x ] !== ' ' ) {
    console.log( steps );
  } else {
    steps ++;
    currentX = x;
    currentY = y;
    findX();
  }
}



currentDirection = findDirection();
findX();
