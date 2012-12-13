function Start () {
     // Start a download of the given URL
    //var www : WWW = new WWW ("http://fotobg.ru/upload/img1348666202.jpg");

    // Wait for download to complete
    //yield www;

    // assign texture
    //renderer.material.mainTexture = www.texture;
	//Initial block coordinates
	var position = new Vector3(786.5109,492.0929,187.7682);
	var scale = new Vector3(40,-0.75,40);	
	
	generatePyramid(position,scale);
}

function Update () {
	//var position = new Vector3(778.8,498.5929,190.7682);
	//generatePyramid(position,null);
	
}


function generatePyramid(position, scale)
{
	if(scale[0] != 0 && scale[2] != 0){
	  var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
      cube.AddComponent(Rigidbody);
      cube.rigidbody.useGravity = false;
      cube.rigidbody.mass = 1000000000;
      cube.renderer.material.color = new Color(1,0,0,22);
      cube.renderer.receiveShadows = true;
      
      cube.transform.position = Vector3 (position[0], position[1], position[2]);
      cube.transform.localScale += Vector3(scale[0],scale[1],scale[2]);
      
      var newpos = new Vector3(position[0],position[1] + 0.25, position[2]);
      var newscale = new Vector3(scale[0] - 1, scale[1], scale[2] - 1);
      generatePyramid(newpos,newscale);
     }
}

function fixpos(position)
{
	
}