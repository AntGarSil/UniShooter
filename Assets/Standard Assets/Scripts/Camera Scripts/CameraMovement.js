#pragma strict

var speed = 60.0f;

function Start () {
 //Screen.showCursor = false;
}

function Update()
{
    var movement = Vector3.zero;
    var rotation = Vector3.zero;

	if(!Input.GetKey(KeyCode.LeftControl))
	{	
    if (Input.GetKey(KeyCode.UpArrow))
        movement.z++;
    if (Input.GetKey(KeyCode.DownArrow))
        movement.z--;
    if (Input.GetKey(KeyCode.LeftArrow))
        movement.x--;
    if (Input.GetKey(KeyCode.RightArrow))
        movement.x++;
    }    

	if(Input.GetKey(KeyCode.LeftControl))
	{		
		//Rotate right
	if (Input.GetKey(KeyCode.RightArrow))	        
		rotation.y++;
		
		//Rotate left
	if (Input.GetKey(KeyCode.LeftArrow))
		rotation.y--;
		
		//Rotate up
	if (Input.GetKey(KeyCode.UpArrow))	        
		rotation.x--;
		
		//Rotate down
	if (Input.GetKey(KeyCode.DownArrow))
		rotation.x++;		
	
	}
        
    

    transform.Translate(movement * speed * Time.deltaTime, Space.Self);
    transform.Rotate(rotation * speed * Time.deltaTime, Space.Self);
    //transform.Rotate(Vector3.left * speed * Time.deltaTime, Space.Self);
}