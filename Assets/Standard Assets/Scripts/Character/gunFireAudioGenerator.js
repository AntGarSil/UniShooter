#pragma strict

var on : boolean = false;
@script RequireComponent(AudioSource)
var e : Event = Event.current;

function Start () {

}

function Update () {
	
	 
	  if(Input.GetMouseButton(0)){
		if(!audio.isPlaying)
			audio.Play();
		//yield WaitForSeconds (audio.clip.length);
	  }
	  
	  if(!Input.GetMouseButton(0))
	  {
		if(audio.isPlaying)
			audio.Stop();
	  		  	//audio.Stop();
	  }
}