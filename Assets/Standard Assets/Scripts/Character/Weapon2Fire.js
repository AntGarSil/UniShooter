function Start () {

}

function Update () {

}

function LateUpdate () {
    // extract the particles
    var particles = particleEmitter.particles;
    for (var i = 0; i < particles.Length; i++) {
        // Move the particles up and down on a sinus curve
        var yPosition = Mathf.Sin (Time.time) * Time.deltaTime;
        particles[i].position += Vector3 (0, yPosition, 0);
        // make the particles red
        particles[i].color = Color.red;
        // modify the size on a sinus curve
        particles[i].size = Mathf.Sin (Time.time) * 0.2;
    }
    // copy them back to the particle emitter
    particleEmitter.particles = particles;
}