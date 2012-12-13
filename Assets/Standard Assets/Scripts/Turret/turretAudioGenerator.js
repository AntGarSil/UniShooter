var on : boolean = false;
@script RequireComponent(AudioSource)

function Start () {

}

function Update () {
	
	if (on){
		if(!audio.isPlaying)
		{
			audio.Play();
			//while(audio.isPlaying);
		}
	}
}