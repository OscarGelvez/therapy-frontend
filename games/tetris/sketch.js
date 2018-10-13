var grid;
var tetris;
var shapeOption = 1;
var shapeOptionFours = 0;
var frames = 4;
var right = false;
var left = false;
var stopChange = false;
var clears = 0;
var score = 0;
var level = 1;
var shapeArr = [];
var lines = 0;
var nextX = 450;
var nextY = 350;
var imgNext = "";

function setup() {
    noLoop();
    frameRate(frames);
    tetris = new block();
    grid = make2DArray(10,20);
    createCanvas (400,800);
    background (100);
    for(var i=0; i<10; i++){
        for(var j=0; j<20; j++){
            grid[i][j] = new cell(i,j);
        }
    }
    
    for(var i=0; i<3000; i++){
        shapeArr.push(Math.floor(Math.random() * 7) + 1);  
    }
    
    tetris.shape = shapeArr[0];

}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}


function draw() {
    for(var i=0; i<10; i++){
        for(var j=0; j<20; j++){
            grid[i][j].show();
        }
    }
    for(var i=0; i<10; i++){
        for(var j=0; j<20; j++){
            grid[i][j].detectBlock(tetris.x,tetris.y);
            grid[i][j].detectRowFill();
        }
    }
    
    for(var i=0; i<10; i++){
            grid[i][19].start = true;
    }
    
    tetris.show();
    tetris.y += 40;
    
    
    
    if(clears == 1){
        score += 50*(level+1);
        lines += 1;
        clears = 0;
    } else if(clears == 2){
        score += 150*(level+1);
        lines += 2;
        clears = 0;        
    } else if(clears == 3){
        score += 350*(level+1);
        lines += 3;
        clears = 0;        
    } else if(clears == 4){
        score += 1000*(level+1);
        lines += 4;
        clears = 0;        
    } else if(clears == 5){
        score += 1050*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 6){
        score += 1150*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 7){
        score += 1350*(level+1);
        lines += clears;
        clears = 0;         
    } else if(clears == 8){
        score += 2000*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 9){
        score += 2050*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 10){
        score += 2150*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 11){
        score += 2350*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 12){
        score += 2550*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 13){
        score += 3050*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 14){
        score += 3350*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 15){
        score += 3850*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 16){
        score += 4050*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 17){
        score += 4350*(level+1);
        lines += clears;
        clears = 0;        
    } else if(clears == 18){
        score += 4750*(level+1);
        lines += clears;
        clears = 0;        
    }
    
    if(lines >= 5){
        level = 2;
    } else if(lines >=10){
        level = 3;
    } else if(lines >=15){
        level = 4;
    } else if(lines >=20){
        level = 5;
    } else if(lines >=25){
        level = 6;
    } else if(lines >=30){
        level = 7;
    } else if(lines >=35){
        level = 8;
    } else if(lines >=40){
        level = 9;
    } else if(lines >=45){
        level = 10;
    } else if(lines >=50){
        level = 11;
    } else if(lines >=55){
        level = 12;
    } else if(lines >=60){
        level = 13;
    } else if(lines >=65){
        level = 14;
    } else if(lines >=70){
        level = 15;
    }
    
    if(level == 1){
        frames = 3;
    } else if(level == 2){
       frames = 4; 
    } else if(level == 3){
       frames = 5;
    } else if(level == 4){
       frames = 5;
    } else if(level == 5){
       frames = 6;
    } else if(level == 6){
       frames = 6;
    } else if(level == 7){
       frames = 7;
    } else if(level == 8){
       frames = 8;
    } else if(level == 9){
       frames = 9;
    } else if(level == 10){
       frames = 10;
    } else if(level == 11){
       frames = 11;
    } else if(level == 12){
       frames = 12;
    } else if(level == 13){
       frames = 13;
    } else if(level == 14){
       frames = 14;
    } else if(level == 15){
       frames = 15;
   }
    
    

    if(shapeArr[1] == 1){
        imgNext = "https://i.imgur.com/5xqHuLn.png";
    } else if(shapeArr[1] == 2){
        imgNext = "https://i.imgur.com/HHIewmL.png";
    } else if(shapeArr[1] == 3){
        imgNext = "https://i.imgur.com/wyyaZUQ.png";
    } else if(shapeArr[1] == 4){
        imgNext = "https://i.imgur.com/5UQk93f.png";
    } else if(shapeArr[1] == 5){
        imgNext = "https://i.imgur.com/FHC4eRz.png";
    } else if(shapeArr[1] == 6){
        imgNext = "https://i.imgur.com/yA29dhy.png";
    } else if(shapeArr[1] == 7){
        imgNext = "https://i.imgur.com/ZeKIAAO.png";
    }  
    
//     Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">LogoMaker.com</a> https://logomakr.com/89AiuB89AiuB
// Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">LogoMaker.com</a> https://logomakr.com/1SOaCb1SOaCb
// Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">LogoMaker.com</a> https://logomakr.com/99iovs99iovs
// Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">LogoMaker.com</a> https://logomakr.com/3jnWFO3jnWFO
// Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">LogoMaker.com</a> https://logomakr.com/88bigr88bigr
// Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">LogoMaker.com</a> https://logomakr.com/3tLvwR3tLvwR

for(var f=0; f<20; f++){
if(grid[0][0].open && grid[1][0].open || grid[2][0].open || grid[3][0].open || grid[4][0].open || grid[5][0].open || grid[6][0].open || grid[7][0].open || grid[8][0].open || grid[9][0].open){
    noLoop();
    alert('Game Over! You cleared '+lines+' lines with a score of '+score);
    
}   
}
    

 
  if (keyIsDown(DOWN_ARROW)){
      frameRate(frames + 17);
  } else {
      frameRate(frames);
  }
    
    
    
    
    
    
    //shape 1 option 1 collision detection-----------------------------
    if(tetris.shape == 1){
        if(shapeOption % 2 != 0){
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40) - 1;
            
            tetris.i2 = (tetris.x/40);
            tetris.j2 = (tetris.y/40);
            
            tetris.i3 = (tetris.x/40);
            tetris.j3 = (tetris.y/40) + 1;            
            
            tetris.i4 = (tetris.x/40);
            tetris.j4 = (tetris.y/40) + 2;
            

            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && grid[tetris.i4+1][tetris.j4].open){
                right = true;    
            } else {
                right = false;
            }
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && grid[tetris.i4-1][tetris.j4].open){
                left = true;    
            } else {
                left = false;
            }
            
            
            
            //shape 1 option 1 shapechange collision detection-----------------------------
            if(tetris.j1 <= 19 && tetris.j1 >= 0){
                if(tetris.i1 <= 6 && tetris.i1 >=1 && grid[tetris.i1+1][tetris.j1].open){
                    stopChange = true;    
            }   else if(tetris.i1 <= 6 && tetris.i1 >=1 && grid[tetris.i1+2][tetris.j1].open){
                    stopChange = true;
            }   else if(tetris.i1 <= 6 && tetris.i1 >=1 && grid[tetris.i1+3][tetris.j1].open){
                    stopChange = true;
            }   else if(tetris.i1 >= 7 && grid[tetris.i1-3][tetris.j1].open){
                    stopChange = true;
            }   else if(tetris.i1 >= 7 && grid[tetris.i1-2][tetris.j1].open){
                    stopChange = true;
            }   else if(tetris.i1 >= 7 && grid[tetris.i1-1][tetris.j1].open){
                    stopChange = true;
            } else {
                stopChange = false;
            }
            }
                      
            
            
            
            
           //shape 1 option 2 collision detection-----------------------------  
        } else {
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40) - 1;
            
            tetris.i2 = (tetris.x/40) + 1;
            tetris.j2 = (tetris.y/40) - 1;
            
            tetris.i3 = (tetris.x/40) + 2;
            tetris.j3 = (tetris.y/40) - 1;            
            
            tetris.i4 = (tetris.x/40) + 3;
            tetris.j4 = (tetris.y/40) - 1;  
            
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && grid[tetris.i4+1][tetris.j4].open){
                right = true;    
            } else {
                right = false;
            }
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.i4 <= 8 && tetris.i1 >=1 && grid[tetris.i1-1][tetris.j4].open){
                left = true;    
            } else {
                left = false;
            } 
            
            
            
            //shape 1 option 2 shapechange collision detection-----------------------------
            if(tetris.j1 <= 19 && tetris.j1 >= 0){
                if(tetris.j1 <= 16 && grid[tetris.i1][tetris.j1+1].open){
                    stopChange = true;    
            }   else if(tetris.j1 <= 16 && grid[tetris.i1][tetris.j1+2].open){
                    stopChange = true;
            }   else if(tetris.j1 <= 16 && grid[tetris.i1][tetris.j1+3].open){
                    stopChange = true;
            } else {
                stopChange = false;
            }
            }            
            
            
        }
    }
    
    
    
    //shape 2 option 1 collision detection-----------------------------
    else if(tetris.shape == 2){
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40) - 1;
            
            tetris.i2 = (tetris.x/40) + 1;
            tetris.j2 = (tetris.y/40) - 1;
            
            tetris.i3 = (tetris.x/40);
            tetris.j3 = (tetris.y/40);            
            
            tetris.i4 = (tetris.x/40) + 1;
            tetris.j4 = (tetris.y/40);
            

            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2+1][tetris.j2].open){
                    right = true;
                }
                else if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }
            } else {
                right = false;
            }
        
        
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                }
                else if(grid[tetris.i3-1][tetris.j3].open){
                    left = true;
                }
            } else {
                left = false;
            }        
    }
    
        
    
    //shape 3 option 1 collision detection-----------------------------
    else if(tetris.shape == 3){
        if(shapeOption % 2 != 0){
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40);
            
            tetris.i2 = (tetris.x/40) + 1;
            tetris.j2 = (tetris.y/40);
            
            tetris.i3 = (tetris.x/40) + 1;
            tetris.j3 = (tetris.y/40) - 1;            
            
            tetris.i4 = (tetris.x/40) + 2;
            tetris.j4 = (tetris.y/40) - 1;        
        
        
        
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                } 
            }   else {
                    left = false;
                }            
        
            
            
            
            //shape 3 option 1 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 18 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2][tetris.j2+1].open){
                    stopChange = true;    
            }   
            }   else {
                stopChange = false;
            } 
            
            
        } else {
         
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40)-1;
            
            tetris.i2 = (tetris.x/40);
            tetris.j2 = (tetris.y/40);
            
            tetris.i3 = (tetris.x/40) + 1;
            tetris.j3 = (tetris.y/40);            
            
            tetris.i4 = (tetris.x/40) + 1;
            tetris.j4 = (tetris.y/40)+1;             
            
            
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i3+1][tetris.j3].open){
                    right = true;
                }
                else if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                }
                else if(grid[tetris.i2-1][tetris.j2].open){
                    left = true;
                }
            }   else {
                    left = false;
                }            
            
            
            //shape 3 option 2 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1+2][tetris.j1].open){
                    stopChange = true;    
            }   
            }   else {
                stopChange = false;
            }            
        }     
    } 
    
    
    //shape 4 option 1 collision detection-----------------------------
    else if(tetris.shape == 4){
        if(shapeOption % 2 != 0){
            
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40)-1;
            
            tetris.i2 = (tetris.x/40)+1;
            tetris.j2 = (tetris.y/40)-1;
            
            tetris.i3 = (tetris.x/40) + 1;
            tetris.j3 = (tetris.y/40);            
            
            tetris.i4 = (tetris.x/40) + 2;
            tetris.j4 = (tetris.y/40);            
            
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                }
            }   else {
                    left = false;
                }            
            
           
            
            //shape 4 option 1 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 16 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1][tetris.j1+3].open){
                    stopChange = true;    
            }   
            }   else {
                stopChange = false;
            }             
            
            
        } else {
         //shape 4 option 2 collision detection-----------------------------    
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40);
            
            tetris.i2 = (tetris.x/40);
            tetris.j2 = (tetris.y/40)+1;
            
            tetris.i3 = (tetris.x/40) + 1;
            tetris.j3 = (tetris.y/40)-1;            
            
            tetris.i4 = (tetris.x/40) + 1;
            tetris.j4 = (tetris.y/40);            
            
            
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i3+1][tetris.j3].open){
                    right = true;
                } else if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                } else if(grid[tetris.i2-1][tetris.j2].open){
                    left = true;
                }
            }   else {
                    left = false;
                }            
            
            
            //shape 4 option 2 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 16 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 7 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2+2][tetris.j2].open){
                    stopChange = true;    
            }   
            }   else {
                stopChange = false;
            }             
        }
        
    }
    
    
    
    
    
    
    
   //shape 5 option 1 collision detection----------------------------- 
    else if(tetris.shape == 5){
        if(shapeOptionFours == 0){
            
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40)-1;
            
            tetris.i2 = (tetris.x/40)-1;
            tetris.j2 = (tetris.y/40);
            
            tetris.i3 = (tetris.x/40);
            tetris.j3 = (tetris.y/40);            
            
            tetris.i4 = (tetris.x/40) + 1;
            tetris.j4 = (tetris.y/40);             
            
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 19 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2-1][tetris.j2].open){
                    left = true;
                }
            }   else {
                    left = false;
                }             
            
            
            //shape 5 option 1 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 0 && tetris.j3 <= 18 && tetris.j3 >= 0 && tetris.j2 <= 19 && tetris.j2 >= 0 && tetris.j1 <= 19 && tetris.j1 >= 0 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i3][tetris.j3+1].open){
                    stopChange = true;    
            }   
            }   else {
                stopChange = false;
            }              
            
            
        }
        
        
    //shape 5 option 2 collision detection-----------------------------     
        else if(shapeOptionFours == 1){
            
            tetris.i1 = (tetris.x/40)-1;
            tetris.j1 = (tetris.y/40);
            
            tetris.i2 = (tetris.x/40);
            tetris.j2 = (tetris.y/40)-1;
            
            tetris.i3 = (tetris.x/40);
            tetris.j3 = (tetris.y/40);            
            
            tetris.i4 = (tetris.x/40);
            tetris.j4 = (tetris.y/40)+1;            
            
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2+1][tetris.j2].open){
                    right = true;
                } else if(grid[tetris.i3+1][tetris.j3].open){
                    right = true;
                } else if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                }
            }   else {
                    left = false;
                }             
            
            
            //shape 5 option 2 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 7 && tetris.i4 >=1 && tetris.i3 <= 7 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i3+1][tetris.j3].open){
                    stopChange = true;
                }
                else if(grid[tetris.i4+1][tetris.j4].open){
                    stopChange = true;
                }
                else if(grid[tetris.i3+2][tetris.j3].open){
                    stopChange = true;
                }
                else if(grid[tetris.i4+2][tetris.j4].open){
                    stopChange = true;
                }                
            } else {
                stopChange = false;
            }
            
            
        }
        //shape 5 option 2 collision detection-----------------------------
        else if(shapeOptionFours == 2){
            
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40);
            
            tetris.i2 = (tetris.x/40)+1;
            tetris.j2 = (tetris.y/40);
            
            tetris.i3 = (tetris.x/40)+2;
            tetris.j3 = (tetris.y/40);            
            
            tetris.i4 = (tetris.x/40)+1;
            tetris.j4 = (tetris.y/40)+1;            
        
        
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i3+1][tetris.j3].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                }
            }   else {
                    left = false;
                }             
            
            stopChange = false;
            
    }
        
      //shape 5 option 4 collision detection-----------------------------  
     else if(shapeOptionFours == 3){
         
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40)-1;
            
            tetris.i2 = (tetris.x/40);
            tetris.j2 = (tetris.y/40);
            
            tetris.i3 = (tetris.x/40);
            tetris.j3 = (tetris.y/40)+1;            
            
            tetris.i4 = (tetris.x/40)+1;
            tetris.j4 = (tetris.y/40);          
         
         
         
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                } else if(grid[tetris.i2-1][tetris.j2].open){
                    left = true;
                } else if(grid[tetris.i3-1][tetris.j3].open){
                    left = true;
                }
            }   else {
                    left = false;
                }         
         
            //shape 5 option 4 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 7 && tetris.i4 >=1 && tetris.i3 <= 7 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2-1][tetris.j2].open){
                    stopChange = true;
                }                
            } else {
                stopChange = false;
            }            
         
     }   
        
        
    }
    
    
    //shape 6 option 1 collision detection-----------------------------
    else if(tetris.shape == 6){
        if(shapeOptionFours == 0){
            
            tetris.i1 = (tetris.x/40)-1;
            tetris.j1 = (tetris.y/40)+1;
            
            tetris.i2 = (tetris.x/40);
            tetris.j2 = (tetris.y/40)+1;
            
            tetris.i3 = (tetris.x/40);
            tetris.j3 = (tetris.y/40);            
            
            tetris.i4 = (tetris.x/40);
            tetris.j4 = (tetris.y/40)-1;            
            
            
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                } else if(grid[tetris.i3+1][tetris.j3].open){
                    right = true;
                } else if(grid[tetris.i2+1][tetris.j2].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                } else if(grid[tetris.i3-1][tetris.j3].open){
                    left = true;
                } else if(grid[tetris.i4-1][tetris.j4].open){
                    left = true;
                }
            }   else {
                    left = false;
                }        
            
            
            //shape 5 option 4 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 7 && tetris.i3 >=1 && tetris.i2 <= 7 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2+1][tetris.j2].open){
                    stopChange = true;
                } else if(grid[tetris.i2+2][tetris.j2].open){
                    stopChange = true;
                } else if(grid[tetris.i3+1][tetris.j3].open){
                    stopChange = true;
                } else if(grid[tetris.i3+2][tetris.j3].open){
                    stopChange = true;
                }               
            } else {
                stopChange = false;
            }             
            
            
            
        }
        //shape 6 option 2--------------------------------------------------------------
        else if(shapeOptionFours == 1){
            
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40)-1;
            
            tetris.i2 = (tetris.x/40)+1;
            tetris.j2 = (tetris.y/40)-1;
            
            tetris.i3 = (tetris.x/40)+2;
            tetris.j3 = (tetris.y/40)-1;            
            
            tetris.i4 = (tetris.x/40)+2;
            tetris.j4 = (tetris.y/40);            
            
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i3+1][tetris.j3].open){
                    right = true;
                } else if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                }
                else if(grid[tetris.i4-1][tetris.j4].open){
                    left = true;
                }
            }   else {
                    left = false;
                }
            
            
            
            //shape 6 option 2 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 16 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 7 && tetris.i3 >=1 && tetris.i2 <= 7 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1][tetris.j1+1].open){
                    stopChange = true;
                } else if(grid[tetris.i1][tetris.j1+2].open){
                    stopChange = true;
                } else if(grid[tetris.i1][tetris.j1+3].open){
                    stopChange = true;
                }               
            } else {
                stopChange = false;
            }             
            
            
            
        }
        
        else if(shapeOptionFours == 2){
            
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40)-1;
            
            tetris.i2 = (tetris.x/40);
            tetris.j2 = (tetris.y/40);
            
            tetris.i3 = (tetris.x/40);
            tetris.j3 = (tetris.y/40)+1;            
            
            tetris.i4 = (tetris.x/40)+1;
            tetris.j4 = (tetris.y/40)-1;             
            
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                } else if(grid[tetris.i2+1][tetris.j2].open){
                    right = true;
                } else if(grid[tetris.i3+1][tetris.j3].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                }
                else if(grid[tetris.i2-1][tetris.j2].open){
                    left = true;
                } else if(grid[tetris.i3-1][tetris.j3].open){
                    left = true;
                }
            }   else {
                    left = false;
                }            
            
            
            
            //shape 6 option 3 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 7 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i3+1][tetris.j3].open){
                    stopChange = true;
                } else if(grid[tetris.i3+2][tetris.j3].open){
                    stopChange = true;
                }               
            } else {
                stopChange = false;
            }             
            
            
        }
        
        else if(shapeOptionFours == 3){
            
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40)-1;
            
            tetris.i2 = (tetris.x/40);
            tetris.j2 = (tetris.y/40);
            
            tetris.i3 = (tetris.x/40)+1;
            tetris.j3 = (tetris.y/40);            
            
            tetris.i4 = (tetris.x/40)+2;
            tetris.j4 = (tetris.y/40);             
            
            
          if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                } 
                else if(grid[tetris.i1+1][tetris.j1].open){
                    right = true;
                }
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                }
                else if(grid[tetris.i2-1][tetris.j2].open){
                    left = true;
                }
            }   else {
                    left = false;
                }             
            
            
            //shape 6 option 4 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 18 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2-1][tetris.j2+1].open){
                    stopChange = true;
                }               
            } else {
                stopChange = false;
            }            
            
            
        }
        
        
    }
     //shape 7 
    else if(tetris.shape == 7){
        if(shapeOptionFours == 0){
            
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40)-1;
            
            tetris.i2 = (tetris.x/40);
            tetris.j2 = (tetris.y/40);
            
            tetris.i3 = (tetris.x/40);
            tetris.j3 = (tetris.y/40)+1;            
            
            tetris.i4 = (tetris.x/40)+1;
            tetris.j4 = (tetris.y/40)+1;            
            
            
          if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1+1][tetris.j1].open){
                    right = true;
                } 
                else if(grid[tetris.i2+1][tetris.j2].open){
                    right = true;
                }
                 else if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }              
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                } 
                else if(grid[tetris.i2-1][tetris.j2].open){
                    left = true;
                }
                else if(grid[tetris.i3-1][tetris.j3].open){
                    left = true;
                }              
            }   else {
                    left = false;
                }
            
            
            
            //shape 7 option 1 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 7 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1+1][tetris.j1].open){
                    stopChange = true;
                } else if(grid[tetris.i1+2][tetris.j1].open){
                    stopChange = true;
                } else if(grid[tetris.i2+1][tetris.j2].open){
                    stopChange = true;
                } else if(grid[tetris.i2+2][tetris.j2].open){
                    stopChange = true;
                }              
            } else {
                stopChange = false;
            } 
            
            
            
        }
        
        else if(shapeOptionFours == 1){
            
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40);
            
            tetris.i2 = (tetris.x/40)+1;
            tetris.j2 = (tetris.y/40);
            
            tetris.i3 = (tetris.x/40)+2;
            tetris.j3 = (tetris.y/40);            
            
            tetris.i4 = (tetris.x/40)+2;
            tetris.j4 = (tetris.y/40)-1;            
            
            
          if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                } 
                else if(grid[tetris.i3+1][tetris.j3].open){
                    right = true;
                }              
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                } 
                else if(grid[tetris.i4-1][tetris.j4].open){
                    left = true;
                }             
            }   else {
                    left = false;
                }            
            
            
            //shape 7 option 2 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 17 && tetris.j2 >= 1 && tetris.j1 <= 18 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=2 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i4-2][tetris.j4+1].open){
                    stopChange = true;
                } else if(grid[tetris.i2][tetris.j2+1].open){
                    stopChange = true;
                } else if(grid[tetris.i2][tetris.j2+2].open){
                    stopChange = true;
                }             
            } else {
                stopChange = false;
            }            
            
    }
        
        
    else if(shapeOptionFours == 2){
        
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40)-1;
            
            tetris.i2 = (tetris.x/40)+1;
            tetris.j2 = (tetris.y/40)-1;
            
            tetris.i3 = (tetris.x/40)+1;
            tetris.j3 = (tetris.y/40);            
            
            tetris.i4 = (tetris.x/40)+1;
            tetris.j4 = (tetris.y/40)+1;         
        
        
          if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2+1][tetris.j2].open){
                    right = true;
                } 
                else if(grid[tetris.i3+1][tetris.j3].open){
                    right = true;
                }  
                else if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }              
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                } 
                else if(grid[tetris.i3-1][tetris.j3].open){
                    left = true;
                } 
                else if(grid[tetris.i4-1][tetris.j4].open){
                    left = true;
                }                
            }   else {
                    left = false;
                }        
        
        
        
            //shape 7 option 2 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 18 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2+1][tetris.j2].open){
                    stopChange = true;
                } else if(grid[tetris.i2][tetris.j2+1].open){
                    stopChange = true;
                }             
            } else {
                stopChange = false;
            }         
        
        
    } 
        
    // shape 7 option 4    
    else if(shapeOptionFours == 3){
        
            tetris.i1 = (tetris.x/40);
            tetris.j1 = (tetris.y/40)-1;
            
            tetris.i2 = (tetris.x/40)+1;
            tetris.j2 = (tetris.y/40)-1;
            
            tetris.i3 = (tetris.x/40)+2;
            tetris.j3 = (tetris.y/40)-1;            
            
            tetris.i4 = (tetris.x/40);
            tetris.j4 = (tetris.y/40); 
        
        
          if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i3+1][tetris.j3].open){
                    right = true;
                } 
                else if(grid[tetris.i4+1][tetris.j4].open){
                    right = true;
                }             
            }   else {
                    right = false;
                }
        
            
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 19 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i1-1][tetris.j1].open){
                    left = true;
                } 
                else if(grid[tetris.i4-1][tetris.j4].open){
                    left = true;
                }                
            }   else {
                    left = false;
                }         
        
        
                    //shape 7 option 4 shapechange collision detection-----------------------------
            if(tetris.j4 <= 19 && tetris.j4 >= 1 && tetris.j3 <= 19 && tetris.j3 >= 1 && tetris.j2 <= 17 && tetris.j2 >= 1 && tetris.j1 <= 19 && tetris.j1 >= 1 && tetris.i4 <= 8 && tetris.i4 >=1 && tetris.i3 <= 8 && tetris.i3 >=1 && tetris.i2 <= 8 && tetris.i2 >=1  && tetris.i1 <= 8 && tetris.i1 >=1){
                if(grid[tetris.i2][tetris.j2+1].open){
                    stopChange = true;
                } else if(grid[tetris.i2][tetris.j2+2].open){
                    stopChange = true;
                } else if(grid[tetris.i2][tetris.j2+2].open){
                    stopChange = true;
                }             
            } else {
                stopChange = false;
            } 
        
    }    
        

        
    }
    
    

    
}

