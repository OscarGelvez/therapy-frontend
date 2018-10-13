function cell(i,j) {
    this.iindex = i;
    this.jindex = j;
    this.i = 40 * i;
    this.j = 40 * j;
    this.s = 40;
    this.open = false;
    this.start = false;
    this.segment = "x";
    this.col = -1;
    
    this.show = function(){
        strokeWeight(4);
        if(!this.open || this.col == -1){
            stroke(16,16,16);
            fill(16,16,16);
            rect(this.i,this.j,this.s,this.s);
        } 
        else if(this.open && this.col == 1) {
            fill(255,192,50);
            stroke(16,16,16);
            rect(this.i,this.j,this.s,this.s);
        }
        else if(this.open && this.col == 2) {
            fill(241,138,59);    
            stroke(16,16,16);
            rect(this.i,this.j,this.s,this.s);
        }   
        else if(this.open && this.col == 3) {
            fill(195,34,25);   
            stroke(16,16,16);
            rect(this.i,this.j,this.s,this.s);
        }
        else if(this.open && this.col == 4) {
            fill(255,245,211); 
            stroke(16,16,16);
            rect(this.i,this.j,this.s,this.s);
        } 
        else if(this.open && this.col == 5) {
            fill(16,156,171); 
            stroke(16,16,16);
            rect(this.i,this.j,this.s,this.s);
        }        
        else if(this.open && this.col == 6) {
            fill(0,104,245);  
            stroke(16,16,16);
            rect(this.i,this.j,this.s,this.s);
        }
        else if(this.open && this.col == 7) {
            fill(255,125,202); 
            stroke(16,16,16);
            rect(this.i,this.j,this.s,this.s);
        }        
        else if(this.start){
            stroke(16,16,16);
            fill(16,16,16);
            rect(this.i,this.j,this.s,this.s);            
        }
    }
    
    //shape one vert start
    this.detectBlock = function(x,y){
        if(tetris.shape == 1){    
            if(shapeOption % 2 !== 0){
            if(x >= this.i && x + 40 <= this.i + 40 && y + 80 >= this.j && y <= this.j+40){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a1a";
                    this.col = 1;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a1b";
                    grid[this.iindex][this.jindex-1].col = 1;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].segment = "a1c";
                    grid[this.iindex][this.jindex-2].col = 1;
                    grid[this.iindex][this.jindex-3].open = true;
                    grid[this.iindex][this.jindex-3].segment = "a1d";
                    grid[this.iindex][this.jindex-3].col = 1;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
                    
            }   //shape one vert open
        } if(x >= this.i && x + 40 <= this.i + 40 && y + 80 >= this.j && y <= this.j + 40){
            if(this.open === false){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a1a";
                    this.col = 1;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a1b";
                    grid[this.iindex][this.jindex-1].col = 1;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].segment = "a1c";
                    grid[this.iindex][this.jindex-2].col = 1;
                    grid[this.iindex][this.jindex-3].open = true;
                    grid[this.iindex][this.jindex-3].segment = "a1d";
                    grid[this.iindex][this.jindex-3].col = 1;
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
                    score += 35;
            }
        }
        }
                //shape one horizontal start
        } else {
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a2a";
                    this.col = 1;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a2b";
                    grid[this.iindex+1][this.jindex].col = 1;
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].segment = "a2c";
                    grid[this.iindex+2][this.jindex].col = 1;
                    grid[this.iindex+3][this.jindex].open = true;
                    grid[this.iindex+3][this.jindex].segment = "a2d";
                    grid[this.iindex+3][this.jindex].col = 1;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            } 
            
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a2b";
                    this.col = 1;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a2a";
                    grid[this.iindex-1][this.jindex].col = 1;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a2c";
                    grid[this.iindex+1][this.jindex].col = 1;
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].segment = "a2d";
                    grid[this.iindex+2][this.jindex].col = 1;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }                 
            } 
            
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a2c";
                    this.col = 1;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a2b";
                    grid[this.iindex-1][this.jindex].col = 1;
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].segment = "a2a";
                    grid[this.iindex-2][this.jindex].col = 1;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a2d";
                    grid[this.iindex+1][this.jindex].col = 1;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            } 
            
            if(x + 120 >= this.i && x + 160 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a2d";
                    this.col = 1;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a2c";
                    grid[this.iindex-1][this.jindex].col = 1;
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].segment = "a2b";
                    grid[this.iindex-2][this.jindex].col = 1;
                    grid[this.iindex-3][this.jindex].open = true;
                    grid[this.iindex-3][this.jindex].segment = "a2a";
                    grid[this.iindex-3][this.jindex].col = 1;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            } 
            }
            
            
                //shape one horizontal open------------------------------------------
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a2a";
                    this.col = 1;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a2b";
                    grid[this.iindex+1][this.jindex].col = 1;
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].segment = "a2c";
                    grid[this.iindex+2][this.jindex].col = 1;
                    grid[this.iindex+3][this.jindex].open = true;
                    grid[this.iindex+3][this.jindex].segment = "a2d";
                    grid[this.iindex+3][this.jindex].col = 1;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }        
            } 
            
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a2b";
                    this.col = 1;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a2a";
                    grid[this.iindex-1][this.jindex].col = 1;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a2c";
                    grid[this.iindex+1][this.jindex].col = 1;
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].segment = "a2d";
                    grid[this.iindex+2][this.jindex].col = 1;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
            
            if(this.jindex <= 18){
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a2c";
                    this.col = 1;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a2b";
                    grid[this.iindex-1][this.jindex].col = 1;
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].segment = "a2a";
                    grid[this.iindex-2][this.jindex].col = 1;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a2d";
                    grid[this.iindex+1][this.jindex].col = 1;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
            
            if(this.jindex <= 18){
            if(x + 120 >= this.i && x + 160 <= this.i + 40 && y+40 >= this.j && y <= this.j){
            if(this.open === false){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a2d";
                    this.col = 1;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a2c";
                    grid[this.iindex-1][this.jindex].col = 1;
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].segment = "a2b";
                    grid[this.iindex-2][this.jindex].col = 1;
                    grid[this.iindex-3][this.jindex].open = true;
                    grid[this.iindex-3][this.jindex].segment = "a2a";
                    grid[this.iindex-3][this.jindex].col = 1;
                   tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
        }
        }
        
        
        
        //shape 2 vert start
        else if(tetris.shape == 2){      
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a3a";
                    this.col = 2;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a3b";
                    grid[this.iindex+1][this.jindex].col = 2;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a3c";
                    grid[this.iindex][this.jindex-1].col = 2;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].segment = "a3d";
                    grid[this.iindex+1][this.jindex-1].col = 2;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            } 
            
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a3b";
                    this.col = 2;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a3a";
                    grid[this.iindex-1][this.jindex].col = 2;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a3d";
                    grid[this.iindex][this.jindex-1].col = 2;                    
                    grid[this.iindex-1][this.jindex-1].open = true;                    
                    grid[this.iindex-1][this.jindex-1].segment = "a3c";                    
                    grid[this.iindex-1][this.jindex-1].col = 2;                    score += 35;
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }                 
            }  
                //shape 2 vert open
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a3a";
                    this.col = 2;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a3b";
                    grid[this.iindex+1][this.jindex].col = 2;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a3c";
                    grid[this.iindex][this.jindex-1].col = 2;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].segment = "a3d";
                    grid[this.iindex+1][this.jindex-1].col = 2;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
            
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a3b";
                    this.col = 2;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a3a";
                    grid[this.iindex-1][this.jindex].col = 2;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a3d";
                    grid[this.iindex][this.jindex-1].col = 2;                    
                    grid[this.iindex-1][this.jindex-1].open = true;                    
                    grid[this.iindex-1][this.jindex-1].segment = "a3c";                    
                    grid[this.iindex-1][this.jindex-1].col = 2;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }            
}
        

     //shape 3 flat start-------------------------------------------------
        else if(tetris.shape == 3){
            if(shapeOption % 2 !== 0){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a4a";
                    this.col = 3;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a4b";
                    grid[this.iindex+1][this.jindex].col = 3;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].segment = "a4c";
                    grid[this.iindex+1][this.jindex-1].col = 3;                    
                    grid[this.iindex+2][this.jindex-1].open = true;
                    grid[this.iindex+2][this.jindex-1].segment = "a4d";
                    grid[this.iindex+2][this.jindex-1].col = 3;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            } 
            
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a4b";
                    this.col = 3;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a4a";
                    grid[this.iindex-1][this.jindex].col = 3;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a4c";
                    grid[this.iindex][this.jindex-1].col = 3;                    
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].segment = "a4d";
                    grid[this.iindex+1][this.jindex-1].col = 3;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }                 
            }  
                
                
                
            //shape 3 flat open---------------------------
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a4a";
                    this.col = 3;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a4b";
                    grid[this.iindex+1][this.jindex].col = 3;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].segment = "a4c";
                    grid[this.iindex+1][this.jindex-1].col = 3;                    
                    grid[this.iindex+2][this.jindex-1].open = true;
                    grid[this.iindex+2][this.jindex-1].segment = "a4d";
                    grid[this.iindex+2][this.jindex-1].col = 3;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
            
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a4b";
                    this.col = 3;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a4a";
                    grid[this.iindex-1][this.jindex].col = 3;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a4c";
                    grid[this.iindex][this.jindex-1].col = 3;                    
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].segment = "a4d";
                    grid[this.iindex+1][this.jindex-1].col = 3;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
                
            if(this.jindex <= 18){
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a4d";
                    this.col = 3;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a4c";
                    grid[this.iindex-1][this.jindex].col = 3;
                    grid[this.iindex-1][this.jindex+1].open = true;
                    grid[this.iindex-1][this.jindex+1].segment = "a4b";
                    grid[this.iindex-1][this.jindex+1].col = 3;                    
                    grid[this.iindex-2][this.jindex+1].open = true;
                    grid[this.iindex-2][this.jindex+1].segment = "a4a";
                    grid[this.iindex-2][this.jindex+1].col = 3;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                
    } else {
        //shape 3 long start --------------------------------------
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a5a";
                    this.col = 3;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a5b";
                    grid[this.iindex][this.jindex-1].col = 3;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].segment = "a5c";
                    grid[this.iindex-1][this.jindex-1].col = 3;
                    grid[this.iindex-1][this.jindex-2].open = true;
                    grid[this.iindex-1][this.jindex-2].segment = "a5d";
                    grid[this.iindex-1][this.jindex-2].col = 3;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
        
        // shape 3 long open ------------------------------------------------
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a5c";
                    this.col = 3;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a5b";
                    grid[this.iindex+1][this.jindex].col = 3;
                    grid[this.iindex+1][this.jindex+1].open = true;
                    grid[this.iindex+1][this.jindex+1].segment = "a5a";
                    grid[this.iindex+1][this.jindex+1].col = 3;                    
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a5d";
                    grid[this.iindex][this.jindex-1].col = 3;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
            
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a5a";
                    this.col = 3;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a5b";
                    grid[this.iindex][this.jindex-1].col = 3;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].segment = "a5c";
                    grid[this.iindex-1][this.jindex-1].col = 3;
                    grid[this.iindex-1][this.jindex-2].open = true;
                    grid[this.iindex-1][this.jindex-2].segment = "a5d";
                    grid[this.iindex-1][this.jindex-2].col = 3;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }            
        
    }        
    }
        


     //shape 4 flat start-------------------------------------------------
        else if(tetris.shape == 4){
            if(shapeOption % 2 !== 0){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a6b";
                    this.col = 4;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a6a";
                    grid[this.iindex+1][this.jindex].col = 4;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a6c";
                    grid[this.iindex][this.jindex-1].col = 4;                    
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].segment = "a6d";
                    grid[this.iindex-1][this.jindex-1].col = 4;                   score += 35; 
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            } 
            
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a6a";
                    this.col = 4;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a6b";
                    grid[this.iindex-1][this.jindex].col = 4;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].segment = "a6c";
                    grid[this.iindex-1][this.jindex-1].col = 4;                    
                    grid[this.iindex-2][this.jindex+1].open = true;
                    grid[this.iindex-2][this.jindex+1].segment = "a6d";
                    grid[this.iindex-2][this.jindex+1].col = 4;                    score += 35;
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }                 
            }  
                
                
                
            //shape 4 flat open---------------------------
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18 && this.iindex <= 7){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a6d";
                    this.col = 4;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a6c";
                    grid[this.iindex+1][this.jindex].col = 4;
                    grid[this.iindex+1][this.jindex+1].open = true;
                    grid[this.iindex+1][this.jindex+1].segment = "a6b";
                    grid[this.iindex+1][this.jindex+1].col = 4;                    
                    grid[this.iindex+2][this.jindex+1].open = true;
                    grid[this.iindex+2][this.jindex+1].segment = "a6a";
                    grid[this.iindex+2][this.jindex+1].col = 4;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
            
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y+40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a6b";
                    this.col = 4;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].segment = "a6a";
                    grid[this.iindex+1][this.jindex].col = 4;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a6c";
                    grid[this.iindex][this.jindex-1].col = 4;                    
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].segment = "a6d";
                    grid[this.iindex-1][this.jindex-1].col = 4;                  score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
                
            if(this.jindex <= 18){
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a6a";
                    this.col = 4;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a6b";
                    grid[this.iindex-1][this.jindex].col = 4;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].segment = "a6c";
                    grid[this.iindex-1][this.jindex-1].col = 4;                    
                    grid[this.iindex-2][this.jindex-1].open = true;
                    grid[this.iindex-2][this.jindex-1].segment = "a6d";
                    grid[this.iindex-2][this.jindex-1].col = 4;                  score += 35;  
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                
    } else {
        //shape 4 long start --------------------------------------
            if(x >= this.i && x + 40 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.segment = "a7a";
                    this.col = 4;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a7b";
                    grid[this.iindex][this.jindex-1].col = 4;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].segment = "a7c";
                    grid[this.iindex+1][this.jindex-1].col = 4;
                    grid[this.iindex+1][this.jindex-2].open = true;
                    grid[this.iindex+1][this.jindex-2].segment = "a7d";
                    grid[this.iindex+1][this.jindex-2].col = 4;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
        
        // shape 4 long open ------------------------------------------------
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a7a";
                    this.col = 4;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a7b";
                    grid[this.iindex][this.jindex-1].col = 4;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].segment = "a7c";
                    grid[this.iindex+1][this.jindex-1].col = 4;
                    grid[this.iindex+1][this.jindex-2].open = true;
                    grid[this.iindex+1][this.jindex-2].segment = "a7d";
                    grid[this.iindex+1][this.jindex-2].col = 4;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
            
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.segment = "a7c";
                    this.col = 4;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].segment = "a7d";
                    grid[this.iindex][this.jindex-1].col = 4;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].segment = "a7b";
                    grid[this.iindex-1][this.jindex].col = 4;
                    grid[this.iindex-1][this.jindex+1].open = true;
                    grid[this.iindex-1][this.jindex+1].segment = "a7a";
                    grid[this.iindex-1][this.jindex+1].col = 4;
                    tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }            
    }                   
    }
        
        //shape 5 shapeoption 1 start
        else if(tetris.shape == 5){
            if(shapeOptionFours === 0){
            if(x - 40 >= this.i && x <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 5;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 5;                    
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].col = 5;                    score += 35;
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            } 
            
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 5;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 5;                    
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 5;                   tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }                 
            } 
                
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].col = 5;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 5;                    
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 5;                    score += 35;
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }                 
            } 
            //shape 5 shapeoption 1 long
            if(this.jindex <= 18){
            if(x - 40 >= this.i && x <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 5;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 5;                    
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].col = 5;                   score += 35; 
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
                
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 5;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 5;                    
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 5;                   tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
                
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].col = 5;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 5;                    
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 5;                    score += 35;
                   tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                
                
        //shape 5 option 2 start --------------------------------
        }   else if(shapeOptionFours === 1){
            if(x >= this.i && x + 40 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 5;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 5;                    
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 5;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }                 
            }
            //shape 5 option 2 open --------------------------------
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 5;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 5;                    
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 5;                  score += 35;  
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
            
            if(this.jindex <= 18){
            if(x - 40 >= this.i && x <= this.i + 40 && y + 40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 5;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 5;                    
                    grid[this.iindex+1][this.jindex+1].open = true;
                    grid[this.iindex+1][this.jindex+1].col = 5;                  score += 35;  
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }            
            } 
            //shape 5 option 3 start --------------------------------
            else if(shapeOptionFours === 2){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 5;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 5;                    
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 5;                  score += 35;  
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }                 
            }
            //shape 5 option 3 open --------------------------------    
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 5;
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].col = 5;                    
                    grid[this.iindex+1][this.jindex+1].open = true;
                    grid[this.iindex+1][this.jindex+1].col = 5;                 tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
                
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 5;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 5;                    
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 5;                  score += 35;  
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
                
            if(this.jindex <= 18){
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 5;
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].col = 5;                    
                    grid[this.iindex-1][this.jindex+1].open = true;
                    grid[this.iindex-1][this.jindex+1].col = 5;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                
            }
            //shape 5 option 4 start --------------------------------  
            else if(shapeOptionFours === 3){
            if(x >= this.i && x + 40 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 5;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 5;                    
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 5;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }                 
            }
            //shape 5 option 4 open --------------------------------     
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 5;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 5;                    
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 5;                  score += 35;  
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }    
                
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y + 40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 5;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 5;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 5;                    
                    grid[this.iindex-1][this.jindex+1].open = true;
                    grid[this.iindex-1][this.jindex+1].col = 5;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                 
            
            
        }
}          
         //shape 6 shape option 1 start
        else if(tetris.shape == 6){
            if(shapeOptionFours === 0){
            if(x - 40 >= this.i && x <= this.i + 40 && y+40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 6;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 6;                    
                    grid[this.iindex+1][this.jindex-2].open = true;
                    grid[this.iindex+1][this.jindex-2].col = 6;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            } 
                
            if(x >= this.i && x + 40 <= this.i + 40 && y+40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 6;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 6;                    
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 6;                   score += 35; 
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }     
            
            //shape 6 option 1 open ----------------------------------
            if(this.jindex <= 18){
            if(x - 40 >= this.i && x <= this.i + 40 && y+40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 6;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 6;                    
                    grid[this.iindex+1][this.jindex-2].open = true;
                    grid[this.iindex+1][this.jindex-2].col = 6;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
                
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y+40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 6;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 6;                    
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 6;                    score += 35;
                   tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                
                
            }
            
            else if(shapeOptionFours === 1){
            //shape 6 option 1 start ----------------------------
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 6;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 6;                    
                    grid[this.iindex-2][this.jindex-1].open = true;
                    grid[this.iindex-2][this.jindex-1].col = 6;                  score += 35;  
                   tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            } 
             
            //shape 6 option 1 open ----------------------------    
            if(this.jindex <= 18){
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y+40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 6;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 6;                    
                    grid[this.iindex-2][this.jindex-1].open = true;
                    grid[this.iindex-2][this.jindex-1].col = 6;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
                
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 6;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 6;                    
                    grid[this.iindex+1][this.jindex+1].open = true;
                    grid[this.iindex+1][this.jindex+1].col = 6;                  score += 35;  
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
                
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 6;
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].col = 6;                    
                    grid[this.iindex+2][this.jindex+1].open = true;
                    grid[this.iindex+2][this.jindex+1].col = 6;                  score += 35;  
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                
                
            }
            
            else if(shapeOptionFours === 2){
            //shape 6 option 3 start ----------------------------
            if(x >= this.i && x + 40 <= this.i + 40 && y+40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 6;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 6;                    
                    grid[this.iindex+1][this.jindex-2].open = true;
                    grid[this.iindex+1][this.jindex-2].col = 6;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
            
            //shape 6 option 3 open ----------------------------    
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y+40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 6;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 6;                    
                    grid[this.iindex+1][this.jindex-2].open = true;
                    grid[this.iindex+1][this.jindex-2].col = 6;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
                
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 6;
                    grid[this.iindex-1][this.jindex+1].open = true;
                    grid[this.iindex-1][this.jindex+1].col = 6;                    
                    grid[this.iindex-1][this.jindex+2].open = true;
                    grid[this.iindex-1][this.jindex+2].col = 6;                  score += 35;  
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                 
                
            }
            
            else if(shapeOptionFours === 3){
            //shape 6 option 3 start ----------------------------
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 6;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 6;                    
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].col = 6;                   score += 35; 
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
                
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 6;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 6;                    
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 6;                   score += 35; 
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
                
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 6;
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].col = 6;                    
                    grid[this.iindex-2][this.jindex-1].open = true;
                    grid[this.iindex-2][this.jindex-1].col = 6;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }  
               
            //shape 6 option 3 open ----------------------------    
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 6;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 6;                    
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].col = 6;                    score += 35;
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
                
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 6;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 6;                    
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 6;                   score += 35; 
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
                
            if(this.jindex <= 18){
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 6;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 6;
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].col = 6;                    
                    grid[this.iindex-2][this.jindex-1].open = true;
                    grid[this.iindex-2][this.jindex-1].col = 6;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                
                 
            }
            
            
}           //shape 7 option 1 start -------------------------------
            else if(tetris.shape == 7){
            if(shapeOptionFours === 0){
            if(x >= this.i && x + 40 <= this.i + 40 && y+40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 7;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 7;                    
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 7;                   score += 35; 
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
                
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y+40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 7;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 7;                    
                    grid[this.iindex-1][this.jindex-2].open = true;
                    grid[this.iindex-1][this.jindex-2].col = 7;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
                
            //shape 7 option 1 open --------------------    
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y+40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 7;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 7;                    
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 7;                    score += 35;
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
                
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y+40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 7;
                    grid[this.iindex-1][this.jindex-1].open = true;
                    grid[this.iindex-1][this.jindex-1].col = 7;                    
                    grid[this.iindex-1][this.jindex-2].open = true;
                    grid[this.iindex-1][this.jindex-2].col = 7;                  score += 35;  
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                
             
                
                
            }
                //shape 7 option 2 start ----------------
            else if(shapeOptionFours === 1){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 7;
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].col = 7;                    
                    grid[this.iindex+2][this.jindex-1].open = true;
                    grid[this.iindex+2][this.jindex-1].col = 7;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
                
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 7;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 7;                    
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 7;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
                
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 7;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 7;                    
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].col = 7;                   score += 35; 
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
                
            //shape 7 option 2 open----------------    
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 7;
                    grid[this.iindex+2][this.jindex].open = true;
                    grid[this.iindex+2][this.jindex].col = 7;                    
                    grid[this.iindex+2][this.jindex-1].open = true;
                    grid[this.iindex+2][this.jindex-1].col = 7;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }  
                
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 7;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 7;                    
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 7;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
                
            if(this.jindex <= 18){
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 7;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 7;                    
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].col = 7;                    score += 35;
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                
                
                
                
            }
            //shape 7 option 3 start----------------------------------    
            else if(shapeOptionFours === 2){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y+40 >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 7;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 7;                    
                    grid[this.iindex-1][this.jindex-2].open = true;
                    grid[this.iindex-1][this.jindex-2].col = 7;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
             
            //shape 7 option 3 open --------------------------------    
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y+40 >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 7;
                    grid[this.iindex][this.jindex-2].open = true;
                    grid[this.iindex][this.jindex-2].col = 7;                    
                    grid[this.iindex-1][this.jindex-2].open = true;
                    grid[this.iindex-1][this.jindex-2].col = 7;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }
                
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 17){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 7;
                    grid[this.iindex+1][this.jindex+1].open = true;
                    grid[this.iindex+1][this.jindex+1].col = 7;                    
                    grid[this.iindex+1][this.jindex+2].open = true;
                    grid[this.iindex+1][this.jindex+2].col = 7;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                
                
            }
                
            //shape 7 option 4 start    
            else if(shapeOptionFours === 3){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
                if(this.start){
                    this.start = false;
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 7;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 7;                    
                    grid[this.iindex+2][this.jindex-1].open = true;
                    grid[this.iindex+2][this.jindex-1].col = 7;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }         
            }
                
            //shape 7 option 4 open  
            if(this.jindex <= 18){
            if(x >= this.i && x + 40 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex][this.jindex-1].open = true;
                    grid[this.iindex][this.jindex-1].col = 7;
                    grid[this.iindex+1][this.jindex-1].open = true;
                    grid[this.iindex+1][this.jindex-1].col = 7;                    
                    grid[this.iindex+2][this.jindex-1].open = true;
                    grid[this.iindex+2][this.jindex-1].col = 7;                 score += 35;   
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
                
            if(this.jindex <= 18){
            if(x + 40 >= this.i && x + 80 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 7;
                    grid[this.iindex-1][this.jindex+1].open = true;
                    grid[this.iindex-1][this.jindex+1].col = 7;                    
                    grid[this.iindex+1][this.jindex].open = true;
                    grid[this.iindex+1][this.jindex].col = 7;                   score += 35; 
                    tetris.y = -160;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            } 
                
            if(this.jindex <= 18){
            if(x + 80 >= this.i && x + 120 <= this.i + 40 && y >= this.j && y <= this.j){
            if(this.open === false && this.jindex <= 18){
            if(grid[this.iindex][this.jindex+1].open === true){
                    this.open = true;
                    this.col = 7;
                    grid[this.iindex-1][this.jindex].open = true;
                    grid[this.iindex-1][this.jindex].col = 7;
                    grid[this.iindex-2][this.jindex].open = true;
                    grid[this.iindex-2][this.jindex].col = 7;                    
                    grid[this.iindex-2][this.jindex+1].open = true;
                    grid[this.iindex-2][this.jindex+1].col = 7;                 tetris.y = -160;
                    score += 35;
                    shapeArr.shift();
                    tetris.shape = shapeArr[0];
            }
            }
            }
            }                 
                
            }
}
}
    
    
//    -------------------------------------DETECT SHAPE END----------------------------
    
    this.detectRowFill = function() {
        for(var f=0; f<20; f++){
                if(grid[0][f].open && grid[1][f].open && grid[2][f].open && grid[3][f].open && grid[4][f].open && grid[5][f].open && grid[6][f].open && grid[7][f].open && grid[8][f].open && grid[9][f].open){
                    clears++;
                    var lvls = f;
                    for(var i=0; i<10; i++){
                        grid[i][f].open = false;
                        grid[i][f].start = false;
                        grid[i][f].col = -1;
                    }
//                    -----
                    
                    for(var l = lvls; l>=1; l--){
                        for(var a=0; a<10; a++){
                        grid[a][l].col = grid[a][l-1].col;
                        if(grid[a][l].col !== -1){
                            grid[a][l].open = true;
                        }                            
                        }
                    }
                    
                    for(var i=0; i<10; i++){
                        for(var j=0; j<20; j++){
                            grid[i][j].open = false;
                        }
                    }
                    
                    for(var i=0; i<10; i++){
                        for(var j=0; j<20; j++){
                            if(grid[i][j].col != -1){
                                grid[i][j].open = true;
                            }
                        }
                    }                   
                    }
                }          
            }
}





























