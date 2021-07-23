#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 mo = gl_FragCoord.xy/u_mouse;
    float red = mo.x*mo.y;
    float green = (mo.x*mo.x);
    red = red/green;
    float blue = sin((mo.y*mo.y)*-1.0)*cos(u_time);
    blue = red*green;
	gl_FragColor = vec4(red,green,blue,1.0);
}