function make2DArray(col, row) {
    var arr = new Array(col);
    for(var i=0; i<arr.length; i++){
        arr[i] = new Array(row);
    }
    return arr;
}




function keyPressed() {
    if(keyCode == UP_ARROW){
    if(!stopChange){    
        
    if(tetris.shape == 1){
        if(shapeOption % 2 !== 0){
            if(tetris.x <= 400 && tetris.x >= 280){
                tetris.x -= 120;
            }
        }
    }    
     
//    -----------------------------------------------    
  
    if(tetris.shape == 3){
        if(shapeOption % 2 == 0){
            if(tetris.x <= 400 && tetris.x >= 320){
                tetris.x -= 40;
            }
        }
    }        
   
//    ----------------------------------------------- 
        
        
    if(tetris.shape == 4){
        if(shapeOption % 2 == 0){
            if(tetris.x <= 400 && tetris.x >= 320){
                tetris.x -= 40;
            }
        }
    }         
        
//    -----------------------------------------------        
        
    
    if(tetris.shape == 5){
        if(shapeOptionFours == 0){
            if(tetris.x <= 400 && tetris.x >= 360){
                tetris.x -= 40;
            }
        }
        
        else if(shapeOptionFours == 1){
            if(tetris.x <= 400 && tetris.x >= 320){
                tetris.x -= 80;
            }
        }
        
        else if(shapeOptionFours == 3){
            if(tetris.x >= 0 && tetris.x <= 40){
                tetris.x += 40;
            }
        }        
    }
        
//    -----------------------------------------------      
    
        
    if(tetris.shape == 6){
        if(shapeOptionFours == 1 || shapeOptionFours == 3){
            if(tetris.x <= 400 && tetris.x >= 240){
                tetris.x -= 40;
            }
            else if(tetris.x >= 0 && tetris.x <= 120){
                tetris.x += 40;
            }
        }
        
        else if(shapeOptionFours == 0 || shapeOptionFours == 2){
            if(tetris.x <= 400 && tetris.x >= 320){
                tetris.x -= 80;
            }
        }       
    }        
   
        
//    -----------------------------------------------         
    
        
    if(tetris.shape == 7){
        if(shapeOptionFours == 1 || shapeOptionFours == 3){
            if(tetris.x <= 400 && tetris.x >= 240){
                tetris.x -= 40;
            }
        }
        
        else if(shapeOptionFours == 0 || shapeOptionFours == 2){
            if(tetris.x <= 400 && tetris.x >= 320){
                tetris.x -= 40;
            }
        }       
    }        
        
        
    shapeOptionFours++;
    shapeOption++;
    if(shapeOptionFours >= 4){
        shapeOptionFours = 0;
    }
    }
    }
    if(keyCode == LEFT_ARROW){
        if(!left){
        if(tetris.shape == 7){
            if(shapeOptionFours == 0 || shapeOptionFours == 1 || shapeOptionFours == 2 || shapeOptionFours == 3){
                if(tetris.x >= 40){
                    tetris.x -= 40;
                }
            }
        }
//        ----------------------------------------
        
        else if(tetris.shape == 6){
            if(shapeOptionFours == 1 || shapeOptionFours == 2 || shapeOptionFours == 3){
                if(tetris.x >= 40){
                    tetris.x -= 40;
                }
            }
            else if(shapeOptionFours == 0){
                if(tetris.x >= 80){
                    tetris.x -= 40;
                }
            }            
        } 
//        ----------------------------------------
        
        else if(tetris.shape == 5){
            if(shapeOptionFours == 2 || shapeOptionFours == 3){
                if(tetris.x >= 40){
                    tetris.x -= 40;
                }
            }
            
            else if(shapeOptionFours == 0 || shapeOptionFours == 1){
                if(tetris.x >= 80){
                    tetris.x -= 40;
                }
            }            
        }       
//        ----------------------------------------
        
        else if(tetris.shape == 4){
            if(shapeOption % 2 !== 0 || shapeOption % 2 == 0){
                if(tetris.x >= 40){
                    tetris.x -= 40;
                }
            }           
        }         
        
//        ----------------------------------------        
        
        else if(tetris.shape == 3){
            if(shapeOption % 2 !== 0 || shapeOption % 2 == 0){
                if(tetris.x >= 40){
                    tetris.x -= 40;
                }
            }           
        }         
        
 //        ---------------------------------------- 
        
        else if(tetris.shape == 2){
                if(tetris.x >= 40){
                    tetris.x -= 40;
                }          
        }        
        
 //        ----------------------------------------         
        
        else if(tetris.shape == 1){
            if(shapeOption % 2 !== 0 || shapeOption % 2 == 0){
                if(tetris.x >= 40){
                    tetris.x -= 40;
                }
            }           
        }        
    }
}
    
    if(keyCode == RIGHT_ARROW){
        if(!right){
        if(tetris.shape == 7){
            if(shapeOptionFours == 0 || shapeOptionFours == 2){
                if(tetris.x <= 280){
                    tetris.x += 40;
                }
            }
            else if(shapeOptionFours == 1 || shapeOptionFours == 3){
                if(tetris.x <= 240){
                    tetris.x += 40;
                }                
            }
        }
   //        ----------------------------------------
        
        else if(tetris.shape == 6){
            if(shapeOptionFours == 0){
                if(tetris.x <= 320){
                    tetris.x += 40;
                }
            }
            else if(shapeOptionFours == 1 || shapeOptionFours == 3){
                if(tetris.x <= 240){
                    tetris.x += 40;
                }                
            }
            
            else if(shapeOptionFours == 2){
                if(tetris.x <= 280){
                    tetris.x += 40;
                }                
            }            
        }         
        
 //        ----------------------------------------        

        else if(tetris.shape == 5){
            if(shapeOptionFours == 1){
                if(tetris.x <= 320){
                    tetris.x += 40;
                }
            }
            
            else if(shapeOptionFours == 0 || shapeOptionFours == 3){
                if(tetris.x <= 280){
                    tetris.x += 40;
                }
            }
            
            else if(shapeOptionFours == 2){
                if(tetris.x <= 240){
                    tetris.x += 40;
                }
            }             
        }       
       
 //        ----------------------------------------        
        
        else if(tetris.shape == 4){
            if(shapeOption % 2 !== 0){
                if(tetris.x <= 240){
                    tetris.x += 40;
                }
            }
            else if(shapeOption % 2 == 0){
                if(tetris.x <= 280){
                    tetris.x += 40;
                }                
            }
        }         
        
 //        ----------------------------------------         
        
        else if(tetris.shape == 3){
            if(shapeOption % 2 !== 0){
                if(tetris.x <= 240){
                    tetris.x += 40;
                }
            }
            else if(shapeOption % 2 == 0){
                if(tetris.x <= 280){
                    tetris.x += 40;
                }                
            }
        }          
        
  //        ----------------------------------------            
        
        else if(tetris.shape == 2){
                if(tetris.x <= 280){
                    tetris.x += 40;
                }
        }  
        
  //        ----------------------------------------          
        
        else if(tetris.shape == 1){
            if(shapeOption % 2 !== 0){
                if(tetris.x <= 320){
                    tetris.x += 40;
                }
            }
            else if(shapeOption % 2 == 0){
                if(tetris.x <= 200){
                    tetris.x += 40;
                }                
            }
        }
    }
}
}






    // enabling this block of code in the draw function adds gravity to the cells, which isnt how tetris works apparently
    
