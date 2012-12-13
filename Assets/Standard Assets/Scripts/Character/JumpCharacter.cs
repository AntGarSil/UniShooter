using UnityEngine;
using System.Collections;

public class Character : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	public float JumpSpeed = 100;
	 void Jump()
	{
    	animation.Play("jump_pose");
    	rigidbody.AddForce(Vector3.up *JumpSpeed);

	}
	
	// Update is called once per frame
	void Update () {
		if (UnityEngine.Input.GetButton("space")) 
     	Jump();
	}
}
