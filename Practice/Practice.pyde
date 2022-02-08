
####
#rings

numRings = 40
ring = [0]*numRings
currentRing = 0

colour = None
def setup():
    size(600,600)
    smooth()
    global numRings, ring;
    
    for i in range(numRings):
        colour = color(random(255),random(255),random(255))
        ring[i] = Ring(0,0,0,False,colour); #create new Ring
        
def draw():
    global numRings,ring;
    background(251,128,114)
    
    for i in range (numRings):
        ring[i].grow();
        ring[i].display();
def mousePressed():
    global numbRings, ring;
    
    ring[currentRing].start(mouseX,mouseY)
    
    currentRing += 1 
    if (currentRing >= numRings):
        currentRing = 0
    
    
    
    
class Ring(object):    
    def __intit__(self,x,y,diameter, on, colour) :
        
        self.x = x
        self.y = y
        self.diameter = diameter
        self.on = False
        self.colour = colour
    def start(self,xpos,ypos):
    
        self.xpos = xpos;
        self.ypos = ypos;
        self.on = True;
        self.diameter = 1;
        
        
    def grow(self):
        if (self.on == True):
            self.diameter += 1.5
            if(self.diameter > 400):
                self.on = False
        
    def display(self):
        if (self.on == True):
            noFill()
            strokeWeight()
            stroke(self.colour)
            ellipse(self.x,self.y,self.diameter,self.diameter)