//    for(var i=0; i<10; i++){
//        for(var j=0; j<20; j++){
//            if(j <= 18 && i >= 1 && i <= 8){
//            if(grid[i][j].col != -1 && grid[i+1][j].col == -1 && grid[i-1][j].col == -1 && grid[i][j-1].col == -1 && grid[i][j+1].col == -1){
//                grid[i][j+1].col = grid[i][j].col;
//                grid[i][j].col = -1;
//                grid[i][j].open = false;
//                grid[i][j+1].open = true;
//            }                                
//        }
//        }
//    }
//    
//    for(var i=0; i<10; i++){
//        for(var j=0; j<20; j++){
//            if(i === 0 && j <= 18){
//            if(grid[i][j].col != -1 && grid[i+1][j].col == -1 && grid[i][j-1].col == -1 && grid[i][j+1].col == -1){ 
//                grid[i][j+1].col = grid[i][j].col;
//                grid[i][j].col = -1;
//                grid[i][j].open = false;
//                grid[i][j+1].open = true;
//            }                                
//        }
//        }
//    }  
//    
//    for(var i=0; i<10; i++){
//        for(var j=0; j<20; j++){
//            if(i === 9 && j <= 18){
//            if(grid[i][j].col != -1 && grid[i-1][j].col == -1 && grid[i][j-1].col == -1 && grid[i][j+1].col == -1){
//                grid[i][j+1].col = grid[i][j].col;
//                grid[i][j].col = -1;
//                grid[i][j].open = false;
//                grid[i][j+1].open = true;
//            }                                
//        }
//        }
//    } 



//Keyboard arrows graphic by <a href="https://thenounproject.com/iconisland">tnp_iconisland</a> from <a href="https://thenounproject.com/">TheNounProject</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">LogoMaker.com</a> https://logomakr.com/7E7t9b7E7t9b




