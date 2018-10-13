function block() {
    this.x = 160; 
    this.y = 0;
    
    this.i1 = 0;
    this.j1 = 0;
    
    this.i2 = 0;
    this.j2 = 0;
    
    this.i3 = 0;
    this.j3 = 0;
    
    this.i4 = 0;
    this.j4 = 0;
    
    
    this.show = function(){
        strokeWeight(4);
        if(this.shape == 1){
                if(shapeOption % 2 !== 0){
                fill(255,192,50);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+40,this.y);
                vertex(this.x+40,this.y+160);
                vertex(this.x,this.y+160);
                endShape(CLOSE);
                } else {
                fill(255,192,50);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+160,this.y);
                vertex(this.x+160,this.y+40);
                vertex(this.x,this.y+40);
                endShape(CLOSE);
                }
        } else if(this.shape == 2){
                if(shapeOption > -1){
                fill(241,138,59);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+80,this.y);
                vertex(this.x+80,this.y+80);
                vertex(this.x,this.y+80);
                endShape(CLOSE);
                }
         } else if(this.shape == 3){
                if(shapeOption % 2 !== 0){
                fill(195,34,25);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y+40);
                vertex(this.x+40,this.y+40);
                vertex(this.x+40,this.y);
                vertex(this.x+120,this.y);
                vertex(this.x+120,this.y+40);
                vertex(this.x+80,this.y+40);
                vertex(this.x+80,this.y+80);
                vertex(this.x,this.y+80);
                endShape(CLOSE);
                } else {
                fill(195,34,25);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x,this.y+80);
                vertex(this.x+40,this.y+80);
                vertex(this.x+40,this.y+120);
                vertex(this.x+80,this.y+120);
                vertex(this.x+80,this.y+40);
                vertex(this.x+40,this.y+40);
                vertex(this.x+40,this.y);
                endShape(CLOSE);                    
                }
         } else if(this.shape == 4){
                if(shapeOption % 2 !== 0){
                fill(255,245,211);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+80,this.y);
                vertex(this.x+80,this.y+40);
                vertex(this.x+120,this.y+40);
                vertex(this.x+120,this.y+80);
                vertex(this.x+40,this.y+80);
                vertex(this.x+40,this.y+40);
                vertex(this.x,this.y+40);
                endShape(CLOSE);
                } else {
                fill(255,245,211);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y+40);
                vertex(this.x+40,this.y+40);
                vertex(this.x+40,this.y);
                vertex(this.x+80,this.y);
                vertex(this.x+80,this.y+80);
                vertex(this.x+40,this.y+80);
                vertex(this.x+40,this.y+120);
                vertex(this.x,this.y+120);
                endShape(CLOSE);                    
                }
         } else if(this.shape == 5){
                if(shapeOptionFours == 0){
                fill(16,156,171);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+40,this.y);
                vertex(this.x+40,this.y+40);
                vertex(this.x+80,this.y+40);
                vertex(this.x+80,this.y+80);
                vertex(this.x+80,this.y+80);
                vertex(this.x-40,this.y+80);
                vertex(this.x-40,this.y+40);
                vertex(this.x,this.y+40);
                endShape(CLOSE);
                } else if(shapeOptionFours == 1){
                fill(16,156,171);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+40,this.y);
                vertex(this.x+40,this.y+120);
                vertex(this.x,this.y+120);
                vertex(this.x,this.y+80);
                vertex(this.x-40,this.y+80);
                vertex(this.x-40,this.y+40);
                vertex(this.x,this.y+40);
                endShape(CLOSE);                    
                } else if(shapeOptionFours == 2){
                fill(16,156,171);
                stroke(16,16,16);    
                beginShape();    
                vertex(this.x,this.y);    
                vertex(this.x+120,this.y);    
                vertex(this.x+120,this.y+40);    
                vertex(this.x+80,this.y+40);    
                vertex(this.x+80,this.y+80);    
                vertex(this.x+40,this.y+80);    
                vertex(this.x+40,this.y+40);    
                vertex(this.x,this.y+40);
                endShape(CLOSE);    
                } else if(shapeOptionFours == 3){
                fill(16,156,171);
                stroke(16,16,16);    
                beginShape();    
                vertex(this.x,this.y);    
                vertex(this.x+40,this.y);    
                vertex(this.x+40,this.y+40);    
                vertex(this.x+80,this.y+40);    
                vertex(this.x+80,this.y+80);    
                vertex(this.x+40,this.y+80);    
                vertex(this.x+40,this.y+120);    
                vertex(this.x,this.y+120);    
                endShape(CLOSE);    
                }
         } else if(this.shape == 6){
                if(shapeOptionFours == 0){
                fill(0,104,245); 
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+40,this.y);
                vertex(this.x+40,this.y+120);
                vertex(this.x-40,this.y+120);
                vertex(this.x-40,this.y+80);
                vertex(this.x,this.y+80);
                endShape(CLOSE);
                } else if(shapeOptionFours == 1){
                fill(0,104,245);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+120,this.y);
                vertex(this.x+120,this.y+80);
                vertex(this.x+80,this.y+80);
                vertex(this.x+80,this.y+40);
                vertex(this.x,this.y+40);
                endShape(CLOSE);                    
                } else if(shapeOptionFours == 2){
                fill(0,104,245); 
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+80,this.y);
                vertex(this.x+80,this.y+40);
                vertex(this.x+40,this.y+40);
                vertex(this.x+40,this.y+120);
                vertex(this.x,this.y+120);
                endShape(CLOSE);                    
                } else if(shapeOptionFours == 3){
                fill(0,104,245); 
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+40,this.y);
                vertex(this.x+40,this.y+40);
                vertex(this.x+120,this.y+40);
                vertex(this.x+120,this.y+80);
                vertex(this.x,this.y+80);
                endShape(CLOSE);                     
                }            
        } else if(this.shape == 7){
                if(shapeOptionFours == 0){
                fill(255,125,202);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);
                vertex(this.x+40,this.y);
                vertex(this.x+40,this.y+80);
                vertex(this.x+80,this.y+80);
                vertex(this.x+80,this.y+120);
                vertex(this.x,this.y+120);
                endShape(CLOSE);
                } else if(shapeOptionFours == 1){
                fill(255,125,202);   
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);                
                vertex(this.x+80,this.y);                
                vertex(this.x+80,this.y-40);                
                vertex(this.x+120,this.y-40);                
                vertex(this.x+120,this.y+40);                
                vertex(this.x,this.y+40);                
                endShape(CLOSE);                    
                } else if(shapeOptionFours == 2){
                fill(255,125,202);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);                              
                vertex(this.x+80,this.y);                              
                vertex(this.x+80,this.y+120); 
                vertex(this.x+40,this.y+120);
                vertex(this.x+40,this.y+40);                              
                vertex(this.x,this.y+40);                              
                endShape(CLOSE);                    
                } else if(shapeOptionFours == 3){
                fill(255,125,202);
                stroke(16,16,16);    
                beginShape();
                vertex(this.x,this.y);                              
                vertex(this.x+120,this.y);                         
                vertex(this.x+120,this.y+40);                         
                vertex(this.x+40,this.y+40);                         
                vertex(this.x+40,this.y+80);                         
                vertex(this.x,this.y+80);                         
                endShape(CLOSE);                    
                }            
        }
}
}