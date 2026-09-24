var jl="186";var tc=0,Ea=1,ec=2;var ds=1,lr=2,Gi=3,Hi=0,He=1,Re=2,pn=0,fs=1,qn=2,ba=3,Ta=4,nc=5;var zi=100,ic=101,sc=102,rc=103,ac=104,oc=200,lc=201,cc=202,hc=203,uc=204,dc=205,fc=206,pc=207,mc=208,gc=209,_c=210,xc=211,yc=212,vc=213,Mc=214,Sc=0,Ec=1,bc=2,wa=3,Tc=4,wc=5,Ac=6,Rc=7,Cc=0,Pc=1,Ic=2,rn=0,Aa=1,Ra=2,Ca=3,ps=4,Pa=5,Ia=6,La=7;var ki=301,ai=302,Vi=303,cr=304,ms=306,an=1000,hr=1001,Lc=1002,Yn=1003,Dc=1004;var gs=1005;var ze=1006,ur=1007;var oi=1008;var on=1009,Nc=1010,Uc=1011,_s=1012,Da=1013,Zn=1014,Pn=1015,mn=1016,Na=1017,Ua=1018,Wi=1020,Fc=35902,Oc=35899,Bc=1021,Gc=1022,gn=1023,li=1026,ci=1027,Hc=1028,Fa=1029,hi=1030,Oa=1031;var Ba=1033,dr=33776,fr=33777,pr=33778,mr=33779,Ga=35840,Ha=35841,za=35842,ka=35843,Va=36196,Wa=37492,Xa=37496,qa=37488,Ya=37489,gr=37490,Za=37491,Ja=37808,$a=37809,Ka=37810,Qa=37811,ja=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,co=36492,ho=36494,uo=36495,fo=36283,po=36284,_r=36285,mo=36286;var go=0,zc=1,ui="",kc="srgb",_o="srgb-linear",xo="linear",me="srgb";var Vc=512,Wc=513,Xc=514,xr=515,qc=516,Yc=517,yr=518,Zc=519;var yo="300 es",vo=2000;function eu(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nu(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function os(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Jc(){let t=os("canvas");return t.style.display="block",t}var Sl={},Oi=null;function Mo(...t){let e="THREE."+t.shift();if(Oi)Oi("log",e,...t);else console.log(e,...t)}function $c(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Bt(...t){t=$c(t);let e="THREE."+t.shift();if(Oi)Oi("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function kt(...t){t=$c(t);let e="THREE."+t.shift();if(Oi)Oi("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function si(...t){let e=t.join(" ");if(e in Sl)return;Sl[e]=!0,Bt(...t)}function Kc(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Qc={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class In{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yr=Math.PI/180,ls=180/Math.PI;function Xi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[t&255]+Ne[t>>8&255]+Ne[t>>16&255]+Ne[t>>24&255]+"-"+Ne[e&255]+Ne[e>>8&255]+"-"+Ne[e>>16&15|64]+Ne[e>>24&255]+"-"+Ne[n&63|128]+Ne[n>>8&255]+"-"+Ne[n>>16&255]+Ne[n>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function iu(t,e){return(t%e+e)%e}function Zr(t,e,n){return(1-n)*t+n*e}function Qi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Ge(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class dt{static{dt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],f=s[r+0],h=s[r+1],m=s[r+2],g=s[r+3];if(u!==g||o!==f||l!==h||c!==m){let M=o*f+l*h+c*m+u*g;if(M<0)f=-f,h=-h,m=-m,g=-g,M=-M;let p=1-a;if(M<0.9995){let d=Math.acos(M),E=Math.sin(d);p=Math.sin(p*d)/E,a=Math.sin(a*d)/E,o=o*p+f*a,l=l*p+h*a,c=c*p+m*a,u=u*p+g*a}else{o=o*p+f*a,l=l*p+h*a,c=c*p+m*a,u=u*p+g*a;let d=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=d,l*=d,c*=d,u*=d}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],f=s[r+1],h=s[r+2],m=s[r+3];return t[e]=a*m+c*u+o*h-l*f,t[e+1]=o*m+c*f+l*u-a*h,t[e+2]=l*m+c*h+a*f-o*u,t[e+3]=c*m-a*u-o*f-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),u=a(s/2),f=o(n/2),h=o(i/2),m=o(s/2);switch(r){case"XYZ":this._x=f*c*u+l*h*m,this._y=l*h*u-f*c*m,this._z=l*c*m+f*h*u,this._w=l*c*u-f*h*m;break;case"YXZ":this._x=f*c*u+l*h*m,this._y=l*h*u-f*c*m,this._z=l*c*m-f*h*u,this._w=l*c*u+f*h*m;break;case"ZXY":this._x=f*c*u-l*h*m,this._y=l*h*u+f*c*m,this._z=l*c*m+f*h*u,this._w=l*c*u-f*h*m;break;case"ZYX":this._x=f*c*u-l*h*m,this._y=l*h*u+f*c*m,this._z=l*c*m-f*h*u,this._w=l*c*u+f*h*m;break;case"YZX":this._x=f*c*u+l*h*m,this._y=l*h*u+f*c*m,this._z=l*c*m-f*h*u,this._w=l*c*u-f*h*m;break;case"XZY":this._x=f*c*u-l*h*m,this._y=l*h*u-f*c*m,this._z=l*c*m+f*h*u,this._w=l*c*u+f*h*m;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],f=n+a+u;if(f>0){let h=0.5/Math.sqrt(f+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>u){let h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{C.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Jr=new C,El=new Ln;class Vt{static{Vt.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],f=n[2],h=n[5],m=n[8],g=i[0],M=i[3],p=i[6],d=i[1],E=i[4],w=i[7],_=i[2],T=i[5],R=i[8];return s[0]=r*g+a*d+o*_,s[3]=r*M+a*E+o*T,s[6]=r*p+a*w+o*R,s[1]=l*g+c*d+u*_,s[4]=l*M+c*E+u*T,s[7]=l*p+c*w+u*R,s[2]=f*g+h*d+m*_,s[5]=f*M+h*E+m*T,s[8]=f*p+h*w+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=c*r-a*l,f=a*o-c*s,h=l*s-r*o,m=e*u+n*f+i*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=u*g,t[1]=(i*l-c*n)*g,t[2]=(a*n-i*r)*g,t[3]=f*g,t[4]=(c*e-i*o)*g,t[5]=(i*s-a*e)*g,t[6]=h*g,t[7]=(n*o-l*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return si("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($r.makeScale(t,e)),this}rotate(t){return si("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($r.makeRotation(-t)),this}translate(t,e){return si("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($r.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var $r=new Vt,bl=new Vt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Tl=new Vt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function su(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Rn(s.r),s.g=Rn(s.g),s.b=Rn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return si("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return si("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:bl,fromXYZ:Tl,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:bl,fromXYZ:Tl,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var ne=su();function Rn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Fi(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Ei;class So{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(Ei===void 0)Ei=os("canvas");Ei.width=t.width,Ei.height=t.height;let i=Ei.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=Ei}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=os("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Rn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Rn(e[n]/255)*255);else e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var ru=0;class xs{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(Kr(i[r].image));else s.push(Kr(i[r]))}else s=Kr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Kr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return So.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Bt("Texture: Unable to serialize Texture."),{}}var au=0,Qr=new C;class Le extends In{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Le.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Xi(),this.name="",this.source=new xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qr).x}get height(){return this.source.getSize(Qr).y}get depth(){return this.source.getSize(Qr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=300;Le.DEFAULT_ANISOTROPY=1;class Me{static{Me.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],u=o[8],f=o[1],h=o[5],m=o[9],g=o[2],M=o[6],p=o[10];if(Math.abs(c-f)<0.01&&Math.abs(u-g)<0.01&&Math.abs(m-M)<0.01){if(Math.abs(c+f)<0.1&&Math.abs(u+g)<0.1&&Math.abs(m+M)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,w=(h+1)/2,_=(p+1)/2,T=(c+f)/4,R=(u+g)/4,A=(m+M)/4;if(E>w&&E>_)if(E<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(E),i=T/n,s=R/n;else if(w>_)if(w<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(w),n=T/i,s=A/i;else if(_<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(_),n=R/s,i=A/s;return this.set(n,i,s,e),this}let d=Math.sqrt((M-m)*(M-m)+(u-g)*(u-g)+(f-c)*(f-c));if(Math.abs(d)<0.001)d=1;return this.x=(M-m)/d,this.y=(u-g)/d,this.z=(f-c)/d,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eo extends In{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Le(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new xs(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ye extends Eo{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class vr extends Le{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bo extends Le{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class pe{static{pe.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,u,f,h,m,g,M){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,u,f,h,m,g,M)}set(t,e,n,i,s,r,a,o,l,c,u,f,h,m,g,M){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=o,p[2]=l,p[6]=c,p[10]=u,p[14]=f,p[3]=h,p[7]=m,p[11]=g,p[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/bi.setFromMatrixColumn(t,0).length(),s=1/bi.setFromMatrixColumn(t,1).length(),r=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=r*c,h=r*u,m=a*c,g=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=h+m*l,e[5]=f-g*l,e[9]=-a*o,e[2]=g-f*l,e[6]=m+h*l,e[10]=r*o}else if(t.order==="YXZ"){let f=o*c,h=o*u,m=l*c,g=l*u;e[0]=f+g*a,e[4]=m*a-h,e[8]=r*l,e[1]=r*u,e[5]=r*c,e[9]=-a,e[2]=h*a-m,e[6]=g+f*a,e[10]=r*o}else if(t.order==="ZXY"){let f=o*c,h=o*u,m=l*c,g=l*u;e[0]=f-g*a,e[4]=-r*u,e[8]=m+h*a,e[1]=h+m*a,e[5]=r*c,e[9]=g-f*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let f=r*c,h=r*u,m=a*c,g=a*u;e[0]=o*c,e[4]=m*l-h,e[8]=f*l+g,e[1]=o*u,e[5]=g*l+f,e[9]=h*l-m,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let f=r*o,h=r*l,m=a*o,g=a*l;e[0]=o*c,e[4]=g-f*u,e[8]=m*u+h,e[1]=u,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*u+m,e[10]=f-g*u}else if(t.order==="XZY"){let f=r*o,h=r*l,m=a*o,g=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=f*u+g,e[5]=r*c,e[9]=h*u-m,e[2]=m*u-h,e[6]=a*c,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ou,t,lu)}lookAt(t,e,n){let i=this.elements;if(We.subVectors(t,e),We.lengthSq()===0)We.z=1;if(We.normalize(),zn.crossVectors(n,We),zn.lengthSq()===0){if(Math.abs(n.z)===1)We.x+=0.0001;else We.z+=0.0001;We.normalize(),zn.crossVectors(n,We)}return zn.normalize(),Ds.crossVectors(We,zn),i[0]=zn.x,i[4]=Ds.x,i[8]=We.x,i[1]=zn.y,i[5]=Ds.y,i[9]=We.y,i[2]=zn.z,i[6]=Ds.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],f=n[9],h=n[13],m=n[2],g=n[6],M=n[10],p=n[14],d=n[3],E=n[7],w=n[11],_=n[15],T=i[0],R=i[4],A=i[8],x=i[12],S=i[1],O=i[5],D=i[9],F=i[13],Z=i[2],I=i[6],H=i[10],J=i[14],z=i[3],at=i[7],W=i[11],Q=i[15];return s[0]=r*T+a*S+o*Z+l*z,s[4]=r*R+a*O+o*I+l*at,s[8]=r*A+a*D+o*H+l*W,s[12]=r*x+a*F+o*J+l*Q,s[1]=c*T+u*S+f*Z+h*z,s[5]=c*R+u*O+f*I+h*at,s[9]=c*A+u*D+f*H+h*W,s[13]=c*x+u*F+f*J+h*Q,s[2]=m*T+g*S+M*Z+p*z,s[6]=m*R+g*O+M*I+p*at,s[10]=m*A+g*D+M*H+p*W,s[14]=m*x+g*F+M*J+p*Q,s[3]=d*T+E*S+w*Z+_*z,s[7]=d*R+E*O+w*I+_*at,s[11]=d*A+E*D+w*H+_*W,s[15]=d*x+E*F+w*J+_*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],u=t[6],f=t[10],h=t[14],m=t[3],g=t[7],M=t[11],p=t[15],d=o*h-l*f,E=a*h-l*u,w=a*f-o*u,_=r*h-l*c,T=r*f-o*c,R=r*u-a*c;return e*(g*d-M*E+p*w)-n*(m*d-M*_+p*T)+i*(m*E-g*_+p*R)-s*(m*w-g*T+M*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],f=t[10],h=t[11],m=t[12],g=t[13],M=t[14],p=t[15],d=e*a-n*r,E=e*o-i*r,w=e*l-s*r,_=n*o-i*a,T=n*l-s*a,R=i*l-s*o,A=c*g-u*m,x=c*M-f*m,S=c*p-h*m,O=u*M-f*g,D=u*p-h*g,F=f*p-h*M,Z=d*F-E*D+w*O+_*S-T*x+R*A;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/Z;return t[0]=(a*F-o*D+l*O)*I,t[1]=(i*D-n*F-s*O)*I,t[2]=(g*R-M*T+p*_)*I,t[3]=(f*T-u*R-h*_)*I,t[4]=(o*S-r*F-l*x)*I,t[5]=(e*F-i*S+s*x)*I,t[6]=(M*w-m*R-p*E)*I,t[7]=(c*R-f*w+h*E)*I,t[8]=(r*D-a*S+l*A)*I,t[9]=(n*S-e*D-s*A)*I,t[10]=(m*T-g*w+p*d)*I,t[11]=(u*w-c*T-h*d)*I,t[12]=(a*x-r*O-o*A)*I,t[13]=(e*O-n*x+i*A)*I,t[14]=(g*E-m*_-M*d)*I,t[15]=(c*_-u*E+f*d)*I,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,u=a+a,f=s*l,h=s*c,m=s*u,g=r*c,M=r*u,p=a*u,d=o*l,E=o*c,w=o*u,{x:_,y:T,z:R}=n;return i[0]=(1-(g+p))*_,i[1]=(h+w)*_,i[2]=(m-E)*_,i[3]=0,i[4]=(h-w)*T,i[5]=(1-(f+p))*T,i[6]=(M+d)*T,i[7]=0,i[8]=(m+E)*R,i[9]=(M-d)*R,i[10]=(1-(f+g))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=bi.set(i[0],i[1],i[2]).length(),a=bi.set(i[4],i[5],i[6]).length(),o=bi.set(i[8],i[9],i[10]).length();if(s<0)r=-r;en.copy(this);let l=1/r,c=1/a,u=1/o;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=c,en.elements[5]*=c,en.elements[6]*=c,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i),m,g;if(o)m=s/(r-s),g=r*s/(r-s);else if(a===2000)m=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===2001)m=-r/(r-s),g=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),h=-(n+i)/(n-i),m,g;if(o)m=1/(r-s),g=r/(r-s);else if(a===2000)m=-2/(r-s),g=-(r+s)/(r-s);else if(a===2001)m=-1/(r-s),g=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var bi=new C,en=new pe,ou=new C(0,0,0),lu=new C(1,1,1),zn=new C,Ds=new C,We=new C,wl=new pe,Al=new Ln;class Cn{constructor(t=0,e=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],f=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Qt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(f,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Qt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Al.setFromEuler(this),this.setFromQuaternion(Al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Mr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var cu=0,Rl=new C,Ti=new Ln,En=new pe,Ns=new C,ji=new C,hu=new C,uu=new Ln,Cl=new C(1,0,0),Pl=new C(0,1,0),Il=new C(0,0,1),Ll={type:"added"},du={type:"removed"},wi={type:"childadded",child:null},jr={type:"childremoved",child:null};class Ee extends In{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();let t=new C,e=new Cn,n=new Ln,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new Vt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Cl,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,e){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cl,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Ns.copy(t);else Ns.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)En.lookAt(ji,Ns,this.up);else En.lookAt(Ns,ji,this.up);if(this.quaternion.setFromRotationMatrix(En),i)En.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(En),this.quaternion.premultiply(Ti.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return kt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ll),wi.child=t,this.dispatchEvent(wi),wi.child=null;else kt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(du),jr.child=t,this.dispatchEvent(jr),jr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld);return t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ll),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,uu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),u=r(t.shapes),f=r(t.skeletons),h=r(t.animations),m=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(f.length>0)n.skeletons=f;if(h.length>0)n.animations=h;if(m.length>0)n.nodes=m}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ee.DEFAULT_UP=new C(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ct extends Ee{constructor(){super();this.isGroup=!0,this.type="Group"}}var fu={type:"move"};class ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let g of t.hand.values()){let M=e.getJointPose(g,n),p=this._getHandJoint(l,g);if(M!==null)p.matrix.fromArray(M.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=M.radius;p.visible=M!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),h=0.02,m=0.005;if(l.inputState.pinching&&f>h+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&f<=h-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(fu)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ta(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=iu(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=ta(r,s,t+0.3333333333333333),this.g=ta(r,s,t),this.b=ta(r,s,t-0.3333333333333333)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=jc[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Bt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return ne.workingToColorSpace(Ue.copy(this),t),Math.round(Qt(Ue.r*255,0,255))*65536+Math.round(Qt(Ue.g*255,0,255))*256+Math.round(Qt(Ue.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ue.copy(this),e);let{r:n,g:i,b:s}=Ue,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t="srgb"){ne.workingToColorSpace(Ue.copy(this),t);let{r:e,g:n,b:i}=Ue;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(Us);let n=Zr(kn.h,Us.h,e),i=Zr(kn.s,Us.s,e),s=Zr(kn.l,Us.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ue=new zt;zt.NAMES=jc;class vs{constructor(t,e=0.00025){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new vs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sr extends Ee{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var nn=new C,bn=new C,ea=new C,Tn=new C,Ai=new C,Ri=new C,Dl=new C,na=new C,ia=new C,sa=new C,ra=new Me,aa=new Me,oa=new Me;class $e{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),nn.subVectors(t,e),i.cross(nn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){nn.subVectors(i,e),bn.subVectors(n,e),ea.subVectors(t,e);let r=nn.dot(nn),a=nn.dot(bn),o=nn.dot(ea),l=bn.dot(bn),c=bn.dot(ea),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,h=(l*o-a*c)*f,m=(r*c-a*o)*f;return s.set(1-h-m,m,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Tn)===null)return!1;return Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Tn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Tn.x),o.addScaledVector(r,Tn.y),o.addScaledVector(a,Tn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return ra.setScalar(0),aa.setScalar(0),oa.setScalar(0),ra.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,n),oa.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ra,s.x),r.addScaledVector(aa,s.y),r.addScaledVector(oa,s.z),r}static isFrontFacing(t,e,n,i){return nn.subVectors(n,e),bn.subVectors(t,e),nn.cross(bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),nn.cross(bn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;Ai.subVectors(i,n),Ri.subVectors(s,n),na.subVectors(t,n);let o=Ai.dot(na),l=Ri.dot(na);if(o<=0&&l<=0)return e.copy(n);ia.subVectors(t,i);let c=Ai.dot(ia),u=Ri.dot(ia);if(c>=0&&u<=c)return e.copy(i);let f=o*u-c*l;if(f<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(Ai,r);sa.subVectors(t,s);let h=Ai.dot(sa),m=Ri.dot(sa);if(m>=0&&h<=m)return e.copy(s);let g=h*l-o*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ri,a);let M=c*m-h*u;if(M<=0&&u-c>=0&&h-m>=0)return Dl.subVectors(s,i),a=(u-c)/(u-c+(h-m)),e.copy(i).addScaledVector(Dl,a);let p=1/(M+g+f);return r=g*p,a=f*p,e.copy(n).addScaledVector(Ai,r).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class di{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,sn);else sn.fromBufferAttribute(s,r);sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Fs.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Fs.copy(n.boundingBox)}Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),Os.subVectors(this.max,ts),Ci.subVectors(t.a,ts),Pi.subVectors(t.b,ts),Ii.subVectors(t.c,ts),Vn.subVectors(Pi,Ci),Wn.subVectors(Ii,Pi),ti.subVectors(Ci,Ii);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-ti.z,ti.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,ti.z,0,-ti.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-ti.y,ti.x,0];if(!la(e,Ci,Pi,Ii,Os))return!1;if(e=[1,0,0,0,1,0,0,0,1],!la(e,Ci,Pi,Ii,Os))return!1;return Bs.crossVectors(Vn,Wn),e=[Bs.x,Bs.y,Bs.z],la(e,Ci,Pi,Ii,Os)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(sn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var wn=[new C,new C,new C,new C,new C,new C,new C,new C],sn=new C,Fs=new di,Ci=new C,Pi=new C,Ii=new C,Vn=new C,Wn=new C,ti=new C,ts=new C,Os=new C,Bs=new C,ei=new C;function la(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){ei.fromArray(t,r);let o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=e.dot(ei),c=n.dot(ei),u=i.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var we=new C,Gs=new dt,pu=0;class qe extends In{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Qi(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=Ge(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Qi(e,this.array);return e}setX(t,e){if(this.normalized)e=Ge(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Qi(e,this.array);return e}setY(t,e){if(this.normalized)e=Ge(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Qi(e,this.array);return e}setZ(t,e){if(this.normalized)e=Ge(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Qi(e,this.array);return e}setW(t,e){if(this.normalized)e=Ge(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=Ge(e,this.array),n=Ge(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Er extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class br extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}var mu=new di,es=new C,ca=new C;class fi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else mu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);let e=es.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(es,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(ca)),this.expandByPoint(es.copy(t.center).sub(ca));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var gu=0,Je=new pe,ha=new Ee,Li=new C,Xe=new di,ns=new di,Ie=new C;class ge extends In{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((eu(t))?br:Er)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new di;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Xe.setFromBufferAttribute(s),this.morphTargetsRelative)Ie.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Ie);else this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new fi;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(ns.setFromBufferAttribute(a),this.morphTargetsRelative)Ie.addVectors(Xe.min,ns.min),Xe.expandByPoint(Ie),Ie.addVectors(Xe.max,ns.max),Xe.expandByPoint(Ie);else Xe.expandByPoint(ns.min),Xe.expandByPoint(ns.max)}Xe.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ie.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ie.fromBufferAttribute(a,l),o)Li.fromBufferAttribute(t,l),Ie.add(Li);i=Math.max(i,n.distanceToSquared(Ie))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let A=0;A<n.count;A++)a[A]=new C,o[A]=new C;let l=new C,c=new C,u=new C,f=new dt,h=new dt,m=new dt,g=new C,M=new C;function p(A,x,S){l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,A),h.fromBufferAttribute(s,x),m.fromBufferAttribute(s,S),c.sub(l),u.sub(l),h.sub(f),m.sub(f);let O=1/(h.x*m.y-m.x*h.y);if(!isFinite(O))return;g.copy(c).multiplyScalar(m.y).addScaledVector(u,-h.y).multiplyScalar(O),M.copy(u).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(O),a[A].add(g),a[x].add(g),a[S].add(g),o[A].add(M),o[x].add(M),o[S].add(M)}let d=this.groups;if(d.length===0)d=[{start:0,count:t.count}];for(let A=0,x=d.length;A<x;++A){let S=d[A],{start:O,count:D}=S;for(let F=O,Z=O+D;F<Z;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let E=new C,w=new C,_=new C,T=new C;function R(A){_.fromBufferAttribute(i,A),T.copy(_);let x=a[A];E.copy(x),E.sub(_.multiplyScalar(_.dot(x))).normalize(),w.crossVectors(T,x);let O=w.dot(o[A])<0?-1:1;r.setXYZW(A,E.x,E.y,E.z,O)}for(let A=0,x=d.length;A<x;++A){let S=d[A],{start:O,count:D}=S;for(let F=O,Z=O+D;F<Z;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let i=new C,s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C;if(t)for(let f=0,h=t.count;f<h;f+=3){let m=t.getX(f+0),g=t.getX(f+1),M=t.getX(f+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,m),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),a.add(c),o.add(c),l.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z)}else for(let f=0,h=e.count;f<h;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:u}=a,f=new l.constructor(o.length*c),h=0,m=0;for(let g=0,M=o.length;g<M;g++){if(a.isInterleavedBufferAttribute)h=o[g]*a.data.stride+a.offset;else h=o[g]*c;for(let p=0;p<c;p++)f[m++]=l[h++]}return new qe(f,c,u)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new ge,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let f=l[c],h=t(f,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,f=l.length;u<f;u++){let h=l[u];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],u=s[l];for(let f=0,h=u.length;f<h;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ua=new C,_u=new C,xu=new Vt;class dn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ua.subVectors(n,e).cross(_u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ua),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xu.getNormalMatrix(t),i=this.coplanarPoint(ua).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var yu=0;class Dn extends In{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new zt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new dn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new dt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new dt().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var An=new C,da=new C,Hs=new C,zs=new C;class Ms{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=An.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){da.copy(t).add(e).multiplyScalar(0.5),Hs.copy(e).sub(t).normalize(),zs.copy(this.origin).sub(da);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Hs),a=zs.dot(this.direction),o=-zs.dot(Hs),l=zs.lengthSq(),c=Math.abs(1-r*r),u,f,h,m;if(c>0)if(u=r*o-a,f=r*a-o,m=s*c,u>=0)if(f>=-m)if(f<=m){let g=1/c;u*=g,f*=g,h=u*(u+r*f+2*a)+f*(r*u+f+2*o)+l}else f=s,u=Math.max(0,-(r*f+a)),h=-u*u+f*(f+2*o)+l;else f=-s,u=Math.max(0,-(r*f+a)),h=-u*u+f*(f+2*o)+l;else if(f<=-m)u=Math.max(0,-(-r*s+a)),f=u>0?-s:Math.min(Math.max(-s,-o),s),h=-u*u+f*(f+2*o)+l;else if(f<=m)u=0,f=Math.min(Math.max(-s,-o),s),h=f*(f+2*o)+l;else u=Math.max(0,-(r*s+a)),f=u>0?s:Math.min(Math.max(-s,-o),s),h=-u*u+f*(f+2*o)+l;else f=r>0?-s:s,u=Math.max(0,-(r*f+a)),h=-u*u+f*(f+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(da).addScaledVector(Hs,f);return h}intersectSphere(t,e){if(t.radius<0)return null;An.subVectors(t.center,this.origin);let n=An.dot(this.direction),i=An.dot(An)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;if(l>=0)n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l;else n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l;if(c>=0)s=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c;else s=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(t.min.z-f.z)*u,o=(t.max.z-f.z)*u;else a=(t.max.z-f.z)*u,o=(t.min.z-f.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,u=t.x-r.x,f=t.y-r.y,h=t.z-r.z,m=e.x-r.x,g=e.y-r.y,M=e.z-r.z,p=n.x-r.x,d=n.y-r.y,E=n.z-r.z,w=Math.abs(o),_=Math.abs(l),T=Math.abs(c),R,A,x,S,O,D,F,Z,I,H,J,z;if(w>=_&&w>=T)if(x=o,D=u,I=m,z=p,o>=0)R=l,A=c,S=f,O=h,F=g,Z=M,H=d,J=E;else R=c,A=l,S=h,O=f,F=M,Z=g,H=E,J=d;else if(_>=T)if(x=l,D=f,I=g,z=d,l>=0)R=c,A=o,S=h,O=u,F=M,Z=m,H=E,J=p;else R=o,A=c,S=u,O=h,F=m,Z=M,H=p,J=E;else if(x=c,D=h,I=M,z=E,c>=0)R=o,A=l,S=u,O=f,F=m,Z=g,H=p,J=d;else R=l,A=o,S=f,O=u,F=g,Z=m,H=d,J=p;if(x===0)return null;let at=R/x,W=A/x,Q=1/x,it=S-at*D,Dt=O-W*D,Nt=F-at*I,le=Z-W*I,Zt=H-at*z,q=J-W*z,lt=Zt*le-q*Nt,rt=it*q-Dt*Zt,Ut=Nt*Dt-le*it;if(i){if(lt<0||rt<0||Ut<0)return null}else if((lt<0||rt<0||Ut<0)&&(lt>0||rt>0||Ut>0))return null;let Gt=lt+rt+Ut;if(Gt===0)return null;let wt=Q*(lt*D+rt*I+Ut*z);if(Gt>0?wt<0:wt>0)return null;return this.at(wt/Gt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke extends Dn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Nl=new pe,ni=new Ms,ks=new fi,Ul=new C,Vs=new C,Ws=new C,Xs=new C,fa=new C,qs=new C,Fl=new C,Ys=new C;class j extends Ee{constructor(t=new ge,e=new Ke){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){qs.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(fa.fromBufferAttribute(u,t),r)qs.addScaledVector(fa,c);else qs.addScaledVector(fa.sub(e),c)}e.add(qs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(ks.copy(n.boundingSphere),ks.applyMatrix4(s),ni.copy(t.ray).recast(t.near),ks.containsPoint(ni.origin)===!1){if(ni.intersectSphere(ks,Ul)===null)return;if(ni.origin.distanceToSquared(Ul)>(t.far-t.near)**2)return}if(Nl.copy(s).invert(),ni.copy(t.ray).applyMatrix4(Nl),n.boundingBox!==null){if(ni.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,ni)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,{groups:f,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){let M=f[m],p=r[M.materialIndex],d=Math.max(M.start,h.start),E=Math.min(a.count,Math.min(M.start+M.count,h.start+h.count));for(let w=d,_=E;w<_;w+=3){let T=a.getX(w),R=a.getX(w+1),A=a.getX(w+2);if(i=Zs(this,p,t,n,l,c,u,T,R,A),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=M.materialIndex,e.push(i)}}else{let m=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let M=m,p=g;M<p;M+=3){let d=a.getX(M),E=a.getX(M+1),w=a.getX(M+2);if(i=Zs(this,r,t,n,l,c,u,d,E,w),i)i.faceIndex=Math.floor(M/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){let M=f[m],p=r[M.materialIndex],d=Math.max(M.start,h.start),E=Math.min(o.count,Math.min(M.start+M.count,h.start+h.count));for(let w=d,_=E;w<_;w+=3){let T=w,R=w+1,A=w+2;if(i=Zs(this,p,t,n,l,c,u,T,R,A),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=M.materialIndex,e.push(i)}}else{let m=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let M=m,p=g;M<p;M+=3){let d=M,E=M+1,w=M+2;if(i=Zs(this,r,t,n,l,c,u,d,E,w),i)i.faceIndex=Math.floor(M/3),e.push(i)}}}}function vu(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Ys.copy(o),Ys.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Ys);if(c<n.near||c>n.far)return null;return{distance:c,point:Ys.clone(),object:t}}function Zs(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Vs),t.getVertexPosition(l,Ws),t.getVertexPosition(c,Xs);let u=vu(t,e,n,i,Vs,Ws,Xs,Fl);if(u){let f=new C;if($e.getBarycoord(Fl,Vs,Ws,Xs,f),s)u.uv=$e.getInterpolatedAttribute(s,o,l,c,f,new dt);if(r)u.uv1=$e.getInterpolatedAttribute(r,o,l,c,f,new dt);if(a){if(u.normal=$e.getInterpolatedAttribute(a,o,l,c,f,new C),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new C,materialIndex:0};$e.getNormal(Vs,Ws,Xs,h.normal),u.face=h,u.barycoord=f}return u}class To extends Le{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,u,f){super(null,r,a,o,l,c,i,s,u,f);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var ii=new fi,Mu=new dt(0.5,0.5),Js=new C;class Ss{constructor(t=new dn,e=new dn,n=new dn,i=new dn,s=new dn,r=new dn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],m=s[8],g=s[9],M=s[10],p=s[11],d=s[12],E=s[13],w=s[14],_=s[15];if(i[0].setComponents(l-r,h-c,p-m,_-d).normalize(),i[1].setComponents(l+r,h+c,p+m,_+d).normalize(),i[2].setComponents(l+a,h+u,p+g,_+E).normalize(),i[3].setComponents(l-a,h-u,p-g,_-E).normalize(),n)i[4].setComponents(o,f,M,w).normalize(),i[5].setComponents(l-o,h-f,p-M,_-w).normalize();else if(i[4].setComponents(l-o,h-f,p-M,_-w).normalize(),e===2000)i[5].setComponents(l+o,h+f,p+M,_+w).normalize();else if(e===2001)i[5].setComponents(o,f,M,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){ii.center.set(0,0,0);let e=Mu.distanceTo(t.center);return ii.radius=0.7071067811865476+e,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Js.x=i.normal.x>0?t.max.x:t.min.x,Js.y=i.normal.y>0?t.max.y:t.min.y,Js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jn extends Dn{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var sr=new C,rr=new C,Ol=new pe,is=new Ms,$s=new fi,pa=new C,Bl=new C;class pi extends Ee{constructor(t=new ge,e=new Jn){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)sr.fromBufferAttribute(e,i-1),rr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=sr.distanceTo(rr);t.setAttribute("lineDistance",new ie(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if($s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=s,t.ray.intersectsSphere($s)===!1)return;Ol.copy(i).invert(),is.copy(t.ray).applyMatrix4(Ol);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let g=h,M=m-1;g<M;g+=l){let p=c.getX(g),d=c.getX(g+1),E=Ks(this,t,is,o,p,d,g);if(E)e.push(E)}if(this.isLineLoop){let g=c.getX(m-1),M=c.getX(h),p=Ks(this,t,is,o,g,M,m-1);if(p)e.push(p)}}else{let h=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let g=h,M=m-1;g<M;g+=l){let p=Ks(this,t,is,o,g,g+1,g);if(p)e.push(p)}if(this.isLineLoop){let g=Ks(this,t,is,o,m-1,h,m-1);if(g)e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ks(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(sr.fromBufferAttribute(o,s),rr.fromBufferAttribute(o,r),n.distanceSqToSegment(sr,rr,pa,Bl)>i)return;pa.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(pa);if(c<e.near||c>e.far)return;return{distance:c,point:Bl.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class Es extends Dn{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Gl=new pe,va=new Ms,Qs=new fi,js=new C;class Tr extends Ee{constructor(t=new ge,e=new Es){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Qs.copy(n.boundingSphere),Qs.applyMatrix4(i),Qs.radius+=s,t.ray.intersectsSphere(Qs)===!1)return;Gl.copy(i).invert(),va.copy(t.ray).applyMatrix4(Gl);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let m=f,g=h;m<g;m++){let M=l.getX(m);js.fromBufferAttribute(u,M),Hl(js,M,o,i,t,e,this)}}else{let f=Math.max(0,r.start),h=Math.min(u.count,r.start+r.count);for(let m=f,g=h;m<g;m++)js.fromBufferAttribute(u,m),Hl(js,m,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hl(t,e,n,i,s,r,a){let o=va.distanceSqToPoint(t);if(o<n){let l=new C;va.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class wr extends Le{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nn extends Le{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class mi extends Le{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class wo extends mi{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ar extends Le{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ye extends ge{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],f=0,h=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(u,2));function m(g,M,p,d,E,w,_,T,R,A,x){let S=w/R,O=_/A,D=w/2,F=_/2,Z=T/2,I=R+1,H=A+1,J=0,z=0,at=new C;for(let W=0;W<H;W++){let Q=W*O-F;for(let it=0;it<I;it++){let Dt=it*S-D;at[g]=Dt*d,at[M]=Q*E,at[p]=Z,l.push(at.x,at.y,at.z),at[g]=0,at[M]=0,at[p]=T>0?1:-1,c.push(at.x,at.y,at.z),u.push(it/R),u.push(1-W/A),J+=1}}for(let W=0;W<A;W++)for(let Q=0;Q<R;Q++){let it=f+Q+I*W,Dt=f+Q+I*(W+1),Nt=f+(Q+1)+I*(W+1),le=f+(Q+1)+I*W;o.push(it,Dt,le),o.push(Dt,Nt,le),z+=6}a.addGroup(h,z,x),h+=z,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Un extends ge{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],o=[],l=new C,c=new dt;r.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let u=0,f=3;u<=e;u++,f+=3){let h=n+u/e*i;l.x=t*Math.cos(h),l.y=t*Math.sin(h),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[f]/t+1)/2,c.y=(r[f+1]/t+1)/2,o.push(c.x,c.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends ge{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],u=[],f=[],h=[],m=0,g=[],M=n/2,p=0;if(d(),r===!1){if(t>0)E(!0);if(e>0)E(!1)}this.setIndex(c),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(h,2));function d(){let w=new C,_=new C,T=0,R=(e-t)/n;for(let A=0;A<=s;A++){let x=[],S=A/s,O=S*(e-t)+t;for(let D=0;D<=i;D++){let F=D/i,Z=F*o+a,I=Math.sin(Z),H=Math.cos(Z);_.x=O*I,_.y=-S*n+M,_.z=O*H,u.push(_.x,_.y,_.z),w.set(I,R,H).normalize(),f.push(w.x,w.y,w.z),h.push(F,1-S),x.push(m++)}g.push(x)}for(let A=0;A<i;A++)for(let x=0;x<s;x++){let S=g[x][A],O=g[x+1][A],D=g[x+1][A+1],F=g[x][A+1];if(t>0||x!==0)c.push(S,O,F),T+=3;if(e>0||x!==s-1)c.push(O,D,F),T+=3}l.addGroup(p,T,0),p+=T}function E(w){let _=m,T=new dt,R=new C,A=0,x=w===!0?t:e,S=w===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,M*S,0),f.push(0,S,0),h.push(0.5,0.5),m++;let O=m;for(let D=0;D<=i;D++){let Z=D/i*o+a,I=Math.cos(Z),H=Math.sin(Z);R.x=x*H,R.y=M*S,R.z=x*I,u.push(R.x,R.y,R.z),f.push(0,S,0),T.x=I*0.5+0.5,T.y=H*0.5*S+0.5,h.push(T.x,T.y),m++}for(let D=0;D<i;D++){let F=_+D,Z=O+D;if(w===!0)c.push(Z,Z+1,F);else c.push(Z+1,Z,F);A+=3}l.addGroup(p,A,w===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ae extends ee{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ae(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rr extends ge{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(s.slice(),3)),this.setAttribute("uv",new ie(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(d){let E=new C,w=new C,_=new C;for(let T=0;T<e.length;T+=3)h(e[T+0],E),h(e[T+1],w),h(e[T+2],_),o(E,w,_,d)}function o(d,E,w,_){let T=_+1,R=[];for(let A=0;A<=T;A++){R[A]=[];let x=d.clone().lerp(w,A/T),S=E.clone().lerp(w,A/T),O=T-A;for(let D=0;D<=O;D++)if(D===0&&A===T)R[A][D]=x;else R[A][D]=x.clone().lerp(S,D/O)}for(let A=0;A<T;A++)for(let x=0;x<2*(T-A)-1;x++){let S=Math.floor(x/2);if(x%2===0)f(R[A][S+1]),f(R[A+1][S]),f(R[A][S]);else f(R[A][S+1]),f(R[A+1][S+1]),f(R[A+1][S])}}function l(d){let E=new C;for(let w=0;w<s.length;w+=3)E.x=s[w+0],E.y=s[w+1],E.z=s[w+2],E.normalize().multiplyScalar(d),s[w+0]=E.x,s[w+1]=E.y,s[w+2]=E.z}function c(){let d=new C;for(let E=0;E<s.length;E+=3){d.x=s[E+0],d.y=s[E+1],d.z=s[E+2];let w=M(d)/2/Math.PI+0.5,_=p(d)/Math.PI+0.5;r.push(w,1-_)}m(),u()}function u(){for(let d=0;d<r.length;d+=6){let E=r[d+0],w=r[d+2],_=r[d+4],T=Math.max(E,w,_),R=Math.min(E,w,_);if(T>0.9&&R<0.1){if(E<0.2)r[d+0]+=1;if(w<0.2)r[d+2]+=1;if(_<0.2)r[d+4]+=1}}}function f(d){s.push(d.x,d.y,d.z)}function h(d,E){let w=d*3;E.x=t[w+0],E.y=t[w+1],E.z=t[w+2]}function m(){let d=new C,E=new C,w=new C,_=new C,T=new dt,R=new dt,A=new dt;for(let x=0,S=0;x<s.length;x+=9,S+=6){d.set(s[x+0],s[x+1],s[x+2]),E.set(s[x+3],s[x+4],s[x+5]),w.set(s[x+6],s[x+7],s[x+8]),T.set(r[S+0],r[S+1]),R.set(r[S+2],r[S+3]),A.set(r[S+4],r[S+5]),_.copy(d).add(E).add(w).divideScalar(3);let O=M(_);g(T,S+0,d,O),g(R,S+2,E,O),g(A,S+4,w,O)}}function g(d,E,w,_){if(_<0&&d.x===1)r[E]=d.x-1;if(w.x===0&&w.z===0)r[E]=_/2/Math.PI+0.5}function M(d){return Math.atan2(d.z,-d.x)}function p(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.vertices,t.indices,t.radius,t.detail)}}class qi extends Rr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,e);this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qi(t.radius,t.detail)}}class Qe{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],f=n[i+1]-c,h=(r-c)/f;return(i+h)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new dt:new C);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,i=[],s=[],r=[],a=new C,o=new pe;for(let h=0;h<=t;h++){let m=h/t;i[h]=this.getTangentAt(m,new C)}s[0]=new C,r[0]=new C;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(u<=l)l=u,n.set(0,1,0);if(f<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Qt(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,m))}r[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos(Qt(s[0].dot(s[t]),-1,1));if(h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)h=-h;for(let m=1;m<=t;m++)s[m].applyMatrix4(o.makeRotationAxis(i[m],h*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _n extends Qe{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new dt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=o-this.aX,h=l-this.aY;o=f*c-h*u+this.aX,l=f*u+h*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ao extends _n{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function Ro(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,m*=u,s(a,o,h,m)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var zl=new C,kl=new C,ma=new Ro,ga=new Ro,_a=new Ro;class $n extends Qe{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else kl.subVectors(i[0],i[1]).add(i[0]),l=kl;let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else zl.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=zl;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,m=Math.pow(l.distanceToSquared(u),h),g=Math.pow(u.distanceToSquared(f),h),M=Math.pow(f.distanceToSquared(c),h);if(g<0.0001)g=1;if(m<0.0001)m=g;if(M<0.0001)M=g;ma.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,m,g,M),ga.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,m,g,M),_a.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,m,g,M)}else if(this.curveType==="catmullrom")ma.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),ga.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),_a.initCatmullRom(l.z,u.z,f.z,c.z,this.tension);return n.set(ma.calc(o),ga.calc(o),_a.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vl(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function Su(t,e){let n=1-t;return n*n*e}function Eu(t,e){return 2*(1-t)*t*e}function bu(t,e){return t*t*e}function rs(t,e,n,i){return Su(t,e)+Eu(t,n)+bu(t,i)}function Tu(t,e){let n=1-t;return n*n*n*e}function wu(t,e){let n=1-t;return 3*n*n*t*e}function Au(t,e){return 3*(1-t)*t*t*e}function Ru(t,e){return t*t*t*e}function as(t,e,n,i,s){return Tu(t,e)+wu(t,n)+Au(t,i)+Ru(t,s)}class Cr extends Qe{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(as(t,i.x,s.x,r.x,a.x),as(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Co extends Qe{constructor(t=new C,e=new C,n=new C,i=new C){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(as(t,i.x,s.x,r.x,a.x),as(t,i.y,s.y,r.y,a.y),as(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pr extends Qe{constructor(t=new dt,e=new dt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Po extends Qe{constructor(t=new C,e=new C){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ir extends Qe{constructor(t=new dt,e=new dt,n=new dt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(rs(t,i.x,s.x,r.x),rs(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fn extends Qe{constructor(t=new C,e=new C,n=new C){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(rs(t,i.x,s.x,r.x),rs(t,i.y,s.y,r.y),rs(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lr extends Qe{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Vl(a,o.x,l.x,c.x,u.x),Vl(a,o.y,l.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var ar=Object.freeze({__proto__:null,ArcCurve:Ao,CatmullRomCurve3:$n,CubicBezierCurve:Cr,CubicBezierCurve3:Co,EllipseCurve:_n,LineCurve:Pr,LineCurve3:Po,QuadraticBezierCurve:Ir,QuadraticBezierCurve3:Fn,SplineCurve:Lr});class Io extends Qe{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ar[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ar[i.type]().fromJSON(i))}return this}}class or extends Io{constructor(t){super();if(this.type="Path",this.currentPoint=new dt,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Pr(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Ir(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new Cr(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new _n(t,e,n,i,s,r,a,o);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class On extends or{constructor(t){super(t);this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new or().fromJSON(i))}return this}}function Cu(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=th(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=Nu(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let u=o,f=l;for(let h=n;h<s;h+=n){let m=t[h],g=t[h+1];if(m<o)o=m;if(g<l)l=g;if(m>u)u=m;if(g>f)f=g}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return cs(r,a,n,o,l,c,0),a}function th(t,e,n,i,s){let r;if(s===Xu(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=Wl(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=Wl(a/i|0,t[a],t[a+1],r);if(r&&Bi(r,r.next))us(r),r=r.next;return r}function ri(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(Bi(n,n.next)||Se(n.prev,n,n.next)===0)){if(us(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function cs(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)Gu(t,i,s,r);let o=t;while(t.prev!==t.next){let l=t.prev,c=t.next;if(r?Iu(t,i,s,r):Pu(t)){e.push(l.i,t.i,c.i),us(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)cs(ri(t),e,n,i,s,r,1);else if(a===1)t=Lu(ri(t),e),cs(t,e,n,i,s,r,2);else if(a===2)Du(t,e,n,i,s,r);break}}}function Pu(t){let e=t.prev,n=t,i=t.next;if(Se(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),m=Math.max(o,l,c),g=i.next;while(g!==e){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=m&&ss(s,o,r,l,a,c,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Iu(t,e,n,i){let s=t.prev,r=t,a=t.next;if(Se(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,m=Math.min(o,l,c),g=Math.min(u,f,h),M=Math.max(o,l,c),p=Math.max(u,f,h),d=Ma(m,g,e,n,i),E=Ma(M,p,e,n,i),{prevZ:w,nextZ:_}=t;while(w&&w.z>=d&&_&&_.z<=E){if(w.x>=m&&w.x<=M&&w.y>=g&&w.y<=p&&w!==s&&w!==a&&ss(o,u,l,f,c,h,w.x,w.y)&&Se(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,_.x>=m&&_.x<=M&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&ss(o,u,l,f,c,h,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.nextZ}while(w&&w.z>=d){if(w.x>=m&&w.x<=M&&w.y>=g&&w.y<=p&&w!==s&&w!==a&&ss(o,u,l,f,c,h,w.x,w.y)&&Se(w.prev,w,w.next)>=0)return!1;w=w.prevZ}while(_&&_.z<=E){if(_.x>=m&&_.x<=M&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&ss(o,u,l,f,c,h,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Lu(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!Bi(i,s)&&nh(i,n,n.next,s)&&hs(i,s)&&hs(s,i))e.push(i.i,n.i,s.i),us(n),us(n.next),n=t=s;n=n.next}while(n!==t);return ri(n)}function Du(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&ku(a,o)){let l=ih(a,o);a=ri(a,a.next),l=ri(l,l.next),cs(a,e,n,i,s,r,0),cs(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function Nu(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=th(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(zu(c))}s.sort(Uu);for(let r=0;r<s.length;r++)n=Fu(s[r],n);return n}function Uu(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function Fu(t,e){let n=Ou(t,e);if(!n)return e;let i=ih(n,t);return ri(i,i.next),ri(n,n.next)}function Ou(t,e){let n=e,{x:i,y:s}=t,r=-1/0,a;if(Bi(t,n))return n;do{if(Bi(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let f=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>r){if(r=f,a=n.x<n.next.x?n:n.next,f===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&eh(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let f=Math.abs(s-n.y)/(i-n.x);if(hs(n,t)&&(f<u||f===u&&(n.x>a.x||n.x===a.x&&Bu(a,n))))a=n,u=f}n=n.next}while(n!==o);return a}function Bu(t,e){return Se(t.prev,t,e.prev)<0&&Se(e.next,t,t.next)<0}function Gu(t,e,n,i){let s=t;do{if(s.z===0)s.z=Ma(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,Hu(s)}function Hu(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function Ma(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function zu(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function eh(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function ss(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&eh(t,e,n,i,s,r,a,o)}function ku(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Vu(t,e)&&(hs(t,e)&&hs(e,t)&&Wu(t,e)&&(Se(t.prev,t,e.prev)||Se(t,e.prev,e))||Bi(t,e)&&Se(t.prev,t,t.next)>0&&Se(e.prev,e,e.next)>0)}function Se(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Bi(t,e){return t.x===e.x&&t.y===e.y}function nh(t,e,n,i){let s=er(Se(t,e,n)),r=er(Se(t,e,i)),a=er(Se(n,i,t)),o=er(Se(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&tr(t,n,e))return!0;if(r===0&&tr(t,i,e))return!0;if(a===0&&tr(n,t,i))return!0;if(o===0&&tr(n,e,i))return!0;return!1}function tr(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function er(t){return t>0?1:t<0?-1:0}function Vu(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&nh(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function hs(t,e){return Se(t.prev,t,t.next)<0?Se(t,e,t.next)>=0&&Se(t,t.prev,e)>=0:Se(t,e,t.prev)<0||Se(t,t.next,e)<0}function Wu(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function ih(t,e){let n=Sa(t.i,t.x,t.y),i=Sa(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Wl(t,e,n,i){let s=Sa(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function us(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function Sa(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xu(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class sh{static triangulate(t,e,n=2){return Cu(t,e,n)}}class fn{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return fn.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Xl(t),ql(n,t);let r=t.length;e.forEach(Xl);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,ql(n,e[o]);let a=sh.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function Xl(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function ql(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Yi extends ge{constructor(t=new On([new dt(0.5,0.5),new dt(-0.5,0.5),new dt(-0.5,-0.5),new dt(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a];r(l)}this.setAttribute("position",new ie(i,3)),this.setAttribute("uv",new ie(s,2)),this.computeVertexNormals();function r(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:0.2,m=e.bevelSize!==void 0?e.bevelSize:h-0.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,M=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,d=e.UVGenerator!==void 0?e.UVGenerator:qu,E,w=!1,_,T,R,A;if(p){E=p.getSpacedPoints(c),w=!0,f=!1;let tt=p.isCatmullRomCurve3?p.closed:!1;_=p.computeFrenetFrames(c,tt),T=new C,R=new C,A=new C}if(!f)M=0,h=0,m=0,g=0;let x=a.extractPoints(l),{shape:S,holes:O}=x;if(!fn.isClockWise(S)){S=S.reverse();for(let tt=0,st=O.length;tt<st;tt++){let ot=O[tt];if(fn.isClockWise(ot))O[tt]=ot.reverse()}}function F(tt){let ct=tt[0];for(let vt=1;vt<=tt.length;vt++){let It=vt%tt.length,Ft=tt[It],Wt=Ft.x-ct.x,Xt=Ft.y-ct.y,P=Wt*Wt+Xt*Xt,ue=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(ct.x),Math.abs(ct.y)),Kt=0.000000000000000000010000000000000001*ue*ue;if(P<=Kt){tt.splice(It,1),vt--;continue}ct=Ft}}F(S),O.forEach(F);let Z=O.length,I=S;for(let tt=0;tt<Z;tt++){let st=O[tt];S=S.concat(st)}function H(tt,st,ot){if(!st)kt("ExtrudeGeometry: vec does not exist");return tt.clone().addScaledVector(st,ot)}let J=S.length;function z(tt,st,ot){let ct,vt,It,Ft=tt.x-st.x,Wt=tt.y-st.y,Xt=ot.x-tt.x,P=ot.y-tt.y,ue=Ft*Ft+Wt*Wt,Kt=Ft*P-Wt*Xt;if(Math.abs(Kt)>Number.EPSILON){let jt=Math.sqrt(ue),b=Math.sqrt(Xt*Xt+P*P),y=st.x-Wt/jt,L=st.y+Ft/jt,k=ot.x-P/b,et=ot.y+Xt/b,ht=((k-y)*P-(et-L)*Xt)/(Ft*P-Wt*Xt);ct=y+Ft*ht-tt.x,vt=L+Wt*ht-tt.y;let ft=ct*ct+vt*vt;if(ft<=2)return new dt(ct,vt);else It=Math.sqrt(ft/2)}else{let jt=!1;if(Ft>Number.EPSILON){if(Xt>Number.EPSILON)jt=!0}else if(Ft<-Number.EPSILON){if(Xt<-Number.EPSILON)jt=!0}else if(Math.sign(Wt)===Math.sign(P))jt=!0;if(jt)ct=-Wt,vt=Ft,It=Math.sqrt(ue);else ct=Ft,vt=Wt,It=Math.sqrt(ue/2)}return new dt(ct/It,vt/It)}let at=[];for(let tt=0,st=I.length,ot=st-1,ct=tt+1;tt<st;tt++,ot++,ct++){if(ot===st)ot=0;if(ct===st)ct=0;at[tt]=z(I[tt],I[ot],I[ct])}let W=[],Q,it=at.concat();for(let tt=0,st=Z;tt<st;tt++){let ot=O[tt];Q=[];for(let ct=0,vt=ot.length,It=vt-1,Ft=ct+1;ct<vt;ct++,It++,Ft++){if(It===vt)It=0;if(Ft===vt)Ft=0;Q[ct]=z(ot[ct],ot[It],ot[Ft])}W.push(Q),it=it.concat(Q)}let Dt;if(M===0)Dt=fn.triangulateShape(I,O);else{let tt=[],st=[];for(let ot=0;ot<M;ot++){let ct=ot/M,vt=h*Math.cos(ct*Math.PI/2),It=m*Math.sin(ct*Math.PI/2)+g;for(let Ft=0,Wt=I.length;Ft<Wt;Ft++){let Xt=H(I[Ft],at[Ft],It);if(rt(Xt.x,Xt.y,-vt),ct===0)tt.push(Xt)}for(let Ft=0,Wt=Z;Ft<Wt;Ft++){let Xt=O[Ft];Q=W[Ft];let P=[];for(let ue=0,Kt=Xt.length;ue<Kt;ue++){let jt=H(Xt[ue],Q[ue],It);if(rt(jt.x,jt.y,-vt),ct===0)P.push(jt)}if(ct===0)st.push(P)}}Dt=fn.triangulateShape(tt,st)}let Nt=Dt.length,le=m+g;for(let tt=0;tt<J;tt++){let st=f?H(S[tt],it[tt],le):S[tt];if(!w)rt(st.x,st.y,0);else R.copy(_.normals[0]).multiplyScalar(st.x),T.copy(_.binormals[0]).multiplyScalar(st.y),A.copy(E[0]).add(R).add(T),rt(A.x,A.y,A.z)}for(let tt=1;tt<=c;tt++)for(let st=0;st<J;st++){let ot=f?H(S[st],it[st],le):S[st];if(!w)rt(ot.x,ot.y,u/c*tt);else R.copy(_.normals[tt]).multiplyScalar(ot.x),T.copy(_.binormals[tt]).multiplyScalar(ot.y),A.copy(E[tt]).add(R).add(T),rt(A.x,A.y,A.z)}for(let tt=M-1;tt>=0;tt--){let st=tt/M,ot=h*Math.cos(st*Math.PI/2),ct=m*Math.sin(st*Math.PI/2)+g;for(let vt=0,It=I.length;vt<It;vt++){let Ft=H(I[vt],at[vt],ct);rt(Ft.x,Ft.y,u+ot)}for(let vt=0,It=O.length;vt<It;vt++){let Ft=O[vt];Q=W[vt];for(let Wt=0,Xt=Ft.length;Wt<Xt;Wt++){let P=H(Ft[Wt],Q[Wt],ct);if(!w)rt(P.x,P.y,u+ot);else rt(P.x,P.y+E[c-1].y,E[c-1].x+ot)}}}Zt(),q();function Zt(){let tt=i.length/3;if(f){let st=0,ot=J*st;for(let ct=0;ct<Nt;ct++){let vt=Dt[ct];Ut(vt[2]+ot,vt[1]+ot,vt[0]+ot)}st=c+M*2,ot=J*st;for(let ct=0;ct<Nt;ct++){let vt=Dt[ct];Ut(vt[0]+ot,vt[1]+ot,vt[2]+ot)}}else{for(let st=0;st<Nt;st++){let ot=Dt[st];Ut(ot[2],ot[1],ot[0])}for(let st=0;st<Nt;st++){let ot=Dt[st];Ut(ot[0]+J*c,ot[1]+J*c,ot[2]+J*c)}}n.addGroup(tt,i.length/3-tt,0)}function q(){let tt=i.length/3,st=0;lt(I,st),st+=I.length;for(let ot=0,ct=O.length;ot<ct;ot++){let vt=O[ot];lt(vt,st),st+=vt.length}n.addGroup(tt,i.length/3-tt,1)}function lt(tt,st){let ot=tt.length;while(--ot>=0){let ct=ot,vt=ot-1;if(vt<0)vt=tt.length-1;for(let It=0,Ft=c+M*2;It<Ft;It++){let Wt=J*It,Xt=J*(It+1),P=st+ct+Wt,ue=st+vt+Wt,Kt=st+vt+Xt,jt=st+ct+Xt;Gt(P,ue,Kt,jt)}}}function rt(tt,st,ot){o.push(tt),o.push(st),o.push(ot)}function Ut(tt,st,ot){wt(tt),wt(st),wt(ot);let ct=i.length/3,vt=d.generateTopUV(n,i,ct-3,ct-2,ct-1);ce(vt[0]),ce(vt[1]),ce(vt[2])}function Gt(tt,st,ot,ct){wt(tt),wt(st),wt(ct),wt(st),wt(ot),wt(ct);let vt=i.length/3,It=d.generateSideWallUV(n,i,vt-6,vt-3,vt-2,vt-1);ce(It[0]),ce(It[1]),ce(It[3]),ce(It[1]),ce(It[2]),ce(It[3])}function wt(tt){i.push(o[tt*3+0]),i.push(o[tt*3+1]),i.push(o[tt*3+2])}function ce(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Yu(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new ar[i.type]().fromJSON(i);return new Yi(n,t.options)}}var qu={generateTopUV:function(t,e,n,i,s){let r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new dt(r,a),new dt(o,l),new dt(c,u)]},generateSideWallUV:function(t,e,n,i,s,r){let a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[s*3],m=e[s*3+1],g=e[s*3+2],M=e[r*3],p=e[r*3+1],d=e[r*3+2];if(Math.abs(o-u)<Math.abs(a-c))return[new dt(a,1-l),new dt(c,1-f),new dt(h,1-g),new dt(M,1-d)];else return[new dt(o,1-l),new dt(u,1-f),new dt(m,1-g),new dt(p,1-d)]}};function Yu(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class ke extends ge{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=t/a,f=e/o,h=[],m=[],g=[],M=[];for(let p=0;p<c;p++){let d=p*f-r;for(let E=0;E<l;E++){let w=E*u-s;m.push(w,-d,0),g.push(0,0,1),M.push(E/a),M.push(1-p/o)}}for(let p=0;p<o;p++)for(let d=0;d<a;d++){let E=d+l*p,w=d+l*(p+1),_=d+1+l*(p+1),T=d+1+l*p;h.push(E,w,T),h.push(w,_,T)}this.setIndex(h),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(g,3)),this.setAttribute("uv",new ie(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.widthSegments,t.heightSegments)}}class bs extends ge{constructor(t=new On([new dt(0,0.5),new dt(-0.5,-0.5),new dt(0.5,-0.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],r=[],a=0,o=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(a,o,c),a+=o,o=0;this.setIndex(n),this.setAttribute("position",new ie(i,3)),this.setAttribute("normal",new ie(s,3)),this.setAttribute("uv",new ie(r,2));function l(c){let u=i.length/3,f=c.extractPoints(e),{shape:h,holes:m}=f;if(fn.isClockWise(h)===!1)h=h.reverse();for(let M=0,p=m.length;M<p;M++){let d=m[M];if(fn.isClockWise(d)===!0)m[M]=d.reverse()}let g=fn.triangulateShape(h,m);for(let M=0,p=m.length;M<p;M++){let d=m[M];h=h.concat(d)}for(let M=0,p=h.length;M<p;M++){let d=h[M];i.push(d.x,d.y,0),s.push(0,0,1),r.push(d.x,d.y)}for(let M=0,p=g.length;M<p;M++){let d=g[M],E=d[0]+u,w=d[1]+u,_=d[2]+u;n.push(E,w,_),o+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Zu(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let r=e[t.shapes[i]];n.push(r)}return new bs(n,t.curveSegments)}}function Zu(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let s=t[n];e.shapes.push(s.uuid)}else e.shapes.push(t.uuid);return e}class Ve extends ge{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],u=new C,f=new C,h=[],m=[],g=[],M=[];for(let p=0;p<=n;p++){let d=[],E=p/n,w=r+E*a,_=t*Math.cos(w),T=Math.sqrt(t*t-_*_),R=0;if(p===0&&r===0)R=0.5/e;else if(p===n&&o===Math.PI)R=-0.5/e;for(let A=0;A<=e;A++){let x=A/e,S=i+x*s;u.x=-T*Math.cos(S),u.y=_,u.z=T*Math.sin(S),m.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),M.push(x+R,1-E),d.push(l++)}c.push(d)}for(let p=0;p<n;p++)for(let d=0;d<e;d++){let E=c[p][d+1],w=c[p][d],_=c[p+1][d],T=c[p+1][d+1];if(p!==0||r>0)h.push(E,w,T);if(p!==n-1||o<Math.PI)h.push(w,_,T)}this.setIndex(h),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(g,3)),this.setAttribute("uv",new ie(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xn extends ge{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],u=[],f=new C,h=new C,m=new C;for(let g=0;g<=n;g++){let M=r+g/n*a;for(let p=0;p<=i;p++){let d=p/i*s;h.x=(t+e*Math.cos(M))*Math.cos(d),h.y=(t+e*Math.cos(M))*Math.sin(d),h.z=e*Math.sin(M),l.push(h.x,h.y,h.z),f.x=t*Math.cos(d),f.y=t*Math.sin(d),m.subVectors(h,f).normalize(),c.push(m.x,m.y,m.z),u.push(p/i),u.push(g/n)}}for(let g=1;g<=n;g++)for(let M=1;M<=i;M++){let p=(i+1)*g+M-1,d=(i+1)*(g-1)+M-1,E=(i+1)*(g-1)+M,w=(i+1)*g+M;o.push(p,d,w),o.push(d,E,w)}this.setIndex(o),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class ln extends ge{constructor(t=new Fn(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new C,o=new C,l=new dt,c=new C,u=[],f=[],h=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(h,2));function g(){for(let E=0;E<e;E++)M(E);M(s===!1?e:0),d(),p()}function M(E){c=t.getPointAt(E/e,c);let w=r.normals[E],_=r.binormals[E];for(let T=0;T<=i;T++){let R=T/i*Math.PI*2,A=Math.sin(R),x=-Math.cos(R);o.x=x*w.x+A*_.x,o.y=x*w.y+A*_.y,o.z=x*w.z+A*_.z,o.normalize(),f.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,u.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=e;E++)for(let w=1;w<=i;w++){let _=(i+1)*(E-1)+(w-1),T=(i+1)*E+(w-1),R=(i+1)*E+w,A=(i+1)*(E-1)+w;m.push(_,T,A),m.push(T,R,A)}}function d(){for(let E=0;E<=e;E++)for(let w=0;w<=i;w++)l.x=E/e,l.y=w/i,h.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ln(new ar[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function gi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Yl(s))if(s.isRenderTargetTexture)Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(Yl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Oe(t){let e={};for(let n=0;n<t.length;n++){let i=gi(t[n]);for(let s in i)e[s]=i[s]}return e}function Yl(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Ju(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lo(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return ne.workingColorSpace}var rh={clone:gi,merge:Oe},$u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends Dn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=Ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new dt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class Do extends je{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yt extends Dn{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kn extends Yt{constructor(t){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+0.4*e)/(1-0.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){if(this._anisotropy>0!==t>0)this.version++;this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){if(this._clearcoat>0!==t>0)this.version++;this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){if(this._iridescence>0!==t>0)this.version++;this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){if(this._dispersion>0!==t>0)this.version++;this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){if(this._retroreflectivity>0!==t>0)this.version++;this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){if(this._sheen>0!==t>0)this.version++;this._sheen=t}get transmission(){return this._transmission}set transmission(t){if(this._transmission>0!==t>0)this.version++;this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class No extends Dn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uo extends Dn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Di(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function xa(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class _i{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Fo extends _i{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,m=(n-e)/(i-e),g=m*m,M=g*m,p=-f*M+2*f*g-f*m,d=(1+f)*M+(-1.5-2*f)*g+(-0.5+f)*m+1,E=(-1-h)*M+(1.5+h)*g+0.5*m,w=h*M-h*g;for(let _=0;_!==a;++_)s[_]=p*r[c+_]+d*r[l+_]+E*r[o+_]+w*r[u+_];return s}}class Oo extends _i{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let f=0;f!==a;++f)s[f]=r[l+f]*u+r[o+f]*c;return s}}class Bo extends _i{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Go extends _i{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let m=(n-e)/(i-e),g=1-m;for(let M=0;M!==a;++M)s[M]=r[l+M]*g+r[o+M]*m;return s}let f=a*2,h=t-1;for(let m=0;m!==a;++m){let g=r[l+m],M=r[o+m],p=h*f+m*2,d=u[p],E=u[p+1],w=t*f+m*2,_=c[w],T=c[w+1],R=ju(n,e,d,_,i);s[m]=ah(R,g,E,T,M)}return s}}function ah(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function Qu(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function ju(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=ah(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=Qu(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class tn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Di(e,this.TimeBufferType),this.values=Di(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Di(t.times,Array),values:Di(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(xa(t.settings))n.settings={inTangents:Di(t.settings.inTangents,Array),outTangents:Di(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Go(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(xa(this.settings))Zl(this.settings.inTangents,t),Zl(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)kt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)kt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){kt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){kt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(nu(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){kt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let u=a*n,f=u-n,h=u+n;for(let m=0;m!==n;++m){let g=e[u+m];if(g!==e[f+m]||g!==e[h+m]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let u=a*n,f=r*n;for(let h=0;h!==n;++h)e[f+h]=e[u+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,xa(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function Zl(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=2301;class xi extends tn{constructor(t,e,n){super(t,e,n)}}xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=2300;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ho extends tn{constructor(t,e,n,i){super(t,e,n,i)}}Ho.prototype.ValueTypeName="color";class zo extends tn{constructor(t,e,n,i){super(t,e,n,i)}}zo.prototype.ValueTypeName="number";class ko extends _i{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)Ln.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Dr extends tn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ko(this.times,this.values,this.getValueSize(),t)}}Dr.prototype.ValueTypeName="quaternion";Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class yi extends tn{constructor(t,e,n){super(t,e,n)}}yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=2300;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Vo extends tn{constructor(t,e,n,i){super(t,e,n,i)}}Vo.prototype.ValueTypeName="vector";class Wo{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){let h=l[u],m=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var oh=new Wo;class Xo{constructor(t){if(this.manager=t!==void 0?t:oh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Xo.DEFAULT_MATERIAL_NAME="__DEFAULT";class Zi extends Ee{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Nr extends Zi{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var ya=new pe,Jl=new C,$l=new C;class Ur{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ya,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var nr=new C,ir=new Ln,un=new C;class Fr extends Ee{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(nr,ir,un),un.x===1&&un.y===1&&un.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(nr,ir,un.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(nr,ir,un),un.x===1&&un.y===1&&un.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(nr,ir,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Xn=new C,Kl=new dt,Ql=new dt;class Fe extends Fr{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yr*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Yr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,Ql),e.subVectors(Ql,Kl)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yr*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class lh extends Ur{constructor(){super(new Fe(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ls*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;if(n!==e.fov||i!==e.aspect||s!==e.far)e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix();super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Or extends Zi{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new lh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);if(e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture)e.object.map=this.map.toJSON(t).uuid;return e.object.shadow=this.shadow.toJSON(),e}}class Ts extends Fr{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class ch extends Ur{constructor(){super(new Ts(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Br extends Zi{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new ch}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Gr extends Zi{constructor(t,e){super(t,e);this.isAmbientLight=!0,this.type="AmbientLight"}}var Ni=-90,Ui=1;class qo extends Ee{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fe(Ni,Ui,t,e);i.layers=this.layers,this.add(i);let s=new Fe(Ni,Ui,t,e);s.layers=this.layers,this.add(s);let r=new Fe(Ni,Ui,t,e);r.layers=this.layers,this.add(r);let a=new Fe(Ni,Ui,t,e);a.layers=this.layers,this.add(a);let o=new Fe(Ni,Ui,t,e);o.layers=this.layers,this.add(o);let l=new Fe(Ni,Ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;if(t.isWebGLRenderer===!0)M=t.state.buffers.depth.getReversed();else M=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),M&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(u,f,h),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Yo extends Fe{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}var Zo="\\[\\]\\.:\\/",td=new RegExp("["+Zo+"]","g"),Jo="[^"+Zo+"]",ed="[^"+Zo.replace("\\.","")+"]",nd=/((?:WC+[\/:])*)/.source.replace("WC",Jo),id=/(WCOD+)?/.source.replace("WCOD",ed),sd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo),rd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo),ad=new RegExp("^"+nd+id+sd+rd+"$"),od=["material","materials","bones","map"];class hh{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class he{constructor(t,e,n){this.path=e,this.parsedPath=n||he.parseTrackName(e),this.node=he.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new he(t,e,n);else return new he.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(td,"")}static parseTrackName(t){let e=ad.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(od.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=he.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}he.Composite=hh;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j0=new Float32Array(1);class Hr{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Bt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1000,this.oldTime=e,this.elapsedTime+=t}return t}}class $o{static{$o.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function Ko(t,e,n,i){let s=ld(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ld(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)Bt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Lh(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function cd(t){let e=new WeakMap;function n(o,l){let{array:c,usage:u}=o,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)m=t.HALF_FLOAT;else m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let{array:u,updateRanges:f}=l;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<f.length;m++){let g=f[h],M=f[m];if(M.start<=g.start+g.count+1)g.count=Math.max(g.count,M.start+M.count-g.start);else++h,f[h]=M}f.length=h+1;for(let m=0,g=f.length;m<g;m++){let M=f[m];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=e.get(o);if(!u||u.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,df=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ff=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$f=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`;var hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:dd,alphamap_pars_fragment:fd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:xd,batching_vertex:yd,begin_vertex:vd,beginnormal_vertex:Md,bsdfs:Sd,iridescence_fragment:Ed,bumpmap_pars_fragment:bd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Id,color_vertex:Ld,common:Dd,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Ud,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:Bd,emissivemap_pars_fragment:Gd,colorspace_fragment:Hd,colorspace_pars_fragment:zd,envmap_fragment:kd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:nf,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:Zd,fog_fragment:Jd,fog_pars_fragment:$d,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:Qd,lights_lambert_fragment:jd,lights_lambert_pars_fragment:tf,lights_pars_begin:ef,lights_toon_fragment:sf,lights_toon_pars_fragment:rf,lights_phong_fragment:af,lights_phong_pars_fragment:of,lights_physical_fragment:lf,lights_physical_pars_fragment:cf,lights_fragment_begin:hf,lights_fragment_maps:uf,lights_fragment_end:df,lightprobes_pars_fragment:ff,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:_f,map_fragment:xf,map_pars_fragment:yf,map_particle_fragment:vf,map_particle_pars_fragment:Mf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:Ef,morphinstance_vertex:bf,morphcolor_vertex:Tf,morphnormal_vertex:wf,morphtarget_pars_vertex:Af,morphtarget_vertex:Rf,normal_fragment_begin:Cf,normal_fragment_maps:Pf,normal_pars_fragment:If,normal_pars_vertex:Lf,normal_vertex:Df,normalmap_pars_fragment:Nf,clearcoat_normal_fragment_begin:Uf,clearcoat_normal_fragment_maps:Ff,clearcoat_pars_fragment:Of,iridescence_pars_fragment:Bf,opaque_fragment:Gf,packing:Hf,premultiplied_alpha_fragment:zf,project_vertex:kf,dithering_fragment:Vf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:qf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:Zf,shadowmap_vertex:Jf,shadowmask_pars_fragment:$f,skinbase_vertex:Kf,skinning_pars_vertex:Qf,skinning_vertex:jf,skinnormal_vertex:tp,specularmap_fragment:ep,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:hp,background_vert:up,background_frag:dp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:xp,distance_vert:yp,distance_frag:vp,equirect_vert:Mp,equirect_frag:Sp,linedashed_vert:Ep,linedashed_frag:bp,meshbasic_vert:Tp,meshbasic_frag:wp,meshlambert_vert:Ap,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Pp,meshnormal_vert:Ip,meshnormal_frag:Lp,meshphong_vert:Dp,meshphong_frag:Np,meshphysical_vert:Up,meshphysical_frag:Fp,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:Gp,points_frag:Hp,shadow_vert:zp,shadow_frag:kp,sprite_vert:Vp,sprite_frag:Wp},_t={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new dt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},vn={basic:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Oe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Oe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new zt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Oe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Oe([_t.points,_t.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Oe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Oe([_t.common,_t.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Oe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Oe([_t.sprite,_t.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Oe([_t.common,_t.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Oe([_t.lights,_t.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};vn.physical={uniforms:Oe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var zr={r:0,b:0,g:0},Xp=new pe,Dh=new Vt;Dh.set(-1,0,0,0,1,0,0,0,1);function qp(t,e,n,i,s,r){let a=new zt(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function m(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){let _=E.backgroundBlurriness>0;w=e.get(w,_)}return w}function g(E){let w=!1,_=m(E);if(_===null)p(a,o);else if(_&&_.isColor)p(_,1),w=!0;let T=t.xr.getEnvironmentBlendMode();if(T==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(T==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||w)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function M(E,w){let _=m(w);if(_&&(_.isCubeTexture||_.mapping===ms)){if(c===void 0)c=new j(new ye(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:gi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Dh);if(c.material.toneMapped=ne.getTransfer(_.colorSpace)!==me,u!==_||f!==_.version||h!==t.toneMapping)c.material.needsUpdate=!0,u=_,f=_.version,h=t.toneMapping;c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)}else if(_&&_.isTexture){if(l===void 0)l=new j(new ke(2,2),new je({name:"BackgroundMaterial",uniforms:gi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ne.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0)_.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(_.matrix),u!==_||f!==_.version||h!==t.toneMapping)l.material.needsUpdate=!0,u=_,f=_.version,h=t.toneMapping;l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)}}function p(E,w){E.getRGB(zr,Lo(t)),n.buffers.color.setClear(zr.r,zr.g,zr.b,w,r)}function d(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(a,o)},render:g,addToRenderList:M,dispose:d}}function Yp(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(D,F,Z,I,H){let J=!1,z=f(D,I,Z,F);if(r!==z)r=z,c(r.object);if(J=m(D,I,Z,H),J)g(D,I,Z,H);if(H!==null)e.update(H,t.ELEMENT_ARRAY_BUFFER);if(J||a){if(a=!1,_(D,F,Z,I),H!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer)}}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function f(D,F,Z,I){let H=I.wireframe===!0,J=i[F.id];if(J===void 0)J={},i[F.id]=J;let z=D.isInstancedMesh===!0?D.id:0,at=J[z];if(at===void 0)at={},J[z]=at;let W=at[Z.id];if(W===void 0)W={},at[Z.id]=W;let Q=W[H];if(Q===void 0)Q=h(l()),W[H]=Q;return Q}function h(D){let F=[],Z=[],I=[];for(let H=0;H<n;H++)F[H]=0,Z[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:I,object:D,attributes:{},index:null}}function m(D,F,Z,I){let H=r.attributes,J=F.attributes,z=0,at=Z.getAttributes();for(let W in at)if(at[W].location>=0){let it=H[W],Dt=J[W];if(Dt===void 0){if(W==="instanceMatrix"&&D.instanceMatrix)Dt=D.instanceMatrix;if(W==="instanceColor"&&D.instanceColor)Dt=D.instanceColor}if(it===void 0)return!0;if(it.attribute!==Dt)return!0;if(Dt&&it.data!==Dt.data)return!0;z++}if(r.attributesNum!==z)return!0;if(r.index!==I)return!0;return!1}function g(D,F,Z,I){let H={},J=F.attributes,z=0,at=Z.getAttributes();for(let W in at)if(at[W].location>=0){let it=J[W];if(it===void 0){if(W==="instanceMatrix"&&D.instanceMatrix)it=D.instanceMatrix;if(W==="instanceColor"&&D.instanceColor)it=D.instanceColor}let Dt={};if(Dt.attribute=it,it&&it.data)Dt.data=it.data;H[W]=Dt,z++}r.attributes=H,r.attributesNum=z,r.index=I}function M(){let D=r.newAttributes;for(let F=0,Z=D.length;F<Z;F++)D[F]=0}function p(D){d(D,0)}function d(D,F){let Z=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;if(Z[D]=1,I[D]===0)t.enableVertexAttribArray(D),I[D]=1;if(H[D]!==F)t.vertexAttribDivisor(D,F),H[D]=F}function E(){let D=r.newAttributes,F=r.enabledAttributes;for(let Z=0,I=F.length;Z<I;Z++)if(F[Z]!==D[Z])t.disableVertexAttribArray(Z),F[Z]=0}function w(D,F,Z,I,H,J,z){if(z===!0)t.vertexAttribIPointer(D,F,Z,H,J);else t.vertexAttribPointer(D,F,Z,I,H,J)}function _(D,F,Z,I){M();let H=I.attributes,J=Z.getAttributes(),z=F.defaultAttributeValues;for(let at in J){let W=J[at];if(W.location>=0){let Q=H[at];if(Q===void 0){if(at==="instanceMatrix"&&D.instanceMatrix)Q=D.instanceMatrix;if(at==="instanceColor"&&D.instanceColor)Q=D.instanceColor}if(Q!==void 0){let it=Q.normalized,Dt=Q.itemSize,Nt=e.get(Q);if(Nt===void 0)continue;let{buffer:le,type:Zt,bytesPerElement:q}=Nt,lt=Zt===t.INT||Zt===t.UNSIGNED_INT||Q.gpuType===Da;if(Q.isInterleavedBufferAttribute){let rt=Q.data,Ut=rt.stride,Gt=Q.offset;if(rt.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)d(W.location+wt,rt.meshPerAttribute);if(D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=rt.meshPerAttribute*rt.count}else for(let wt=0;wt<W.locationSize;wt++)p(W.location+wt);t.bindBuffer(t.ARRAY_BUFFER,le);for(let wt=0;wt<W.locationSize;wt++)w(W.location+wt,Dt/W.locationSize,Zt,it,Ut*q,(Gt+Dt/W.locationSize*wt)*q,lt)}else{if(Q.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)d(W.location+rt,Q.meshPerAttribute);if(D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=Q.meshPerAttribute*Q.count}else for(let rt=0;rt<W.locationSize;rt++)p(W.location+rt);t.bindBuffer(t.ARRAY_BUFFER,le);for(let rt=0;rt<W.locationSize;rt++)w(W.location+rt,Dt/W.locationSize,Zt,it,Dt*q,Dt/W.locationSize*rt*q,lt)}}else if(z!==void 0){let it=z[at];if(it!==void 0)switch(it.length){case 2:t.vertexAttrib2fv(W.location,it);break;case 3:t.vertexAttrib3fv(W.location,it);break;case 4:t.vertexAttrib4fv(W.location,it);break;default:t.vertexAttrib1fv(W.location,it)}}}}E()}function T(){S();for(let D in i){let F=i[D];for(let Z in F){let I=F[Z];for(let H in I){let J=I[H];for(let z in J)u(J[z].object),delete J[z];delete I[H]}}delete i[D]}}function R(D){if(i[D.id]===void 0)return;let F=i[D.id];for(let Z in F){let I=F[Z];for(let H in I){let J=I[H];for(let z in J)u(J[z].object),delete J[z];delete I[H]}}delete i[D.id]}function A(D){for(let F in i){let Z=i[F];for(let I in Z){let H=Z[I];if(H[D.id]===void 0)continue;let J=H[D.id];for(let z in J)u(J[z].object),delete J[z];delete H[D.id]}}}function x(D){for(let F in i){let Z=i[F],I=D.isInstancedMesh===!0?D.id:0,H=Z[I];if(H===void 0)continue;for(let J in H){let z=H[J];for(let at in z)u(z[at].object),delete z[at];delete H[J]}if(delete Z[I],Object.keys(Z).length===0)delete i[F]}}function S(){if(O(),a=!0,r===s)return;r=s,c(r.object)}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:O,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:p,disableUnusedAttributes:E}}function Zp(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){if(u===0)return;t.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let m=0;m<u;m++)h+=c[m];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Jp(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){if(A!==gn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(A){let x=A===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(A!==on&&A!==Pn&&!x&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)Bt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&h===!1)Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:_,maxSamples:T,samples:R}}function $p(t){let e=this,n=null,i=0,s=!1,r=!1,a=new dn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,m){let{clippingPlanes:g,clipIntersection:M,clipShadows:p}=f,d=t.get(f);if(!s||g===null||g.length===0||r&&!p)if(r)u(null);else c();else{let E=r?0:i,w=E*4,_=d.clippingState||null;l.value=_,_=u(g,h,w,m);for(let T=0;T!==w;++T)_[T]=n[T];d.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){let M=f!==null?f.length:0,p=null;if(M!==0){if(p=l.value,g!==!0||p===null){let d=m+M*4,E=h.matrixWorldInverse;if(o.getNormalMatrix(E),p===null||p.length<d)p=new Float32Array(d);for(let w=0,_=m;w!==M;++w,_+=4)a.copy(f[w]).applyMatrix4(E,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}var $i=4,Kp=6,Qp=20,jp=256,ws=new Ts,uh=new zt,Qo=null,jo=0,tl=0,el=!1,tm=new C,vi=new C;class sl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=tm}=s;Qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qo,jo,tl),this._renderer.xr.enabled=el,t.scissorTest=!1,Ji(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===ki||t.mapping===ai)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:mn,format:gn,colorSpace:_o,depthBuffer:!1},i=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=dh(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=em(s)),this._blurMaterial=im(s,t,e),this._ggxMaterial=nm(s,t,e)}return i}_compileMaterial(t){let e=new j(new ge,t);this._renderer.compile(e,ws)}_sceneToCubeUV(t,e,n,i,s){let o=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,{autoClear:f,toneMapping:h}=u;if(u.getClearColor(uh),u.toneMapping=rn,u.autoClear=!1,u.state.buffers.depth.getReversed())u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new j(new ye,new Ke({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}));let g=this._backgroundBox,M=g.material,p=!1,d=t.background;if(d){if(d.isColor)M.color.copy(d),t.background=null,p=!0}else M.color.copy(uh),p=!0;for(let E=0;E<6;E++){let w=E%3;if(w===0)o.up.set(0,l[E],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[E],s.y,s.z);else if(w===1)o.up.set(0,0,l[E]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[E],s.z);else o.up.set(0,l[E],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[E]);let _=this._cubeSize;if(Ji(i,w*_,E>2?_:0,_,_),u.setRenderTarget(i),p)u.render(g,o);u.render(t,o)}u.toneMapping=h,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ki||t.mapping===ai;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=ph();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=fh();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;Ji(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,ws)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),f=l*1.25,h=u*f,{_lodMax:m}=this,g=this._sizeLods[n],M=3*g*(n>m-$i?n-m+$i:0),p=4*(this._cubeSize-g);o.envMap.value=t.texture,o.roughness.value=h,o.mipInt.value=m-e,Ji(s,M,p,3*g,2*g),i.setRenderTarget(s),i.render(a,ws),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=m-n,Ji(t,M,p,3*g,2*g),i.setRenderTarget(t),i.render(a,ws)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],u=3*c*(i>this._lodMax-$i?i-this._lodMax+$i:0),f=4*(this._cubeSize-c);Ji(e,u,f,3*c,2*c),r.setRenderTarget(e),r.render(o,ws)}}function em(t){let e=[],n=[],i=t,s=t-$i+1+Kp;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,m=3,g=new Float32Array(m*h*f),M=new Float32Array(m*h*f);for(let d=0;d<f;d++){let E=d%3*2/3-1,w=d>2?0:-1,_=[E,w,0,E+0.6666666666666666,w,0,E+0.6666666666666666,w+1,0,E,w,0,E+0.6666666666666666,w+1,0,E,w+1,0];g.set(_,m*h*d);for(let T=0;T<h;T++){let R=u[T*2]*2-1,A=u[T*2+1]*2-1;if(d===0)vi.set(1,A,R);else if(d===1)vi.set(-R,1,-A);else if(d===2)vi.set(-R,A,1);else if(d===3)vi.set(-1,A,-R);else if(d===4)vi.set(-R,-1,A);else vi.set(R,A,-1);vi.toArray(M,(d*h+T)*m)}}let p=new ge;if(p.setAttribute("position",new qe(g,m)),p.setAttribute("outputDirection",new qe(M,m)),n.push(new j(p,null)),i>$i)i--}return{lodMeshes:n,sizeLods:e}}function dh(t,e,n){let i=new Ye(t,e,n);return i.texture.mapping=ms,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ji(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function nm(t,e,n){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function im(t,e,n){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:Qp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function fh(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ph(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Vr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ol extends Ye{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ye(5,5,5),s=new je({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:pn});s.uniforms.tEquirect.value=e;let r=new j(i,s),a=e.minFilter;if(e.minFilter===oi)e.minFilter=ze;return new qo(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function sm(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,m=!1){if(h===null||h===void 0)return null;if(m)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let m=h.mapping;if(m===Vi||m===cr)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let M=new ol(g.height);return M.fromEquirectangularTexture(t,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let m=h.mapping,g=m===Vi||m===cr,M=m===ki||m===ai;if(g||M){let p=n.get(h),d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d){if(i===null)i=new sl(t);return p=g?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),p.texture}else if(p!==void 0)return p.texture;else{let E=h.image;if(g&&E&&E.height>0||M&&E&&l(E)){if(i===null)i=new sl(t);return p=g?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,n.set(h,p),h.addEventListener("dispose",u),p.texture}else return null}}}return h}function o(h,m){if(m===Vi)h.mapping=ki;else if(m===cr)h.mapping=ai;return h}function l(h){let m=0,g=6;for(let M=0;M<g;M++)if(h[M]!==void 0)m++;return m===g}function c(h){let m=h.target;m.removeEventListener("dispose",c);let g=e.get(m);if(g!==void 0)e.delete(m),g.dispose()}function u(h){let m=h.target;m.removeEventListener("dispose",u);let g=n.get(m);if(g!==void 0)n.delete(m),g.dispose()}function f(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:f}}function rm(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)si("WebGLRenderer: "+i+" extension not supported.");return s}}}function am(t,e,n,i){let s={},r=new WeakMap;function a(f){let h=f.target;if(h.index!==null)e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let m=r.get(h);if(m)e.remove(m),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function o(f,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++,h}function l(f){let h=f.attributes;for(let m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(f){let h=[],m=f.index,g=f.attributes.position,M=0;if(g===void 0)return;if(m!==null){let E=m.array;M=m.version;for(let w=0,_=E.length;w<_;w+=3){let T=E[w+0],R=E[w+1],A=E[w+2];h.push(T,R,R,A,A,T)}}else{let E=g.array;M=g.version;for(let w=0,_=E.length/3-1;w<_;w+=3){let T=w+0,R=w+1,A=w+2;h.push(T,R,R,A,A,T)}}let p=new(g.count>=65535?br:Er)(h,1);p.version=M;let d=r.get(f);if(d)e.remove(d);r.set(f,p)}function u(f){let h=r.get(f);if(h){let m=f.index;if(m!==null){if(h.version<m.version)c(f)}}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function om(t,e,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*a),n.update(h,i,1)}function c(f,h,m){if(m===0)return;t.drawElementsInstanced(i,h,r,f*a,m),n.update(h,i,m)}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,m);let M=0;for(let p=0;p<m;p++)M+=h[p];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function lm(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function cm(t,e,n){let i=new WeakMap,s=new Me;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let S=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",S)};if(h!==void 0)h.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],w=0;if(m===!0)w=1;if(g===!0)w=2;if(M===!0)w=3;let _=o.attributes.position.count*w,T=1;if(_>e.maxTextureSize)T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize;let R=new Float32Array(_*T*4*f),A=new vr(R,_,T,f);A.type=Pn,A.needsUpdate=!0;let x=w*4;for(let O=0;O<f;O++){let D=p[O],F=d[O],Z=E[O],I=_*T*4*O;for(let H=0;H<D.count;H++){let J=H*x;if(m===!0)s.fromBufferAttribute(D,H),R[I+J+0]=s.x,R[I+J+1]=s.y,R[I+J+2]=s.z,R[I+J+3]=0;if(g===!0)s.fromBufferAttribute(F,H),R[I+J+4]=s.x,R[I+J+5]=s.y,R[I+J+6]=s.z,R[I+J+7]=0;if(M===!0)s.fromBufferAttribute(Z,H),R[I+J+8]=s.x,R[I+J+9]=s.y,R[I+J+10]=s.z,R[I+J+11]=Z.itemSize===4?s.w:1}}h={count:f,texture:A,size:new dt(_,T)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function hm(t,e,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u)e.update(h),r.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let m=c.skeleton;if(r.get(m)!==u)m.update(),r.set(m,u)}return h}function o(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:a,dispose:o}}var um={[Aa]:"LINEAR_TONE_MAPPING",[Ra]:"REINHARD_TONE_MAPPING",[Ca]:"CINEON_TONE_MAPPING",[ps]:"ACES_FILMIC_TONE_MAPPING",[Ia]:"AGX_TONE_MAPPING",[La]:"NEUTRAL_TONE_MAPPING",[Pa]:"CUSTOM_TONE_MAPPING"};function dm(t,e,n,i,s,r){let a=new Ye(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ge;c.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ie([0,2,0,0,2,0],2));let u=new Do({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new j(c,u),h=new Ts(-1,1,1,-1,0,1),m=null,g=null,M=!1,p,d=null,E=[],w=!1;this.setSize=function(_,T){if(a.setSize(_,T),o!==null)o.setSize(_,T);if(l!==null)l.setSize(_,T);for(let R=0;R<E.length;R++){let A=E[R];if(A.setSize)A.setSize(_,T)}},this.setEffects=function(_){E=_,w=E.length>0&&E[0].isRenderPass===!0;let{width:T,height:R}=a;if(E.length>0&&o===null)o=new Ye(T,R,{type:mn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(T,R,{type:mn,depthBuffer:!1,stencilBuffer:!1});for(let A=0;A<E.length;A++){let x=E[A];if(x.setSize)x.setSize(T,R)}},this.begin=function(_,T){if(M)return!1;if(_.toneMapping===rn&&E.length===0)return!1;if(d=T,T!==null){let{width:R,height:A}=T;if(a.width!==R||a.height!==A)this.setSize(R,A)}if(w===!1)_.setRenderTarget(a);return p=_.toneMapping,_.toneMapping=rn,!0},this.hasRenderPass=function(){return w},this.end=function(_,T){_.toneMapping=p,M=!0;let R=a,A=o;for(let x=0;x<E.length;x++){let S=E[x];if(S.enabled===!1)continue;if(S.render(_,A,R,T),S.needsSwap!==!1)R=A,A=A===o?l:o}if(m!==_.outputColorSpace||g!==_.toneMapping){if(m=_.outputColorSpace,g=_.toneMapping,u.defines={},ne.getTransfer(m)===me)u.defines.SRGB_TRANSFER="";let x=um[g];if(x)u.defines[x]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,_.setRenderTarget(d),_.render(f,h),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),u.dispose()}}var Nh=new Le,rl=new mi(1,1),Uh=new vr,Fh=new bo,Oh=new wr,mh=[],gh=[],_h=new Float32Array(16),xh=new Float32Array(9),yh=new Float32Array(4);function Ki(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=mh[s];if(r===void 0)r=new Float32Array(s),mh[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Ce(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pe(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wr(t,e){let n=gh[e];if(n===void 0)n=new Int32Array(e),gh[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function fm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function pm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ce(n,e))return;t.uniform2fv(this.addr,e),Pe(n,e)}}function mm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Ce(n,e))return;t.uniform3fv(this.addr,e),Pe(n,e)}}function gm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ce(n,e))return;t.uniform4fv(this.addr,e),Pe(n,e)}}function _m(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ce(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pe(n,e)}else{if(Ce(n,i))return;yh.set(i),t.uniformMatrix2fv(this.addr,!1,yh),Pe(n,i)}}function xm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ce(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pe(n,e)}else{if(Ce(n,i))return;xh.set(i),t.uniformMatrix3fv(this.addr,!1,xh),Pe(n,i)}}function ym(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ce(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pe(n,e)}else{if(Ce(n,i))return;_h.set(i),t.uniformMatrix4fv(this.addr,!1,_h),Pe(n,i)}}function vm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Mm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ce(n,e))return;t.uniform2iv(this.addr,e),Pe(n,e)}}function Sm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ce(n,e))return;t.uniform3iv(this.addr,e),Pe(n,e)}}function Em(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ce(n,e))return;t.uniform4iv(this.addr,e),Pe(n,e)}}function bm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Tm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ce(n,e))return;t.uniform2uiv(this.addr,e),Pe(n,e)}}function wm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ce(n,e))return;t.uniform3uiv(this.addr,e),Pe(n,e)}}function Am(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ce(n,e))return;t.uniform4uiv(this.addr,e),Pe(n,e)}}function Rm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)rl.compareFunction=n.isReversedDepthBuffer()?yr:xr,r=rl;else r=Nh;n.setTexture2D(e||r,s)}function Cm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Fh,s)}function Pm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Oh,s)}function Im(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Uh,s)}function Lm(t){switch(t){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return xm;case 35676:return ym;case 5124:case 35670:return vm;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return bm;case 36294:return Tm;case 36295:return wm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Im}}function Dm(t,e){t.uniform1fv(this.addr,e)}function Nm(t,e){let n=Ki(e,this.size,2);t.uniform2fv(this.addr,n)}function Um(t,e){let n=Ki(e,this.size,3);t.uniform3fv(this.addr,n)}function Fm(t,e){let n=Ki(e,this.size,4);t.uniform4fv(this.addr,n)}function Om(t,e){let n=Ki(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Bm(t,e){let n=Ki(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Gm(t,e){let n=Ki(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Hm(t,e){t.uniform1iv(this.addr,e)}function zm(t,e){t.uniform2iv(this.addr,e)}function km(t,e){t.uniform3iv(this.addr,e)}function Vm(t,e){t.uniform4iv(this.addr,e)}function Wm(t,e){t.uniform1uiv(this.addr,e)}function Xm(t,e){t.uniform2uiv(this.addr,e)}function qm(t,e){t.uniform3uiv(this.addr,e)}function Ym(t,e){t.uniform4uiv(this.addr,e)}function Zm(t,e,n){let i=this.cache,s=e.length,r=Wr(n,s);if(!Ce(i,r))t.uniform1iv(this.addr,r),Pe(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=rl;else a=Nh;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function Jm(t,e,n){let i=this.cache,s=e.length,r=Wr(n,s);if(!Ce(i,r))t.uniform1iv(this.addr,r),Pe(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Fh,r[a])}function $m(t,e,n){let i=this.cache,s=e.length,r=Wr(n,s);if(!Ce(i,r))t.uniform1iv(this.addr,r),Pe(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Oh,r[a])}function Km(t,e,n){let i=this.cache,s=e.length,r=Wr(n,s);if(!Ce(i,r))t.uniform1iv(this.addr,r),Pe(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Uh,r[a])}function Qm(t){switch(t){case 5126:return Dm;case 35664:return Nm;case 35665:return Um;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return Gm;case 5124:case 35670:return Hm;case 35667:case 35671:return zm;case 35668:case 35672:return km;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Km}}class Bh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lm(e.type)}}class Gh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qm(e.type)}}class Hh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var nl=/(\w+)(\])?(\[|\.)?/g;function vh(t,e){t.seq.push(e),t.map[e.id]=e}function jm(t,e,n){let i=t.name,s=i.length;nl.lastIndex=0;while(!0){let r=nl.exec(i),a=nl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){vh(n,c===void 0?new Bh(o,t,e):new Gh(o,t,e));break}else{let f=n.map[o];if(f===void 0)f=new Hh(o),vh(n,f);n=f}}}class Cs{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);jm(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function Mh(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var t0=37297,e0=0;function n0(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Sh=new Vt;function i0(t){ne._getMatrix(Sh,ne.workingColorSpace,t);let e=`mat3( ${Sh.elements.map((n)=>n.toFixed(4))} )`;switch(ne.getTransfer(t)){case xo:return[e,"LinearTransferOETF"];case me:return[e,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Eh(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+n0(t.getShaderSource(e),o)}else return r}function s0(t,e){let n=i0(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var r0={[Aa]:"Linear",[Ra]:"Reinhard",[Ca]:"Cineon",[ps]:"ACESFilmic",[Ia]:"AgX",[La]:"Neutral",[Pa]:"Custom"};function a0(t,e){let n=r0[e];if(n===void 0)return Bt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var kr=new C;function o0(){ne.getLuminanceCoefficients(kr);let t=kr.x.toFixed(4),e=kr.y.toFixed(4),n=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function l0(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function c0(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function h0(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Rs(t){return t!==""}function bh(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Th(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var u0=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(t){return t.replace(u0,f0)}var d0=new Map;function f0(t,e){let n=$t[e];if(n===void 0){let i=d0.get(e);if(i!==void 0)n=$t[i],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return al(n)}var p0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(t){return t.replace(p0,m0)}function m0(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var g0={[ds]:"SHADOWMAP_TYPE_PCF",[Gi]:"SHADOWMAP_TYPE_VSM"};function _0(t){return g0[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x0={[ki]:"ENVMAP_TYPE_CUBE",[ai]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE_UV"};function y0(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return x0[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var v0={[ai]:"ENVMAP_MODE_REFRACTION"};function M0(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return v0[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var S0={[Cc]:"ENVMAP_BLENDING_MULTIPLY",[Pc]:"ENVMAP_BLENDING_MIX",[Ic]:"ENVMAP_BLENDING_ADD"};function E0(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return S0[t.combine]||"ENVMAP_BLENDING_NONE"}function b0(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function T0(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=_0(n),c=y0(n),u=M0(n),f=E0(n),h=b0(n),m=l0(n),g=c0(r),M=s.createProgram(),p,d,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Rs).join(`
`),p.length>0)p+=`
`;if(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Rs).join(`
`),d.length>0)d+=`
`}else p=[Ah(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),d=[Ah(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rn?"#define TONE_MAPPING":"",n.toneMapping!==rn?$t.tonemapping_pars_fragment:"",n.toneMapping!==rn?a0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,s0("linearToOutputTexel",n.outputColorSpace),o0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rs).join(`
`);if(a=al(a),a=bh(a,n),a=Th(a,n),o=al(o),o=bh(o,n),o=Th(o,n),a=wh(a),o=wh(o),n.isRawShaderMaterial!==!0)E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d;let w=E+p+a,_=E+d+o,T=Mh(s,s.VERTEX_SHADER,w),R=Mh(s,s.FRAGMENT_SHADER,_);if(s.attachShader(M,T),s.attachShader(M,R),n.index0AttributeName!==void 0)s.bindAttribLocation(M,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(M,0,"position");s.linkProgram(M);function A(D){if(t.debug.checkShaderErrors){let F=s.getProgramInfoLog(M)||"",Z=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(R)||"",H=F.trim(),J=Z.trim(),z=I.trim(),at=!0,W=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,M,T,R);else{let Q=Eh(s,T,"vertex"),it=Eh(s,R,"fragment");kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+Q+`
`+it)}else if(H!=="")Bt("WebGLProgram: Program Info Log:",H);else if(J===""||z==="")W=!1;if(W)D.diagnostics={runnable:at,programLog:H,vertexShader:{log:J,prefix:p},fragmentShader:{log:z,prefix:d}}}s.deleteShader(T),s.deleteShader(R),x=new Cs(s,M),S=h0(s,M)}let x;this.getUniforms=function(){if(x===void 0)A(this);return x};let S;this.getAttributes=function(){if(S===void 0)A(this);return S};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(O===!1)O=s.getProgramParameter(M,t0);return O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=R,this}var w0=0;class zh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new kh(t),e.set(t,n);return n}}class kh{constructor(t){this.id=w0++,this.code=t,this.usedTimes=0}}function A0(t){return t===hi||t===gr||t===_r}function R0(t,e,n,i,s,r){let a=new Mr,o=new zh,l=new Set,c=[],u=new Map,{logarithmicDepthBuffer:f,precision:h}=i,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){if(l.add(x),x===0)return"uv";return`uv${x}`}function M(x,S,O,D,F,Z){let I=D.fog,H=F.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,at=e.get(x.envMap||J,z),W=!!at&&at.mapping===ms?at.image.height:null,Q=m[x.type];if(x.precision!==null){if(h=i.getMaxPrecision(x.precision),h!==x.precision)Bt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead.")}let it=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Dt=it!==void 0?it.length:0,Nt=0;if(H.morphAttributes.position!==void 0)Nt=1;if(H.morphAttributes.normal!==void 0)Nt=2;if(H.morphAttributes.color!==void 0)Nt=3;let le,Zt,q,lt;if(Q){let _e=vn[Q];le=_e.vertexShader,Zt=_e.fragmentShader}else{le=x.vertexShader,Zt=x.fragmentShader;let _e=o.getVertexShaderStage(x),ae=o.getFragmentShaderStage(x);o.update(x,_e,ae),q=_e.id,lt=ae.id}let rt=t.getRenderTarget(),Ut=t.state.buffers.depth.getReversed(),Gt=F.isInstancedMesh===!0,wt=F.isBatchedMesh===!0,ce=!!x.map,tt=!!x.matcap,st=!!at,ot=!!x.aoMap,ct=!!x.lightMap,vt=!!x.bumpMap&&x.wireframe===!1,It=!!x.normalMap,Ft=!!x.displacementMap,Wt=!!x.emissiveMap,Xt=!!x.metalnessMap,P=!!x.roughnessMap,ue=x.anisotropy>0,Kt=x.clearcoat>0,jt=x.dispersion>0,b=x.retroreflectivity>0,y=x.iridescence>0,L=x.sheen>0,k=x.transmission>0,et=ue&&!!x.anisotropyMap,ht=Kt&&!!x.clearcoatMap,ft=Kt&&!!x.clearcoatNormalMap,X=Kt&&!!x.clearcoatRoughnessMap,K=y&&!!x.iridescenceMap,St=y&&!!x.iridescenceThicknessMap,Lt=L&&!!x.sheenColorMap,gt=L&&!!x.sheenRoughnessMap,ut=!!x.specularMap,Ot=!!x.specularColorMap,Ht=!!x.specularIntensityMap,re=k&&!!x.transmissionMap,U=k&&!!x.thicknessMap,pt=!!x.gradientMap,Y=!!x.alphaMap,mt=x.alphaTest>0,Et=!!x.alphaHash,nt=!!x.extensions,xt=rn;if(x.toneMapped){if(rt===null||rt.isXRRenderTarget===!0)xt=t.toneMapping}let qt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:Zt,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:wt,batchingColor:wt&&F._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&F.instanceColor!==null,instancingMorph:Gt&&F.morphTexture!==null,outputColorSpace:rt===null?t.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ce,matcap:tt,envMap:st,envMapMode:st&&at.mapping,envMapCubeUVHeight:W,aoMap:ot,lightMap:ct,bumpMap:vt,normalMap:It,displacementMap:Ft,emissiveMap:Wt,normalMapObjectSpace:It&&x.normalMapType===zc,normalMapTangentSpace:It&&x.normalMapType===go,packedNormalMap:It&&x.normalMapType===go&&A0(x.normalMap.format),metalnessMap:Xt,roughnessMap:P,anisotropy:ue,anisotropyMap:et,clearcoat:Kt,clearcoatMap:ht,clearcoatNormalMap:ft,clearcoatRoughnessMap:X,dispersion:jt,retroreflection:b,iridescence:y,iridescenceMap:K,iridescenceThicknessMap:St,sheen:L,sheenColorMap:Lt,sheenRoughnessMap:gt,specularMap:ut,specularColorMap:Ot,specularIntensityMap:Ht,transmission:k,transmissionMap:re,thicknessMap:U,gradientMap:pt,opaque:x.transparent===!1&&x.blending===fs&&x.alphaToCoverage===!1,alphaMap:Y,alphaTest:mt,alphaHash:Et,combine:x.combine,mapUv:ce&&g(x.map.channel),aoMapUv:ot&&g(x.aoMap.channel),lightMapUv:ct&&g(x.lightMap.channel),bumpMapUv:vt&&g(x.bumpMap.channel),normalMapUv:It&&g(x.normalMap.channel),displacementMapUv:Ft&&g(x.displacementMap.channel),emissiveMapUv:Wt&&g(x.emissiveMap.channel),metalnessMapUv:Xt&&g(x.metalnessMap.channel),roughnessMapUv:P&&g(x.roughnessMap.channel),anisotropyMapUv:et&&g(x.anisotropyMap.channel),clearcoatMapUv:ht&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:St&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(x.sheenRoughnessMap.channel),specularMapUv:ut&&g(x.specularMap.channel),specularColorMapUv:Ot&&g(x.specularColorMap.channel),specularIntensityMapUv:Ht&&g(x.specularIntensityMap.channel),transmissionMapUv:re&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:Y&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(It||ue),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(ce||Y),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&It===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ut,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Nt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:ce&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:Wt&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Re,flipSided:x.side===He,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function p(x){let S=[];if(x.shaderID)S.push(x.shaderID);else S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID);if(x.defines!==void 0)for(let O in x.defines)S.push(O),S.push(x.defines[O]);if(x.isRawShaderMaterial===!1)d(S,x),E(S,x),S.push(t.outputColorSpace);return S.push(x.customProgramCacheKey),S.join()}function d(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function E(x,S){if(a.disableAll(),S.instancing)a.enable(0);if(S.instancingColor)a.enable(1);if(S.instancingMorph)a.enable(2);if(S.matcap)a.enable(3);if(S.envMap)a.enable(4);if(S.normalMapObjectSpace)a.enable(5);if(S.normalMapTangentSpace)a.enable(6);if(S.clearcoat)a.enable(7);if(S.iridescence)a.enable(8);if(S.alphaTest)a.enable(9);if(S.vertexColors)a.enable(10);if(S.vertexAlphas)a.enable(11);if(S.vertexUv1s)a.enable(12);if(S.vertexUv2s)a.enable(13);if(S.vertexUv3s)a.enable(14);if(S.vertexTangents)a.enable(15);if(S.anisotropy)a.enable(16);if(S.alphaHash)a.enable(17);if(S.batching)a.enable(18);if(S.dispersion)a.enable(19);if(S.retroreflection)a.enable(24);if(S.batchingColor)a.enable(20);if(S.gradientMap)a.enable(21);if(S.packedNormalMap)a.enable(22);if(S.vertexNormals)a.enable(23);if(x.push(a.mask),a.disableAll(),S.fog)a.enable(0);if(S.useFog)a.enable(1);if(S.flatShading)a.enable(2);if(S.logarithmicDepthBuffer)a.enable(3);if(S.reversedDepthBuffer)a.enable(4);if(S.skinning)a.enable(5);if(S.morphTargets)a.enable(6);if(S.morphNormals)a.enable(7);if(S.morphColors)a.enable(8);if(S.premultipliedAlpha)a.enable(9);if(S.shadowMapEnabled)a.enable(10);if(S.doubleSided)a.enable(11);if(S.flipSided)a.enable(12);if(S.useDepthPacking)a.enable(13);if(S.dithering)a.enable(14);if(S.transmission)a.enable(15);if(S.sheen)a.enable(16);if(S.opaque)a.enable(17);if(S.pointsUvs)a.enable(18);if(S.decodeVideoTexture)a.enable(19);if(S.decodeVideoTextureEmissive)a.enable(20);if(S.alphaToCoverage)a.enable(21);if(S.numLightProbeGrids>0)a.enable(22);if(S.hasPositionAttribute)a.enable(23);x.push(a.mask)}function w(x){let S=m[x.type],O;if(S){let D=vn[S];O=rh.clone(D.uniforms)}else O=x.uniforms;return O}function _(x,S){let O=u.get(S);if(O!==void 0)++O.usedTimes;else O=new T0(t,S,x,s),c.push(O),u.set(S,O);return O}function T(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function A(){o.dispose()}return{getParameters:M,getProgramCacheKey:p,getUniforms:w,acquireProgram:_,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:A}}function C0(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function P0(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Rh(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Ch(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let m=0;if(h.isInstancedMesh)m+=2;if(h.isSkinnedMesh)m+=1;return m}function o(h,m,g,M,p,d){let E=t[e];if(E===void 0)E={id:h.id,object:h,geometry:m,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:p,group:d},t[e]=E;else E.id=h.id,E.object=h,E.geometry=m,E.material=g,E.materialVariant=a(h),E.groupOrder=M,E.renderOrder=h.renderOrder,E.z=p,E.group=d;return e++,E}function l(h,m,g,M,p,d,E){if(E.reversedDepth===!0)p=-p;let w=o(h,m,g,M,p,d);if(g.transmission>0)i.push(w);else if(g.transparent===!0)s.push(w);else n.push(w)}function c(h,m,g,M,p,d){let E=o(h,m,g,M,p,d);if(g.transmission>0)i.unshift(E);else if(g.transparent===!0)s.unshift(E);else n.unshift(E)}function u(h,m){if(n.length>1)n.sort(h||P0);if(i.length>1)i.sort(m||Rh);if(s.length>1)s.sort(m||Rh)}function f(){for(let h=e,m=t.length;h<m;h++){let g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function I0(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Ch,t.set(i,[a]);else if(s>=r.length)a=new Ch,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function L0(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new C,color:new zt};break;case"SpotLight":n={position:new C,direction:new C,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new C,color:new zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new C,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":n={color:new zt,position:new C,halfWidth:new C,halfHeight:new C};break}return t[e.id]=n,n}}}function D0(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var N0=0;function U0(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function F0(t){let e=new L0,n=D0(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new pe,a=new pe;function o(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let m=0,g=0,M=0,p=0,d=0,E=0,w=0,_=0,T=0,R=0,A=0,x=0,S=0,O=0;c.sort(U0);for(let F=0,Z=c.length;F<Z;F++){let I=c[F],{color:H,intensity:J,distance:z}=I,at=null;if(I.shadow&&I.shadow.map)if(I.shadow.map.texture.format===hi)at=I.shadow.map.texture;else at=I.shadow.map.depthTexture||I.shadow.map.texture;if(I.isAmbientLight)u+=H.r*J,f+=H.g*J,h+=H.b*J;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],J);O++}else if(I.isSunLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,it=n.get(I);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=it,i.sunShadowMap[g]=at;let Dt=Q.getViewportCount();for(let Nt=0;Nt<Dt;Nt++)i.sunShadowMatrix[M+Nt]=Q.getMatrix(Nt),i.sunShadowCascade[M+Nt]=Q._cascadeData[Nt];M+=Dt,g++}i.sun[m]=W,m++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,it=n.get(I);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,i.directionalShadow[p]=it,i.directionalShadowMap[p]=at,i.directionalShadowMatrix[p]=I.shadow.matrix,T++}i.directional[p]=W,p++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(H).multiplyScalar(J),W.distance=z,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[E]=W;let Q=I.shadow;if(I.map){if(i.spotLightMap[x]=I.map,x++,Q.updateMatrices(I),I.castShadow)S++}if(i.spotLightMatrix[E]=Q.matrix,I.castShadow){let it=n.get(I);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,i.spotShadow[E]=it,i.spotShadowMap[E]=at,A++}E++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(H).multiplyScalar(J),W.halfWidth.set(I.width*0.5,0,0),W.halfHeight.set(0,I.height*0.5,0),i.rectArea[w]=W,w++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Q=I.shadow,it=n.get(I);it.shadowIntensity=Q.intensity,it.shadowBias=Q.bias,it.shadowNormalBias=Q.normalBias,it.shadowRadius=Q.radius,it.shadowMapSize=Q.mapSize,it.shadowCameraNear=Q.camera.near,it.shadowCameraFar=Q.camera.far,i.pointShadow[d]=it,i.pointShadowMap[d]=at,i.pointShadowMatrix[d]=I.shadow.matrix,R++}i.point[d]=W,d++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(J),W.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[_]=W,_++}}if(w>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2;else i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let D=i.hash;if(D.sunLength!==m||D.directionalLength!==p||D.pointLength!==d||D.spotLength!==E||D.rectAreaLength!==w||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==R||D.numSpotShadows!==A||D.numSpotMaps!==x||D.numLightProbes!==O)i.sun.length=m,i.directional.length=p,i.spot.length=E,i.rectArea.length=w,i.point.length=d,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-S,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=O,D.sunLength=m,D.directionalLength=p,D.pointLength=d,D.spotLength=E,D.rectAreaLength=w,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=R,D.numSpotShadows=A,D.numSpotMaps=x,D.numLightProbes=O,i.version=N0++}function l(c,u){let f=0,h=0,m=0,g=0,M=0,p=0,d=u.matrixWorldInverse;for(let E=0,w=c.length;E<w;E++){let _=c[E];if(_.isSunLight){let T=i.sun[f];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(d),f++}else if(_.isDirectionalLight){let T=i.directional[h];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(_.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(_.isRectAreaLight){let T=i.rectArea[M];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(_.width*0.5,0,0),T.halfHeight.set(0,_.height*0.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){let T=i.point[m];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),m++}else if(_.isHemisphereLight){let T=i.hemi[p];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:i}}function Ph(t){let e=new F0(t),n=[],i=[],s=[];function r(h){f.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function O0(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Ph(t),e.set(s,[o]);else if(r>=a.length)o=new Ph(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,H0=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],z0=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ih=new pe,As=new C,il=new C;function k0(t,e,n){let i=new Ss,s=new dt,r=new dt,a=new Me,o=new No,l=new Uo,c={},u=n.maxTextureSize,f={[Hi]:He,[He]:Hi,[Re]:Re},h=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:B0,fragmentShader:G0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new qe(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new j(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let d=this.type;this.render=function(R,A,x){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(R.length===0)return;if(this.type===lr)Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ds;let S=t.getRenderTarget(),O=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),F=t.state;if(F.setBlending(pn),F.buffers.depth.getReversed()===!0)F.buffers.color.setClear(0,0,0,0);else F.buffers.color.setClear(1,1,1,1);F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Z=d!==this.type;if(Z)A.traverse(function(I){if(I.material)if(Array.isArray(I.material))I.material.forEach((H)=>H.needsUpdate=!0);else I.material.needsUpdate=!0});for(let I=0,H=R.length;I<H;I++){let J=R[I],z=J.shadow;if(z===void 0){Bt("WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let at=z.getFrameExtents();if(s.multiply(at),r.copy(z.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/at.x),s.x=r.x*at.x,z.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/at.y),s.y=r.y*at.y,z.mapSize.y=r.y}let W=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||Z===!0){if(z.map!==null){if(z.map.depthTexture!==null)z.map.depthTexture.dispose(),z.map.depthTexture=null;z.map.dispose()}if(this.type===Gi){if(J.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ye(s.x,s.y,{format:hi,type:mn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),z.map.texture.name=J.name+".shadowMap",z.map.depthTexture=new mi(s.x,s.y,Pn),z.map.depthTexture.name=J.name+".shadowMapDepth",z.map.depthTexture.format=li,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yn,z.map.depthTexture.magFilter=Yn}else{if(J.isPointLight)z.map=new ol(s.x),z.map.depthTexture=new wo(s.x,Zn);else z.map=new Ye(s.x,s.y),z.map.depthTexture=new mi(s.x,s.y,Zn);if(z.map.depthTexture.name=J.name+".shadowMap",z.map.depthTexture.format=li,this.type===ds)z.map.depthTexture.compareFunction=W?yr:xr,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze;else z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yn,z.map.depthTexture.magFilter=Yn}z.camera.updateProjectionMatrix()}if(z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y))z.map.setSize(s.x,s.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();if(J.isPointLight!==!0)z.updateMatrices(J,x);for(let it=0;it<Q;it++){let Dt=z.getCamera(it);if(J.isPointLight){let{camera:Nt,matrix:le}=z,Zt=J.distance||Nt.far;if(Zt!==Nt.far)Nt.far=Zt,Nt.updateProjectionMatrix();As.setFromMatrixPosition(J.matrixWorld),Nt.position.copy(As),il.copy(Nt.position),il.add(H0[it]),Nt.up.copy(z0[it]),Nt.lookAt(il),Nt.updateMatrixWorld(),le.makeTranslation(-As.x,-As.y,-As.z),Ih.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ih,Nt.coordinateSystem,Nt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,it),t.clear();else{if(it===0)t.setRenderTarget(z.map),t.clear();let Nt=z.getViewport(it);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),F.viewport(a)}i=z.getFrustum(it),_(A,x,Dt,J,this.type)}if(z.isPointLightShadow!==!0&&this.type===Gi)E(z,x);z.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(S,O,D)};function E(R,A){let x=e.update(M);if(h.defines.VSM_SAMPLES!==R.blurSamples)h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new Ye(s.x,s.y,{format:hi,type:mn});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,x,h,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,x,m,M,null)}function w(R,A,x,S){let O=null,D=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)O=D;else if(O=x.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=O.uuid,Z=A.uuid,I=c[F];if(I===void 0)I={},c[F]=I;let H=I[Z];if(H===void 0)H=O.clone(),I[Z]=H,A.addEventListener("dispose",T);O=H}if(O.visible=A.visible,O.wireframe=A.wireframe,S===Gi)O.side=A.shadowSide!==null?A.shadowSide:A.side;else O.side=A.shadowSide!==null?A.shadowSide:f[A.side];if(O.alphaMap=A.alphaMap,O.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,O.map=A.map,O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.displacementMap=A.displacementMap,O.displacementScale=A.displacementScale,O.displacementBias=A.displacementBias,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,x.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let F=t.properties.get(O);F.light=x}return O}function _(R,A,x,S,O){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&O===Gi)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);let Z=e.update(R),I=R.material;if(Array.isArray(I)){let H=Z.groups;for(let J=0,z=H.length;J<z;J++){let at=H[J],W=I[at.materialIndex];if(W&&W.visible){let Q=w(R,W,S,O);R.onBeforeShadow(t,R,A,x,Z,Q,at),t.renderBufferDirect(x,null,Z,Q,R,at),R.onAfterShadow(t,R,A,x,Z,Q,at)}}}else if(I.visible){let H=w(R,I,S,O);R.onBeforeShadow(t,R,A,x,Z,H,null),t.renderBufferDirect(x,null,Z,H,R,null),R.onAfterShadow(t,R,A,x,Z,H,null)}}}let F=R.children;for(let Z=0,I=F.length;Z<I;Z++)_(F[Z],A,x,S,O)}function T(R){R.target.removeEventListener("dispose",T);for(let x in c){let S=c[x],O=R.target.uuid;if(O in S)S[O].dispose(),delete S[O]}}}function V0(t,e){function n(){let U=!1,pt=new Me,Y=null,mt=new Me(0,0,0,0);return{setMask:function(Et){if(Y!==Et&&!U)t.colorMask(Et,Et,Et,Et),Y=Et},setLocked:function(Et){U=Et},setClear:function(Et,nt,xt,qt,_e){if(_e===!0)Et*=qt,nt*=qt,xt*=qt;if(pt.set(Et,nt,xt,qt),mt.equals(pt)===!1)t.clearColor(Et,nt,xt,qt),mt.copy(pt)},reset:function(){U=!1,Y=null,mt.set(-1,0,0,0)}}}function i(){let U=!1,pt=!1,Y=null,mt=null,Et=null;return{setReversed:function(nt){if(pt!==nt){let xt=e.get("EXT_clip_control");if(nt)xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT);else xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT);pt=nt;let qt=Et;Et=null,this.setClear(qt)}},getReversed:function(){return pt},setTest:function(nt){if(nt)rt(t.DEPTH_TEST);else Ut(t.DEPTH_TEST)},setMask:function(nt){if(Y!==nt&&!U)t.depthMask(nt),Y=nt},setFunc:function(nt){if(pt)nt=Qc[nt];if(mt!==nt){switch(nt){case Sc:t.depthFunc(t.NEVER);break;case Ec:t.depthFunc(t.ALWAYS);break;case bc:t.depthFunc(t.LESS);break;case wa:t.depthFunc(t.LEQUAL);break;case Tc:t.depthFunc(t.EQUAL);break;case wc:t.depthFunc(t.GEQUAL);break;case Ac:t.depthFunc(t.GREATER);break;case Rc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}mt=nt}},setLocked:function(nt){U=nt},setClear:function(nt){if(Et!==nt){if(Et=nt,pt)nt=1-nt;t.clearDepth(nt)}},reset:function(){U=!1,Y=null,mt=null,Et=null,pt=!1}}}function s(){let U=!1,pt=null,Y=null,mt=null,Et=null,nt=null,xt=null,qt=null,_e=null;return{setTest:function(ae){if(!U)if(ae)rt(t.STENCIL_TEST);else Ut(t.STENCIL_TEST)},setMask:function(ae){if(pt!==ae&&!U)t.stencilMask(ae),pt=ae},setFunc:function(ae,cn,Sn){if(Y!==ae||mt!==cn||Et!==Sn)t.stencilFunc(ae,cn,Sn),Y=ae,mt=cn,Et=Sn},setOp:function(ae,cn,Sn){if(nt!==ae||xt!==cn||qt!==Sn)t.stencilOp(ae,cn,Sn),nt=ae,xt=cn,qt=Sn},setLocked:function(ae){U=ae},setClear:function(ae){if(_e!==ae)t.clearStencil(ae),_e=ae},reset:function(){U=!1,pt=null,Y=null,mt=null,Et=null,nt=null,xt=null,qt=null,_e=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},m=new WeakMap,g=[],M=null,p=!1,d=null,E=null,w=null,_=null,T=null,R=null,A=null,x=new zt(0,0,0),S=0,O=!1,D=null,F=null,Z=null,I=null,H=null,J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,at=0,W=t.getParameter(t.VERSION);if(W.indexOf("WebGL")!==-1)at=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=at>=1;else if(W.indexOf("OpenGL ES")!==-1)at=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=at>=2;let Q=null,it={},Dt=t.getParameter(t.SCISSOR_BOX),Nt=t.getParameter(t.VIEWPORT),le=new Me().fromArray(Dt),Zt=new Me().fromArray(Nt);function q(U,pt,Y,mt){let Et=new Uint8Array(4),nt=t.createTexture();t.bindTexture(U,nt),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xt=0;xt<Y;xt++)if(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)t.texImage3D(pt,0,t.RGBA,1,1,mt,0,t.RGBA,t.UNSIGNED_BYTE,Et);else t.texImage2D(pt+xt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Et);return nt}let lt={};lt[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),lt[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),lt[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(t.DEPTH_TEST),a.setFunc(wa),vt(!1),It(Ea),rt(t.CULL_FACE),ot(pn);function rt(U){if(u[U]!==!0)t.enable(U),u[U]=!0}function Ut(U){if(u[U]!==!1)t.disable(U),u[U]=!1}function Gt(U,pt){if(h[U]!==pt){if(t.bindFramebuffer(U,pt),h[U]=pt,U===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=pt;if(U===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=pt;return!0}return!1}function wt(U,pt){let Y=g,mt=!1;if(U){if(Y=m.get(pt),Y===void 0)Y=[],m.set(pt,Y);let Et=U.textures;if(Y.length!==Et.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,xt=Et.length;nt<xt;nt++)Y[nt]=t.COLOR_ATTACHMENT0+nt;Y.length=Et.length,mt=!0}}else if(Y[0]!==t.BACK)Y[0]=t.BACK,mt=!0;if(mt)t.drawBuffers(Y)}function ce(U){if(M!==U)return t.useProgram(U),M=U,!0;return!1}let tt={[zi]:t.FUNC_ADD,[ic]:t.FUNC_SUBTRACT,[sc]:t.FUNC_REVERSE_SUBTRACT};tt[rc]=t.MIN,tt[ac]=t.MAX;let st={[oc]:t.ZERO,[lc]:t.ONE,[cc]:t.SRC_COLOR,[uc]:t.SRC_ALPHA,[_c]:t.SRC_ALPHA_SATURATE,[mc]:t.DST_COLOR,[fc]:t.DST_ALPHA,[hc]:t.ONE_MINUS_SRC_COLOR,[dc]:t.ONE_MINUS_SRC_ALPHA,[gc]:t.ONE_MINUS_DST_COLOR,[pc]:t.ONE_MINUS_DST_ALPHA,[xc]:t.CONSTANT_COLOR,[yc]:t.ONE_MINUS_CONSTANT_COLOR,[vc]:t.CONSTANT_ALPHA,[Mc]:t.ONE_MINUS_CONSTANT_ALPHA};function ot(U,pt,Y,mt,Et,nt,xt,qt,_e,ae){if(U===pn){if(p===!0)Ut(t.BLEND),p=!1;return}if(p===!1)rt(t.BLEND),p=!0;if(U!==nc){if(U!==d||ae!==O){if(E!==zi||T!==zi)t.blendEquation(t.FUNC_ADD),E=zi,T=zi;if(ae)switch(U){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qn:t.blendFunc(t.ONE,t.ONE);break;case ba:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ta:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:kt("WebGLState: Invalid blending: ",U);break}else switch(U){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ba:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ta:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",U);break}w=null,_=null,R=null,A=null,x.set(0,0,0),S=0,d=U,O=ae}return}if(Et=Et||pt,nt=nt||Y,xt=xt||mt,pt!==E||Et!==T)t.blendEquationSeparate(tt[pt],tt[Et]),E=pt,T=Et;if(Y!==w||mt!==_||nt!==R||xt!==A)t.blendFuncSeparate(st[Y],st[mt],st[nt],st[xt]),w=Y,_=mt,R=nt,A=xt;if(qt.equals(x)===!1||_e!==S)t.blendColor(qt.r,qt.g,qt.b,_e),x.copy(qt),S=_e;d=U,O=!1}function ct(U,pt){U.side===Re?Ut(t.CULL_FACE):rt(t.CULL_FACE);let Y=U.side===He;if(pt)Y=!Y;vt(Y),U.blending===fs&&U.transparent===!1?ot(pn):ot(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let mt=U.stencilWrite;if(o.setTest(mt),mt)o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass);Wt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(t.SAMPLE_ALPHA_TO_COVERAGE):Ut(t.SAMPLE_ALPHA_TO_COVERAGE)}function vt(U){if(D!==U){if(U)t.frontFace(t.CW);else t.frontFace(t.CCW);D=U}}function It(U){if(U!==tc){if(rt(t.CULL_FACE),U!==F)if(U===Ea)t.cullFace(t.BACK);else if(U===ec)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Ut(t.CULL_FACE);F=U}function Ft(U){if(U!==Z){if(z)t.lineWidth(U);Z=U}}function Wt(U,pt,Y){if(U){if(rt(t.POLYGON_OFFSET_FILL),I!==pt||H!==Y){if(I=pt,H=Y,a.getReversed())pt=-pt;t.polygonOffset(pt,Y)}}else Ut(t.POLYGON_OFFSET_FILL)}function Xt(U){if(U)rt(t.SCISSOR_TEST);else Ut(t.SCISSOR_TEST)}function P(U){if(U===void 0)U=t.TEXTURE0+J-1;if(Q!==U)t.activeTexture(U),Q=U}function ue(U,pt,Y){if(Y===void 0)if(Q===null)Y=t.TEXTURE0+J-1;else Y=Q;let mt=it[Y];if(mt===void 0)mt={type:void 0,texture:void 0},it[Y]=mt;if(mt.type!==U||mt.texture!==pt){if(Q!==Y)t.activeTexture(Y),Q=Y;t.bindTexture(U,pt||lt[U]),mt.type=U,mt.texture=pt}}function Kt(){let U=it[Q];if(U!==void 0&&U.type!==void 0)t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0}function jt(){try{t.compressedTexImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function y(){try{t.texSubImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function L(){try{t.texSubImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function et(){try{t.compressedTexSubImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function ht(){try{t.texStorage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function ft(){try{t.texStorage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function X(){try{t.texImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function K(){try{t.texImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function St(U){if(f[U]!==void 0)return f[U];else return t.getParameter(U)}function Lt(U,pt){if(f[U]!==pt)t.pixelStorei(U,pt),f[U]=pt}function gt(U){if(le.equals(U)===!1)t.scissor(U.x,U.y,U.z,U.w),le.copy(U)}function ut(U){if(Zt.equals(U)===!1)t.viewport(U.x,U.y,U.z,U.w),Zt.copy(U)}function Ot(U,pt){let Y=c.get(pt);if(Y===void 0)Y=new WeakMap,c.set(pt,Y);let mt=Y.get(U);if(mt===void 0)mt=t.getUniformBlockIndex(pt,U.name),Y.set(U,mt)}function Ht(U,pt){let mt=c.get(pt).get(U);if(l.get(pt)!==mt)t.uniformBlockBinding(pt,mt,U.__bindingPointIndex),l.set(pt,mt)}function re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},Q=null,it={},h={},m=new WeakMap,g=[],M=null,p=!1,d=null,E=null,w=null,_=null,T=null,R=null,A=null,x=new zt(0,0,0),S=0,O=!1,D=null,F=null,Z=null,I=null,H=null,le.set(0,0,t.canvas.width,t.canvas.height),Zt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Ut,bindFramebuffer:Gt,drawBuffers:wt,useProgram:ce,setBlending:ot,setMaterial:ct,setFlipSided:vt,setCullFace:It,setLineWidth:Ft,setPolygonOffset:Wt,setScissorTest:Xt,activeTexture:P,bindTexture:ue,unbindTexture:Kt,compressedTexImage2D:jt,compressedTexImage3D:b,texImage2D:X,texImage3D:K,pixelStorei:Lt,getParameter:St,updateUBOMapping:Ot,uniformBlockBinding:Ht,texStorage2D:ht,texStorage3D:ft,texSubImage2D:y,texSubImage3D:L,compressedTexSubImage2D:k,compressedTexSubImage3D:et,scissor:gt,viewport:ut,reset:re}}function W0(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap,f=new Set,h,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function M(b,y){return g?new OffscreenCanvas(b,y):os("canvas")}function p(b,y,L){let k=1,et=jt(b);if(et.width>L||et.height>L)k=L/Math.max(et.width,et.height);if(k<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ht=Math.floor(k*et.width),ft=Math.floor(k*et.height);if(h===void 0)h=M(ht,ft);let X=y?M(ht,ft):h;return X.width=ht,X.height=ft,X.getContext("2d").drawImage(b,0,0,ht,ft),Bt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ht+"x"+ft+")."),X}else{if("data"in b)Bt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+").");return b}return b}function d(b){return b.generateMipmaps}function E(b){t.generateMipmap(b)}function w(b){if(b.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(b.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function _(b,y,L,k,et,ht=!1){if(b!==null){if(t[b]!==void 0)return t[b];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ft;if(k){if(ft=e.get("EXT_texture_norm16"),!ft)Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let X=y;if(y===t.RED){if(L===t.FLOAT)X=t.R32F;if(L===t.HALF_FLOAT)X=t.R16F;if(L===t.UNSIGNED_BYTE)X=t.R8;if(L===t.UNSIGNED_SHORT&&ft)X=ft.R16_EXT;if(L===t.SHORT&&ft)X=ft.R16_SNORM_EXT}if(y===t.RED_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.R8UI;if(L===t.UNSIGNED_SHORT)X=t.R16UI;if(L===t.UNSIGNED_INT)X=t.R32UI;if(L===t.BYTE)X=t.R8I;if(L===t.SHORT)X=t.R16I;if(L===t.INT)X=t.R32I}if(y===t.RG){if(L===t.FLOAT)X=t.RG32F;if(L===t.HALF_FLOAT)X=t.RG16F;if(L===t.UNSIGNED_BYTE)X=t.RG8;if(L===t.UNSIGNED_SHORT&&ft)X=ft.RG16_EXT;if(L===t.SHORT&&ft)X=ft.RG16_SNORM_EXT}if(y===t.RG_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RG8UI;if(L===t.UNSIGNED_SHORT)X=t.RG16UI;if(L===t.UNSIGNED_INT)X=t.RG32UI;if(L===t.BYTE)X=t.RG8I;if(L===t.SHORT)X=t.RG16I;if(L===t.INT)X=t.RG32I}if(y===t.RGB_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RGB8UI;if(L===t.UNSIGNED_SHORT)X=t.RGB16UI;if(L===t.UNSIGNED_INT)X=t.RGB32UI;if(L===t.BYTE)X=t.RGB8I;if(L===t.SHORT)X=t.RGB16I;if(L===t.INT)X=t.RGB32I}if(y===t.RGBA_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RGBA8UI;if(L===t.UNSIGNED_SHORT)X=t.RGBA16UI;if(L===t.UNSIGNED_INT)X=t.RGBA32UI;if(L===t.BYTE)X=t.RGBA8I;if(L===t.SHORT)X=t.RGBA16I;if(L===t.INT)X=t.RGBA32I}if(y===t.RGB){if(L===t.UNSIGNED_SHORT&&ft)X=ft.RGB16_EXT;if(L===t.SHORT&&ft)X=ft.RGB16_SNORM_EXT;if(L===t.UNSIGNED_INT_5_9_9_9_REV)X=t.RGB9_E5;if(L===t.UNSIGNED_INT_10F_11F_11F_REV)X=t.R11F_G11F_B10F}if(y===t.RGBA){let K=ht?xo:ne.getTransfer(et);if(L===t.FLOAT)X=t.RGBA32F;if(L===t.HALF_FLOAT)X=t.RGBA16F;if(L===t.UNSIGNED_BYTE)X=K===me?t.SRGB8_ALPHA8:t.RGBA8;if(L===t.UNSIGNED_SHORT&&ft)X=ft.RGBA16_EXT;if(L===t.SHORT&&ft)X=ft.RGBA16_SNORM_EXT;if(L===t.UNSIGNED_SHORT_4_4_4_4)X=t.RGBA4;if(L===t.UNSIGNED_SHORT_5_5_5_1)X=t.RGB5_A1}if(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)e.get("EXT_color_buffer_float");return X}function T(b,y){let L;if(b){if(y===null||y===Zn||y===Wi)L=t.DEPTH24_STENCIL8;else if(y===Pn)L=t.DEPTH32F_STENCIL8;else if(y===_s)L=t.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(y===null||y===Zn||y===Wi)L=t.DEPTH_COMPONENT24;else if(y===Pn)L=t.DEPTH_COMPONENT32F;else if(y===_s)L=t.DEPTH_COMPONENT16;return L}function R(b,y){if(d(b)===!0||b.isFramebufferTexture&&b.minFilter!==Yn&&b.minFilter!==ze)return Math.log2(Math.max(y.width,y.height))+1;else if(b.mipmaps!==void 0&&b.mipmaps.length>0)return b.mipmaps.length;else if(b.isCompressedTexture&&Array.isArray(b.image))return y.mipmaps.length;else return 1}function A(b){let y=b.target;if(y.removeEventListener("dispose",A),S(y),y.isVideoTexture)u.delete(y);if(y.isHTMLTexture)f.delete(y)}function x(b){let y=b.target;y.removeEventListener("dispose",x),D(y)}function S(b){let y=i.get(b);if(y.__webglInit===void 0)return;let L=b.source,k=m.get(L);if(k){let et=k[y.__cacheKey];if(et.usedTimes--,et.usedTimes===0)O(b);if(Object.keys(k).length===0)m.delete(L)}i.remove(b)}function O(b){let y=i.get(b);t.deleteTexture(y.__webglTexture);let L=b.source,k=m.get(L);delete k[y.__cacheKey],a.memory.textures--}function D(b){let y=i.get(b);if(b.depthTexture)b.depthTexture.dispose(),i.remove(b.depthTexture);if(b.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(y.__webglFramebuffer[k]))for(let et=0;et<y.__webglFramebuffer[k].length;et++)t.deleteFramebuffer(y.__webglFramebuffer[k][et]);else t.deleteFramebuffer(y.__webglFramebuffer[k]);if(y.__webglDepthbuffer)t.deleteRenderbuffer(y.__webglDepthbuffer[k])}else{if(Array.isArray(y.__webglFramebuffer))for(let k=0;k<y.__webglFramebuffer.length;k++)t.deleteFramebuffer(y.__webglFramebuffer[k]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer)t.deleteRenderbuffer(y.__webglDepthbuffer);if(y.__webglMultisampledFramebuffer)t.deleteFramebuffer(y.__webglMultisampledFramebuffer);if(y.__webglColorRenderbuffer){for(let k=0;k<y.__webglColorRenderbuffer.length;k++)if(y.__webglColorRenderbuffer[k])t.deleteRenderbuffer(y.__webglColorRenderbuffer[k])}if(y.__webglDepthRenderbuffer)t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=b.textures;for(let k=0,et=L.length;k<et;k++){let ht=i.get(L[k]);if(ht.__webglTexture)t.deleteTexture(ht.__webglTexture),a.memory.textures--;i.remove(L[k])}i.remove(b)}let F=0;function Z(){F=0}function I(){return F}function H(b){F=b}function J(){let b=F;if(b>=s.maxTextures)Bt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures);return F+=1,b}function z(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function at(b,y){let L=i.get(b);if(b.isVideoTexture)ue(b);if(b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&L.__version!==b.version){let k=b.image;if(k===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(L,b,y);return}}else if(b.isExternalTexture)L.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+y)}function W(b,y){let L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){Ut(L,b,y);return}else if(b.isExternalTexture)L.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+y)}function Q(b,y){let L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){Ut(L,b,y);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+y)}function it(b,y){let L=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&L.__version!==b.version){Gt(L,b,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+y)}let Dt={[an]:t.REPEAT,[hr]:t.CLAMP_TO_EDGE,[Lc]:t.MIRRORED_REPEAT},Nt={[Yn]:t.NEAREST,[Dc]:t.NEAREST_MIPMAP_NEAREST,[gs]:t.NEAREST_MIPMAP_LINEAR,[ze]:t.LINEAR,[ur]:t.LINEAR_MIPMAP_NEAREST,[oi]:t.LINEAR_MIPMAP_LINEAR},le={[Vc]:t.NEVER,[Zc]:t.ALWAYS,[Wc]:t.LESS,[xr]:t.LEQUAL,[Xc]:t.EQUAL,[yr]:t.GEQUAL,[qc]:t.GREATER,[Yc]:t.NOTEQUAL};function Zt(b,y){if(y.type===Pn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ze||y.magFilter===ur||y.magFilter===gs||y.magFilter===oi||y.minFilter===ze||y.minFilter===ur||y.minFilter===gs||y.minFilter===oi))Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(b,t.TEXTURE_WRAP_S,Dt[y.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Dt[y.wrapT]),b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)t.texParameteri(b,t.TEXTURE_WRAP_R,Dt[y.wrapR]);if(t.texParameteri(b,t.TEXTURE_MAG_FILTER,Nt[y.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Nt[y.minFilter]),y.compareFunction)t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,le[y.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Yn)return;if(y.minFilter!==gs&&y.minFilter!==oi)return;if(y.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function q(b,y){let L=!1;if(b.__webglInit===void 0)b.__webglInit=!0,y.addEventListener("dispose",A);let k=y.source,et=m.get(k);if(et===void 0)et={},m.set(k,et);let ht=z(y);if(ht!==b.__cacheKey){if(et[ht]===void 0)et[ht]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,L=!0;et[ht].usedTimes++;let ft=et[b.__cacheKey];if(ft!==void 0){if(et[b.__cacheKey].usedTimes--,ft.usedTimes===0)O(y)}b.__cacheKey=ht,b.__webglTexture=et[ht].texture}return L}function lt(b,y,L){return Math.floor(Math.floor(b/L)/y)}function rt(b,y,L,k){let ht=b.updateRanges;if(ht.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,L,k,y.data);else{ht.sort((Lt,gt)=>Lt.start-gt.start);let ft=0;for(let Lt=1;Lt<ht.length;Lt++){let gt=ht[ft],ut=ht[Lt],Ot=gt.start+gt.count,Ht=lt(ut.start,y.width,4),re=lt(gt.start,y.width,4);if(ut.start<=Ot+1&&Ht===re&&lt(ut.start+ut.count-1,y.width,4)===Ht)gt.count=Math.max(gt.count,ut.start+ut.count-gt.start);else++ft,ht[ft]=ut}ht.length=ft+1;let X=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),St=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Lt=0,gt=ht.length;Lt<gt;Lt++){let ut=ht[Lt],Ot=Math.floor(ut.start/4),Ht=Math.ceil(ut.count/4),re=Ot%y.width,U=Math.floor(Ot/y.width),pt=Ht,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,re,U,pt,1,L,k,y.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,X),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,St)}}function Ut(b,y,L){let k=t.TEXTURE_2D;if(y.isDataArrayTexture||y.isCompressedArrayTexture)k=t.TEXTURE_2D_ARRAY;if(y.isData3DTexture)k=t.TEXTURE_3D;let et=q(b,y),ht=y.source;n.bindTexture(k,b.__webglTexture,t.TEXTURE0+L);let ft=i.get(ht);if(ht.version!==ft.__version||et===!0){if(n.activeTexture(t.TEXTURE0+L),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Y=ne.getPrimaries(ne.workingColorSpace),mt=y.colorSpace===ui?null:ne.getPrimaries(y.colorSpace),Et=y.colorSpace===ui||Y===mt?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let K=p(y.image,!1,s.maxTextureSize);K=Kt(y,K);let St=r.convert(y.format,y.colorSpace),Lt=r.convert(y.type),gt=_(y.internalFormat,St,Lt,y.normalized,y.colorSpace,y.isVideoTexture);Zt(k,y);let ut,Ot=y.mipmaps,Ht=y.isVideoTexture!==!0,re=ft.__version===void 0||et===!0,U=ht.dataReady,pt=R(y,K);if(y.isDepthTexture){if(gt=T(y.format===ci,y.type),re)if(Ht)n.texStorage2D(t.TEXTURE_2D,1,gt,K.width,K.height);else n.texImage2D(t.TEXTURE_2D,0,gt,K.width,K.height,0,St,Lt,null)}else if(y.isDataTexture)if(Ot.length>0){if(Ht&&re)n.texStorage2D(t.TEXTURE_2D,pt,gt,Ot[0].width,Ot[0].height);for(let Y=0,mt=Ot.length;Y<mt;Y++)if(ut=Ot[Y],Ht){if(U)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ut.width,ut.height,St,Lt,ut.data)}else n.texImage2D(t.TEXTURE_2D,Y,gt,ut.width,ut.height,0,St,Lt,ut.data);y.generateMipmaps=!1}else if(Ht){if(re)n.texStorage2D(t.TEXTURE_2D,pt,gt,K.width,K.height);if(U)rt(y,K,St,Lt)}else n.texImage2D(t.TEXTURE_2D,0,gt,K.width,K.height,0,St,Lt,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){if(Ht&&re)n.texStorage3D(t.TEXTURE_2D_ARRAY,pt,gt,Ot[0].width,Ot[0].height,K.depth);for(let Y=0,mt=Ot.length;Y<mt;Y++)if(ut=Ot[Y],y.format!==gn)if(St!==null)if(Ht){if(U)if(y.layerUpdates.size>0){let Et=Ko(ut.width,ut.height,y.format,y.type);for(let nt of y.layerUpdates){let xt=ut.data.subarray(nt*Et/ut.data.BYTES_PER_ELEMENT,(nt+1)*Et/ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,nt,ut.width,ut.height,1,St,xt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,K.depth,St,ut.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,gt,ut.width,ut.height,K.depth,0,ut.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ht){if(U)n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,K.depth,St,Lt,ut.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,Y,gt,ut.width,ut.height,K.depth,0,St,Lt,ut.data);if(y.layerUpdates.size>0)y.clearLayerUpdates()}else{if(Ht&&re)n.texStorage2D(t.TEXTURE_2D,pt,gt,Ot[0].width,Ot[0].height);for(let Y=0,mt=Ot.length;Y<mt;Y++)if(ut=Ot[Y],y.format!==gn)if(St!==null)if(Ht){if(U)n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ut.width,ut.height,St,ut.data)}else n.compressedTexImage2D(t.TEXTURE_2D,Y,gt,ut.width,ut.height,0,ut.data);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ht){if(U)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ut.width,ut.height,St,Lt,ut.data)}else n.texImage2D(t.TEXTURE_2D,Y,gt,ut.width,ut.height,0,St,Lt,ut.data)}else if(y.isDataArrayTexture)if(Ht){if(re)n.texStorage3D(t.TEXTURE_2D_ARRAY,pt,gt,K.width,K.height,K.depth);if(U)if(y.layerUpdates.size>0){let Y=Ko(K.width,K.height,y.format,y.type);for(let mt of y.layerUpdates){let Et=K.data.subarray(mt*Y/K.data.BYTES_PER_ELEMENT,(mt+1)*Y/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,mt,K.width,K.height,1,St,Lt,Et)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,St,Lt,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,gt,K.width,K.height,K.depth,0,St,Lt,K.data);else if(y.isData3DTexture)if(Ht){if(re)n.texStorage3D(t.TEXTURE_3D,pt,gt,K.width,K.height,K.depth);if(U)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,St,Lt,K.data)}else n.texImage3D(t.TEXTURE_3D,0,gt,K.width,K.height,K.depth,0,St,Lt,K.data);else if(y.isFramebufferTexture){if(re)if(Ht)n.texStorage2D(t.TEXTURE_2D,pt,gt,K.width,K.height);else{let Y=K.width,mt=K.height;for(let Et=0;Et<pt;Et++)n.texImage2D(t.TEXTURE_2D,Et,gt,Y,mt,0,St,Lt,null),Y>>=1,mt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){let Y=t.canvas;if(!Y.hasAttribute("layoutsubtree"))Y.setAttribute("layoutsubtree","true");if(K.parentNode!==Y){Y.appendChild(K),f.add(y),Y.onpaint=(mt)=>{let Et=mt.changedElements;for(let nt of f)if(Et.includes(nt.image))nt.needsUpdate=!0},Y.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,K);else{let{RGBA:Et,RGBA:nt,UNSIGNED_BYTE:xt}=t;t.texElementImage2D(t.TEXTURE_2D,0,Et,nt,xt,K)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Ht&&re){let Y=jt(Ot[0]);n.texStorage2D(t.TEXTURE_2D,pt,gt,Y.width,Y.height)}for(let Y=0,mt=Ot.length;Y<mt;Y++)if(ut=Ot[Y],Ht){if(U)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,St,Lt,ut)}else n.texImage2D(t.TEXTURE_2D,Y,gt,St,Lt,ut);y.generateMipmaps=!1}else if(Ht){if(re){let Y=jt(K);n.texStorage2D(t.TEXTURE_2D,pt,gt,Y.width,Y.height)}if(U)n.texSubImage2D(t.TEXTURE_2D,0,0,0,St,Lt,K)}else n.texImage2D(t.TEXTURE_2D,0,gt,St,Lt,K);if(d(y))E(k);if(ft.__version=ht.version,y.onUpdate)y.onUpdate(y)}b.__version=y.version}function Gt(b,y,L){if(y.image.length!==6)return;let k=q(b,y),et=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+L);let ht=i.get(et);if(et.version!==ht.__version||k===!0){n.activeTexture(t.TEXTURE0+L);let ft=ne.getPrimaries(ne.workingColorSpace),X=y.colorSpace===ui?null:ne.getPrimaries(y.colorSpace),K=y.colorSpace===ui||ft===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let St=y.isCompressedTexture||y.image[0].isCompressedTexture,Lt=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let nt=0;nt<6;nt++){if(!St&&!Lt)gt[nt]=p(y.image[nt],!0,s.maxCubemapSize);else gt[nt]=Lt?y.image[nt].image:y.image[nt];gt[nt]=Kt(y,gt[nt])}let ut=gt[0],Ot=r.convert(y.format,y.colorSpace),Ht=r.convert(y.type),re=_(y.internalFormat,Ot,Ht,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,pt=ht.__version===void 0||k===!0,Y=et.dataReady,mt=R(y,ut);Zt(t.TEXTURE_CUBE_MAP,y);let Et;if(St){if(U&&pt)n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,re,ut.width,ut.height);for(let nt=0;nt<6;nt++){Et=gt[nt].mipmaps;for(let xt=0;xt<Et.length;xt++){let qt=Et[xt];if(y.format!==gn)if(Ot!==null)if(U){if(Y)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,qt.width,qt.height,Ot,qt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,re,qt.width,qt.height,0,qt.data);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(U){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,qt.width,qt.height,Ot,Ht,qt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,re,qt.width,qt.height,0,Ot,Ht,qt.data)}}}else{if(Et=y.mipmaps,U&&pt){if(Et.length>0)mt++;let nt=jt(gt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,re,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Lt){if(U){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,gt[nt].width,gt[nt].height,Ot,Ht,gt[nt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,re,gt[nt].width,gt[nt].height,0,Ot,Ht,gt[nt].data);for(let xt=0;xt<Et.length;xt++){let _e=Et[xt].image[nt].image;if(U){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,_e.width,_e.height,Ot,Ht,_e.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,re,_e.width,_e.height,0,Ot,Ht,_e.data)}}else{if(U){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ot,Ht,gt[nt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,re,Ot,Ht,gt[nt]);for(let xt=0;xt<Et.length;xt++){let qt=Et[xt];if(U){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,Ot,Ht,qt.image[nt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,re,Ot,Ht,qt.image[nt])}}}if(d(y))E(t.TEXTURE_CUBE_MAP);if(ht.__version=et.version,y.onUpdate)y.onUpdate(y)}b.__version=y.version}function wt(b,y,L,k,et,ht){let ft=r.convert(L.format,L.colorSpace),X=r.convert(L.type),K=_(L.internalFormat,ft,X,L.normalized,L.colorSpace),St=i.get(y),Lt=i.get(L);if(Lt.__renderTarget=y,!St.__hasExternalTextures){let gt=Math.max(1,y.width>>ht),ut=Math.max(1,y.height>>ht);if(et===t.TEXTURE_3D||et===t.TEXTURE_2D_ARRAY)n.texImage3D(et,ht,K,gt,ut,y.depth,0,ft,X,null);else n.texImage2D(et,ht,K,gt,ut,0,ft,X,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,b),P(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,et,Lt.__webglTexture,0,Xt(y));else if(et===t.TEXTURE_2D||et>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,k,et,Lt.__webglTexture,ht);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(b,y,L){if(t.bindRenderbuffer(t.RENDERBUFFER,b),y.depthBuffer){let k=y.depthTexture,et=k&&k.isDepthTexture?k.type:null,ht=T(y.stencilBuffer,et),ft=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(P(y))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xt(y),ht,y.width,y.height);else if(L)t.renderbufferStorageMultisample(t.RENDERBUFFER,Xt(y),ht,y.width,y.height);else t.renderbufferStorage(t.RENDERBUFFER,ht,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ft,t.RENDERBUFFER,b)}else{let k=y.textures;for(let et=0;et<k.length;et++){let ht=k[et],ft=r.convert(ht.format,ht.colorSpace),X=r.convert(ht.type),K=_(ht.internalFormat,ft,X,ht.normalized,ht.colorSpace);if(P(y))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xt(y),K,y.width,y.height);else if(L)t.renderbufferStorageMultisample(t.RENDERBUFFER,Xt(y),K,y.width,y.height);else t.renderbufferStorage(t.RENDERBUFFER,K,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function tt(b,y,L){let k=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=i.get(y.depthTexture);if(et.__renderTarget=y,!et.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0;if(k){if(et.__webglInit===void 0)et.__webglInit=!0,y.depthTexture.addEventListener("dispose",A);if(et.__webglTexture===void 0){et.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,et.__webglTexture),Zt(t.TEXTURE_CUBE_MAP,y.depthTexture);let St=r.convert(y.depthTexture.format),Lt=r.convert(y.depthTexture.type),gt;if(y.depthTexture.format===li)gt=t.DEPTH_COMPONENT24;else if(y.depthTexture.format===ci)gt=t.DEPTH24_STENCIL8;for(let ut=0;ut<6;ut++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,gt,y.width,y.height,0,St,Lt,null)}}else at(y.depthTexture,0);let ht=et.__webglTexture,ft=Xt(y),X=k?t.TEXTURE_CUBE_MAP_POSITIVE_X+L:t.TEXTURE_2D,K=y.depthTexture.format===ci?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===li)if(P(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,X,ht,0,ft);else t.framebufferTexture2D(t.FRAMEBUFFER,K,X,ht,0);else if(y.depthTexture.format===ci)if(P(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,X,ht,0,ft);else t.framebufferTexture2D(t.FRAMEBUFFER,K,X,ht,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(b){let y=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){let k=b.depthTexture;if(y.__depthDisposeCallback)y.__depthDisposeCallback();if(k){let et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,k.removeEventListener("dispose",et)};k.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=k}if(b.depthTexture&&!y.__autoAllocateDepthBuffer)if(L)for(let k=0;k<6;k++)tt(y.__webglFramebuffer[k],b,k);else{let k=b.texture.mipmaps;if(k&&k.length>0)tt(y.__webglFramebuffer[0],b,0);else tt(y.__webglFramebuffer,b,0)}else if(L){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]===void 0)y.__webglDepthbuffer[k]=t.createRenderbuffer(),ce(y.__webglDepthbuffer[k],b,!1);else{let et=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,ht),t.framebufferRenderbuffer(t.FRAMEBUFFER,et,t.RENDERBUFFER,ht)}}else{let k=b.texture.mipmaps;if(k&&k.length>0)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer);if(y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),ce(y.__webglDepthbuffer,b,!1);else{let et=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ht),t.framebufferRenderbuffer(t.FRAMEBUFFER,et,t.RENDERBUFFER,ht)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ot(b,y,L){let k=i.get(b);if(y!==void 0)wt(k.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(L!==void 0)st(b)}function ct(b){let y=b.texture,L=i.get(b),k=i.get(y);b.addEventListener("dispose",x);let et=b.textures,ht=b.isWebGLCubeRenderTarget===!0,ft=et.length>1;if(!ft){if(k.__webglTexture===void 0)k.__webglTexture=t.createTexture();k.__version=y.version,a.memory.textures++}if(ht){L.__webglFramebuffer=[];for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[X]=[];for(let K=0;K<y.mipmaps.length;K++)L.__webglFramebuffer[X][K]=t.createFramebuffer()}else L.__webglFramebuffer[X]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let X=0;X<y.mipmaps.length;X++)L.__webglFramebuffer[X]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(ft)for(let X=0,K=et.length;X<K;X++){let St=i.get(et[X]);if(St.__webglTexture===void 0)St.__webglTexture=t.createTexture(),a.memory.textures++}if(b.samples>0&&P(b)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let X=0;X<et.length;X++){let K=et[X];L.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[X]);let St=r.convert(K.format,K.colorSpace),Lt=r.convert(K.type),gt=_(K.internalFormat,St,Lt,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),ut=Xt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ut,gt,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,L.__webglColorRenderbuffer[X])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer)L.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(L.__webglDepthRenderbuffer,b,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ht){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Zt(t.TEXTURE_CUBE_MAP,y);for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)wt(L.__webglFramebuffer[X][K],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else wt(L.__webglFramebuffer[X],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);if(d(y))E(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ft){for(let X=0,K=et.length;X<K;X++){let St=et[X],Lt=i.get(St),gt=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)gt=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(gt,Lt.__webglTexture),Zt(gt,St),wt(L.__webglFramebuffer,b,St,t.COLOR_ATTACHMENT0+X,gt,0),d(St))E(gt)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)X=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(X,k.__webglTexture),Zt(X,y),y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)wt(L.__webglFramebuffer[K],b,y,t.COLOR_ATTACHMENT0,X,K);else wt(L.__webglFramebuffer,b,y,t.COLOR_ATTACHMENT0,X,0);if(d(y))E(X);n.unbindTexture()}if(b.depthBuffer)st(b)}function vt(b){let y=b.textures;for(let L=0,k=y.length;L<k;L++){let et=y[L];if(d(et)){let ht=w(b),ft=i.get(et).__webglTexture;n.bindTexture(ht,ft),E(ht),n.unbindTexture()}}}let It=[],Ft=[];function Wt(b){if(b.samples>0){if(P(b)===!1){let{textures:y,width:L,height:k}=b,et=t.COLOR_BUFFER_BIT,ht=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ft=i.get(b),X=y.length>1;if(X)for(let St=0;St<y.length;St++)n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let K=b.texture.mipmaps;if(K&&K.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let St=0;St<y.length;St++){if(b.resolveDepthBuffer){if(b.depthBuffer)et|=t.DEPTH_BUFFER_BIT;if(b.stencilBuffer&&b.resolveStencilBuffer)et|=t.STENCIL_BUFFER_BIT}if(X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ft.__webglColorRenderbuffer[St]);let Lt=i.get(y[St]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Lt,0)}if(t.blitFramebuffer(0,0,L,k,0,0,L,k,et,t.NEAREST),l===!0){if(It.length=0,Ft.length=0,It.push(t.COLOR_ATTACHMENT0+St),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1)It.push(ht),Ft.push(ht),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ft);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,It)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let St=0;St<y.length;St++){n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.RENDERBUFFER,ft.__webglColorRenderbuffer[St]);let Lt=i.get(y[St]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.TEXTURE_2D,Lt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Xt(b){return Math.min(s.maxSamples,b.samples)}function P(b){let y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ue(b){let y=a.render.frame;if(u.get(b)!==y)u.set(b,y),b.update()}function Kt(b,y){let{colorSpace:L,format:k,type:et}=b;if(b.isCompressedTexture===!0||b.isVideoTexture===!0)return y;if(L!==_o&&L!==ui)if(ne.getTransfer(L)===me){if(k!==gn||et!==on)Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else kt("WebGLTextures: Unsupported texture color space:",L);return y}function jt(b){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement)c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height;else if(typeof VideoFrame<"u"&&b instanceof VideoFrame)c.width=b.displayWidth,c.height=b.displayHeight;else c.width=b.width,c.height=b.height;return c}this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.getTextureUnits=I,this.setTextureUnits=H,this.setTexture2D=at,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=it,this.rebindTextures=ot,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=P,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function X0(t,e){function n(i,s=ui){let r,a=ne.getTransfer(s);if(i===on)return t.UNSIGNED_BYTE;if(i===Na)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ua)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Fc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Oc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nc)return t.BYTE;if(i===Uc)return t.SHORT;if(i===_s)return t.UNSIGNED_SHORT;if(i===Da)return t.INT;if(i===Zn)return t.UNSIGNED_INT;if(i===Pn)return t.FLOAT;if(i===mn)return t.HALF_FLOAT;if(i===Bc)return t.ALPHA;if(i===Gc)return t.RGB;if(i===gn)return t.RGBA;if(i===li)return t.DEPTH_COMPONENT;if(i===ci)return t.DEPTH_STENCIL;if(i===Hc)return t.RED;if(i===Fa)return t.RED_INTEGER;if(i===hi)return t.RG;if(i===Oa)return t.RG_INTEGER;if(i===Ba)return t.RGBA_INTEGER;if(i===dr||i===fr||i===pr||i===mr)if(a===me)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ga||i===Ha||i===za||i===ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Va||i===Wa||i===Xa||i===qa||i===Ya||i===gr||i===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Va||i===Wa)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qa)return r.COMPRESSED_R11_EAC;if(i===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(i===gr)return r.COMPRESSED_RG11_EAC;if(i===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ja||i===$a||i===Ka||i===Qa||i===ja||i===to||i===eo||i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ja)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$a)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ja)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===to)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===no)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===so)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ao)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===co||i===ho||i===uo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===co)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fo||i===po||i===_r||i===mo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Wi)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ar(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:q0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new ke(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wh extends In{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,f=null,h=null,m=null,g=typeof XRWebGLBinding<"u",M=new Vh,p={},d=e.getContextAttributes(),E=null,w=null,_=[],T=[],R=new dt,A=null,x=null,S=new Fe;S.viewport=new Me;let O=new Fe;O.viewport=new Me;let D=[S,O],F=new Yo,Z=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let lt=_[q];if(lt===void 0)lt=new ys,_[q]=lt;return lt.getTargetRaySpace()},this.getControllerGrip=function(q){let lt=_[q];if(lt===void 0)lt=new ys,_[q]=lt;return lt.getGripSpace()},this.getHand=function(q){let lt=_[q];if(lt===void 0)lt=new ys,_[q]=lt;return lt.getHandSpace()};function H(q){let lt=T.indexOf(q.inputSource);if(lt===-1)return;let rt=_[lt];if(rt!==void 0)rt.update(q.inputSource,q.frame,l||r),rt.dispatchEvent({type:q.type,data:q.inputSource})}function J(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",z);for(let q=0;q<_.length;q++){let lt=T[q];if(lt===null)continue;T[q]=null,_[q].disconnect(lt)}Z=null,I=null,M.reset();for(let q in p)delete p[q];if(t.setRenderTarget(E),h=null,f=null,u=null,i=null,w=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),x!==null){let q=x.camera;q.fov=x.fov,q.zoom=x.zoom,q.updateProjectionMatrix(),x=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){if(s=q,n.isPresenting===!0)Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){if(a=q,n.isPresenting===!0)Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){if(u===null&&g)u=new XRWebGLBinding(i,e);return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",J),i.addEventListener("inputsourceschange",z),d.xrCompatible!==!0)await e.makeXRCompatible();if(A=t.getPixelRatio(),t.getSize(R),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let rt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new Ye(h.framebufferWidth,h.framebufferHeight,{format:gn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let rt=null,Ut=null,Gt=null;if(d.depth)Gt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=d.stencil?ci:li,Ut=d.stencil?Wi:Zn;let wt={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(wt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Ye(f.textureWidth,f.textureHeight,{format:gn,type:on,depthTexture:new mi(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(q){for(let lt=0;lt<q.removed.length;lt++){let rt=q.removed[lt],Ut=T.indexOf(rt);if(Ut>=0)T[Ut]=null,_[Ut].disconnect(rt)}for(let lt=0;lt<q.added.length;lt++){let rt=q.added[lt],Ut=T.indexOf(rt);if(Ut===-1){for(let wt=0;wt<_.length;wt++)if(wt>=T.length){T.push(rt),Ut=wt;break}else if(T[wt]===null){T[wt]=rt,Ut=wt;break}if(Ut===-1)break}let Gt=_[Ut];if(Gt)Gt.connect(rt)}}let at=new C,W=new C;function Q(q,lt,rt){at.setFromMatrixPosition(lt.matrixWorld),W.setFromMatrixPosition(rt.matrixWorld);let Ut=at.distanceTo(W),Gt=lt.projectionMatrix.elements,wt=rt.projectionMatrix.elements,ce=Gt[14]/(Gt[10]-1),tt=Gt[14]/(Gt[10]+1),st=(Gt[9]+1)/Gt[5],ot=(Gt[9]-1)/Gt[5],ct=(Gt[8]-1)/Gt[0],vt=(wt[8]+1)/wt[0],It=ce*ct,Ft=ce*vt,Wt=Ut/(-ct+vt),Xt=Wt*-ct;if(lt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xt),q.translateZ(Wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Gt[10]===-1)q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let P=ce+Wt,ue=tt+Wt,Kt=It-Xt,jt=Ft+(Ut-Xt),b=st*tt/ue*P,y=ot*tt/ue*P;q.projectionMatrix.makePerspective(Kt,jt,b,y,P,ue),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,lt){if(lt===null)q.matrixWorld.copy(q.matrix);else q.matrixWorld.multiplyMatrices(lt.matrixWorld,q.matrix);q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let{near:lt,far:rt}=q;if(M.texture!==null){if(M.depthNear>0)lt=M.depthNear;if(M.depthFar>0)rt=M.depthFar}if(F.near=O.near=S.near=lt,F.far=O.far=S.far=rt,Z!==F.near||I!==F.far)i.updateRenderState({depthNear:F.near,depthFar:F.far}),Z=F.near,I=F.far;F.layers.mask=q.layers.mask|6,S.layers.mask=F.layers.mask&-5,O.layers.mask=F.layers.mask&-3;let Ut=q.parent,Gt=F.cameras;it(F,Ut);for(let wt=0;wt<Gt.length;wt++)it(Gt[wt],Ut);if(Gt.length===2)Q(F,S,O);else F.projectionMatrix.copy(S.projectionMatrix);if(x===null&&q.isPerspectiveCamera)x={camera:q,fov:q.fov,zoom:q.zoom};Dt(q,F,Ut)};function Dt(q,lt,rt){if(rt===null)q.matrix.copy(lt.matrixWorld);else q.matrix.copy(rt.matrixWorld),q.matrix.invert(),q.matrix.multiply(lt.matrixWorld);if(q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse),q.isPerspectiveCamera)q.fov=ls*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1}this.getCamera=function(){return F},this.getFoveation=function(){if(f===null&&h===null)return;return o},this.setFoveation=function(q){if(o=q,f!==null)f.fixedFoveation=q;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=q},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(F)},this.getCameraTexture=function(q){return p[q]};let Nt=null;function le(q,lt){if(c=lt.getViewerPose(l||r),m=lt,c!==null){let rt=c.views;if(h!==null)t.setRenderTargetFramebuffer(w,h.framebuffer),t.setRenderTarget(w);let Ut=!1;if(rt.length!==F.cameras.length)F.cameras.length=0,Ut=!0;for(let tt=0;tt<rt.length;tt++){let st=rt[tt],ot=null;if(h!==null)ot=h.getViewport(st);else{let vt=u.getViewSubImage(f,st);if(ot=vt.viewport,tt===0)t.setRenderTargetTextures(w,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(w)}let ct=D[tt];if(ct===void 0)ct=new Fe,ct.layers.enable(tt),ct.viewport=new Me,D[tt]=ct;if(ct.matrix.fromArray(st.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(st.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(ot.x,ot.y,ot.width,ot.height),tt===0)F.matrix.copy(ct.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);if(Ut===!0)F.cameras.push(ct)}let Gt=i.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let tt=u.getDepthInformation(rt[0]);if(tt&&tt.isValid&&tt.texture)M.init(tt,i.renderState)}if(Gt&&Gt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let tt=0;tt<rt.length;tt++){let st=rt[tt].camera;if(st){let ot=p[st];if(!ot)ot=new Ar,p[st]=ot;let ct=u.getCameraImage(st);ot.sourceTexture=ct}}}}for(let rt=0;rt<_.length;rt++){let Ut=T[rt],Gt=_[rt];if(Ut!==null&&Gt!==void 0)Gt.update(Ut,lt,l||r)}if(Nt)Nt(q,lt);if(lt.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:lt});m=null}let Zt=new Lh;Zt.setAnimationLoop(le),this.setAnimationLoop=function(q){Nt=q},this.dispose=function(){}}}var Z0=new pe,Xh=new Vt;Xh.set(-1,0,0,0,1,0,0,0,1);function J0(t,e){function n(p,d){if(p.matrixAutoUpdate===!0)p.updateMatrix();d.value.copy(p.matrix)}function i(p,d){if(d.color.getRGB(p.fogColor.value,Lo(t)),d.isFog)p.fogNear.value=d.near,p.fogFar.value=d.far;else if(d.isFogExp2)p.fogDensity.value=d.density}function s(p,d,E,w,_){if(d.isNodeMaterial)d.uniformsNeedUpdate=!1;else if(d.isMeshBasicMaterial)r(p,d);else if(d.isMeshLambertMaterial){if(r(p,d),d.envMap)p.envMapIntensity.value=d.envMapIntensity}else if(d.isMeshToonMaterial)r(p,d),f(p,d);else if(d.isMeshPhongMaterial){if(r(p,d),u(p,d),d.envMap)p.envMapIntensity.value=d.envMapIntensity}else if(d.isMeshStandardMaterial){if(r(p,d),h(p,d),d.isMeshPhysicalMaterial)m(p,d,_)}else if(d.isMeshMatcapMaterial)r(p,d),g(p,d);else if(d.isMeshDepthMaterial)r(p,d);else if(d.isMeshDistanceMaterial)r(p,d),M(p,d);else if(d.isMeshNormalMaterial)r(p,d);else if(d.isLineBasicMaterial){if(a(p,d),d.isLineDashedMaterial)o(p,d)}else if(d.isPointsMaterial)l(p,d,E,w);else if(d.isSpriteMaterial)c(p,d);else if(d.isShadowMaterial)p.color.value.copy(d.color),p.opacity.value=d.opacity;else if(d.isShaderMaterial)d.uniformsNeedUpdate=!1}function r(p,d){if(p.opacity.value=d.opacity,d.color)p.diffuse.value.copy(d.color);if(d.emissive)p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity);if(d.map)p.map.value=d.map,n(d.map,p.mapTransform);if(d.alphaMap)p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform);if(d.bumpMap){if(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===He)p.bumpScale.value*=-1}if(d.normalMap){if(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===He)p.normalScale.value.negate()}if(d.displacementMap)p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias;if(d.emissiveMap)p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform);if(d.specularMap)p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform);if(d.alphaTest>0)p.alphaTest.value=d.alphaTest;let E=e.get(d),{envMap:w,envMapRotation:_}=E;if(w){if(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(Xh);p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio}if(d.lightMap)p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform);if(d.aoMap)p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform)}function a(p,d){if(p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map)p.map.value=d.map,n(d.map,p.mapTransform)}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,w){if(p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=w*0.5,d.map)p.map.value=d.map,n(d.map,p.uvTransform);if(d.alphaMap)p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform);if(d.alphaTest>0)p.alphaTest.value=d.alphaTest}function c(p,d){if(p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map)p.map.value=d.map,n(d.map,p.mapTransform);if(d.alphaMap)p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform);if(d.alphaTest>0)p.alphaTest.value=d.alphaTest}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,0.0001)}function f(p,d){if(d.gradientMap)p.gradientMap.value=d.gradientMap}function h(p,d){if(p.metalness.value=d.metalness,d.metalnessMap)p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=d.roughness,d.roughnessMap)p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform);if(d.envMap)p.envMapIntensity.value=d.envMapIntensity}function m(p,d,E){if(p.ior.value=d.ior,d.sheen>0){if(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap)p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform);if(d.sheenRoughnessMap)p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(d.clearcoat>0){if(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap)p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform);if(d.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(d.clearcoatNormalMap){if(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===He)p.clearcoatNormalScale.value.negate()}}if(d.dispersion>0)p.dispersion.value=d.dispersion;if(d.retroreflectivity>0)p.retroreflectivity.value=d.retroreflectivity;if(d.iridescence>0){if(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap)p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform);if(d.iridescenceThicknessMap)p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(d.transmission>0){if(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap)p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=d.thickness,d.thicknessMap)p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)}if(d.anisotropy>0){if(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap)p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap)p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform);if(d.specularIntensityMap)p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform)}function g(p,d){if(d.matcap)p.matcap.value=d.matcap}function M(p,d){let E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $0(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){let R=T.program;i.uniformBlockBinding(_,R)}function c(_,T){let R=s[_.id];if(R===void 0)p(_),R=u(_),s[_.id]=R,_.addEventListener("dispose",E);let A=T.program;i.updateUBOMapping(_,A);let x=e.render.frame;if(r[_.id]!==x)h(_),r[_.id]=x}function u(_){let T=f();_.__bindingPointIndex=T;let R=t.createBuffer(),{__size:A,usage:x}=_;return t.bindBuffer(t.UNIFORM_BUFFER,R),t.bufferData(t.UNIFORM_BUFFER,A,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,R),R}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let T=s[_.id],{uniforms:R,__cache:A}=_;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let x=0,S=R.length;x<S;x++){let O=R[x];if(Array.isArray(O))for(let D=0,F=O.length;D<F;D++)m(O[D],x,D,A);else m(O,x,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,T,R,A){if(M(_,T,R,A)===!0){let{__offset:x,value:S}=_;if(Array.isArray(S)){let O=0;for(let D=0;D<S.length;D++){let F=S[D],Z=d(F);if(g(F,_.__data,O),typeof F!=="number"&&typeof F!=="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F))O+=Z.storage/Float32Array.BYTES_PER_ELEMENT}}else g(S,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,_.__data)}}function g(_,T,R){if(typeof _==="number"||typeof _==="boolean")T[0]=_;else if(_.isMatrix3)T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0;else if(ArrayBuffer.isView(_))T.set(new _.constructor(_.buffer,_.byteOffset,T.length));else _.toArray(T,R)}function M(_,T,R,A){let x=_.value,S=T+"_"+R;if(A[S]===void 0){if(typeof x==="number"||typeof x==="boolean")A[S]=x;else if(ArrayBuffer.isView(x))A[S]=x.slice();else A[S]=x.clone();return!0}else{let O=A[S];if(typeof x==="number"||typeof x==="boolean"){if(O!==x)return A[S]=x,!0}else if(ArrayBuffer.isView(x))return!0;else if(O.equals(x)===!1)return O.copy(x),!0}return!1}function p(_){let T=_.uniforms,R=0,A=16;for(let S=0,O=T.length;S<O;S++){let D=Array.isArray(T[S])?T[S]:[T[S]];for(let F=0,Z=D.length;F<Z;F++){let I=D[F],H=Array.isArray(I.value)?I.value:[I.value];for(let J=0,z=H.length;J<z;J++){let at=H[J],W=d(at),Q=R%A,it=Q%W.boundary,Dt=Q+it;if(R+=it,Dt!==0&&A-Dt<W.storage)R+=A-Dt;I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=R,R+=W.storage}}}let x=R%A;if(x>0)R+=A-x;return _.__size=R,_.__cache={},this}function d(_){let T={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")T.boundary=4,T.storage=4;else if(_.isVector2)T.boundary=8,T.storage=8;else if(_.isVector3||_.isColor)T.boundary=16,T.storage=12;else if(_.isVector4)T.boundary=16,T.storage=16;else if(_.isMatrix3)T.boundary=48,T.storage=48;else if(_.isMatrix4)T.boundary=64,T.storage=64;else if(_.isTexture)Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(_))T.boundary=16,T.storage=_.byteLength;else Bt("WebGLRenderer: Unsupported uniform value type.",_);return T}function E(_){let T=_.target;T.removeEventListener("dispose",E);let R=a.indexOf(T.__bindingPointIndex);a.splice(R,1),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(let _ in s)t.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var K0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yn=null;function Q0(){if(yn===null)yn=new To(K0,16,16,hi,mn),yn.name="DFG_LUT",yn.minFilter=ze,yn.magFilter=ze,yn.wrapS=hr,yn.wrapT=hr,yn.generateMipmaps=!1,yn.needsUpdate=!0;return yn}class ll{constructor(t={}){let{canvas:e=Jc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=on}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let g=h,M=new Set([Ba,Oa,Fa]),p=new Set([on,Zn,_s,Wi,Na,Ua]),d=new Uint32Array(4),E=new Int32Array(4),w=new C,_=null,T=null,R=[],A=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,O=!1,D=null,F=null,Z=null,I=null;this._outputColorSpace=kc;let H=0,J=0,z=null,at=-1,W=null,Q=new Me,it=new Me,Dt=null,Nt=new zt(0),le=0,{width:Zt,height:q}=e,lt=1,rt=null,Ut=null,Gt=new Me(0,0,Zt,q),wt=new Me(0,0,Zt,q),ce=!1,tt=new Ss,st=!1,ot=!1,ct=new pe,vt=new C,It=new Me,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Xt(){return z===null?lt:1}let P=n;function ue(v,N){return e.getContext(v,N)}let Kt,jt,b,y,L,k,et,ht,ft,X,K,St,Lt,gt,ut,Ot,Ht,re,U,pt,Y,mt,Et;try{let v={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${jl}`);if(e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",ae,!1),P===null){if(P=ue("webgl2",v),P===null)if(ue("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(v){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),kt("WebGLRenderer: "+v.message),v}function nt(){if(Kt=new rm(P),Kt.init(),Y=new X0(P,Kt),jt=new Jp(P,Kt,t,Y),b=new V0(P,Kt),jt.reversedDepthBuffer&&f)b.buffers.depth.setReversed(!0);F=P.createFramebuffer(),Z=P.createFramebuffer(),I=P.createFramebuffer(),y=new lm(P),L=new C0,k=new W0(P,Kt,b,L,jt,Y,y),et=new sm(S),ht=new cd(P),mt=new Yp(P,ht),ft=new am(P,ht,y,mt),X=new hm(P,ft,ht,mt,y),re=new cm(P,jt,k),ut=new $p(L),K=new R0(S,et,Kt,jt,mt,ut),St=new J0(S,L),Lt=new I0,gt=new O0(Kt),Ht=new qp(S,et,b,X,m,o),Ot=new k0(S,X,jt),Et=new $0(P,y,jt,b),U=new Zp(P,Kt,y),pt=new om(P,Kt,y),y.programs=K.programs,S.capabilities=jt,S.extensions=Kt,S.properties=L,S.renderLists=Lt,S.shadowMap=Ot,S.state=b,S.info=y}if(g!==on)x=new dm(g,e.width,e.height,a,i,s);let xt=new Wh(S,P);this.xr=xt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let v=Kt.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=Kt.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(v){if(v===void 0)return;lt=v,this.setSize(Zt,q,!1)},this.getSize=function(v){return v.set(Zt,q)},this.setSize=function(v,N,V=!0){if(xt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Zt=v,q=N,e.width=Math.floor(v*lt),e.height=Math.floor(N*lt),V===!0)e.style.width=v+"px",e.style.height=N+"px";if(x!==null)x.setSize(e.width,e.height);this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(Zt*lt,q*lt).floor()},this.setDrawingBufferSize=function(v,N,V){Zt=v,q=N,lt=V,e.width=Math.floor(v*V),e.height=Math.floor(N*V),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(g===on){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Q)},this.getViewport=function(v){return v.copy(Gt)},this.setViewport=function(v,N,V,B){if(v.isVector4)Gt.set(v.x,v.y,v.z,v.w);else Gt.set(v,N,V,B);b.viewport(Q.copy(Gt).multiplyScalar(lt).round())},this.getScissor=function(v){return v.copy(wt)},this.setScissor=function(v,N,V,B){if(v.isVector4)wt.set(v.x,v.y,v.z,v.w);else wt.set(v,N,V,B);b.scissor(it.copy(wt).multiplyScalar(lt).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(v){b.setScissorTest(ce=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){Ut=v},this.getClearColor=function(v){return v.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,V=!0){let B=0;if(v){let G=!1;if(z!==null){let Mt=z.texture.format;G=M.has(Mt)}if(G){let Mt=z.texture.type,Tt=p.has(Mt),yt=Ht.getClearColor(),At=Ht.getClearAlpha(),{r:Pt,g:Jt,b:te}=yt;if(Tt)d[0]=Pt,d[1]=Jt,d[2]=te,d[3]=At,P.clearBufferuiv(P.COLOR,0,d);else E[0]=Pt,E[1]=Jt,E[2]=te,E[3]=At,P.clearBufferiv(P.COLOR,0,E)}else B|=P.COLOR_BUFFER_BIT}if(N)B|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(V)B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(B!==0)P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),D=v},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),Ht.dispose(),Lt.dispose(),gt.dispose(),L.dispose(),et.dispose(),X.dispose(),mt.dispose(),Et.dispose(),K.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",fl),xt.removeEventListener("sessionend",pl),jn.stop()};function qt(v){v.preventDefault(),Mo("WebGLRenderer: Context Lost."),O=!0}function _e(){Mo("WebGLRenderer: Context Restored."),O=!1;let v=y.autoReset,N=Ot.enabled,V=Ot.autoUpdate,B=Ot.needsUpdate,G=Ot.type;nt(),y.autoReset=v,Ot.enabled=N,Ot.autoUpdate=V,Ot.needsUpdate=B,Ot.type=G}function ae(v){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function cn(v){let N=v.target;N.removeEventListener("dispose",cn),Sn(N)}function Sn(v){Jh(v),L.remove(v)}function Jh(v){let N=L.get(v).programs;if(N!==void 0){if(N.forEach(function(V){K.releaseProgram(V)}),v.isShaderMaterial)K.releaseShaderCache(v)}}this.renderBufferDirect=function(v,N,V,B,G,Mt){if(N===null)N=Ft;let Tt=G.isMesh&&G.matrixWorld.determinantAffine()<0,yt=Qh(v,N,V,B,G);b.setMaterial(B,Tt);let At=V.index,Pt=1;if(B.wireframe===!0){if(At=ft.getWireframeAttribute(V),At===void 0)return;Pt=2}let Jt=V.drawRange,te=V.attributes.position,Rt=Jt.start*Pt,oe=(Jt.start+Jt.count)*Pt;if(Mt!==null)Rt=Math.max(Rt,Mt.start*Pt),oe=Math.min(oe,(Mt.start+Mt.count)*Pt);if(At!==null)Rt=Math.max(Rt,0),oe=Math.min(oe,At.count);else if(te!==void 0&&te!==null)Rt=Math.max(Rt,0),oe=Math.min(oe,te.count);let Te=oe-Rt;if(Te<0||Te===1/0)return;mt.setup(G,B,yt,V,At);let ve,fe=U;if(At!==null)ve=ht.get(At),fe=pt,fe.setIndex(ve);if(G.isMesh)if(B.wireframe===!0)b.setLineWidth(B.wireframeLinewidth*Xt()),fe.setMode(P.LINES);else fe.setMode(P.TRIANGLES);else if(G.isLine){let De=B.linewidth;if(De===void 0)De=1;if(b.setLineWidth(De*Xt()),G.isLineSegments)fe.setMode(P.LINES);else if(G.isLineLoop)fe.setMode(P.LINE_LOOP);else fe.setMode(P.LINE_STRIP)}else if(G.isPoints)fe.setMode(P.POINTS);else if(G.isSprite)fe.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(!Kt.get("WEBGL_multi_draw")){let{_multiDrawStarts:De,_multiDrawCounts:bt,_multiDrawCount:Be}=G,se=At?ht.get(At).bytesPerElement:1,Ze=L.get(B).currentProgram.getUniforms();for(let hn=0;hn<Be;hn++)Ze.setValue(P,"_gl_DrawID",hn),fe.render(De[hn]/se,bt[hn])}else fe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)fe.renderInstances(Rt,Te,G.count);else if(V.isInstancedBufferGeometry){let De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,bt=Math.min(V.instanceCount,De);fe.renderInstances(Rt,Te,bt)}else fe.render(Rt,Te)};function dl(v,N,V,B){if(D!==null&&v.isNodeMaterial)D.setObject(B,v);if(st===!0)ut.setState(v,V,!1);if(v.transparent===!0&&v.side===Re&&v.forceSinglePass===!1)v.side=He,v.needsUpdate=!0,Ls(v,N,B),v.side=Hi,v.needsUpdate=!0,Ls(v,N,B),v.side=Re;else Ls(v,N,B)}this.compile=function(v,N,V=null){if(V===null)V=v;if(D!==null)D.renderStart(v,N,V);if(T=gt.get(V),T.init(N),A.push(T),V.traverseVisible(function(G){if(G.isLight&&G.layers.test(N.layers)){if(T.pushLight(G),G.castShadow)T.pushShadow(G)}}),v!==V)v.traverseVisible(function(G){if(G.isLight&&G.layers.test(N.layers)){if(T.pushLight(G),G.castShadow)T.pushShadow(G)}});if(T.setupLights(),D!==null)D.updateLights(T.state.lightsArray);if(ot=this.localClippingEnabled,st=ut.init(this.clippingPlanes,ot),st===!0)ut.setGlobalState(this.clippingPlanes,N);if(D!==null)Ot.render(T.state.shadowsArray,V,N);let B=new Set;if(v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){let yt=Mt[Tt];dl(yt,V,N,G),B.add(yt)}else dl(Mt,V,N,G),B.add(Mt)}),T=A.pop(),D!==null)D.renderEnd();return B},this.compileAsync=function(v,N,V=null){let B=this.compile(v,N,V);return new Promise((G)=>{function Mt(){if(B.forEach(function(Tt){let At=L.get(Tt).currentProgram;if(At===void 0||At.isReady())B.delete(Tt)}),B.size===0){G(v);return}setTimeout(Mt,10)}if(Kt.get("KHR_parallel_shader_compile")!==null)Mt();else setTimeout(Mt,10)})};let Xr=null;function $h(v){if(Xr)Xr(v)}function fl(){jn.stop()}function pl(){jn.start()}let jn=new Lh;if(jn.setAnimationLoop($h),typeof self<"u")jn.setContext(self);this.setAnimationLoop=function(v){Xr=v,xt.setAnimationLoop(v),v===null?jn.stop():jn.start()},xt.addEventListener("sessionstart",fl),xt.addEventListener("sessionend",pl),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(D!==null)D.renderStart(v,N);let V=xt.enabled===!0&&xt.isPresenting===!0,B=x!==null&&(z===null||V)&&x.begin(S,z);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(N.parent===null&&N.matrixWorldAutoUpdate===!0)N.updateMatrixWorld();if(xt.enabled===!0&&xt.isPresenting===!0&&(x===null||x.isCompositing()===!1)){if(xt.cameraAutoUpdate===!0)xt.updateCamera(N);N=xt.getCamera()}if(v.isScene===!0)v.onBeforeRender(S,v,N,z);if(T=gt.get(v,A.length),T.init(N),T.state.textureUnits=k.getTextureUnits(),A.push(T),ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),tt.setFromProjectionMatrix(ct,vo,N.reversedDepth),ot=this.localClippingEnabled,st=ut.init(this.clippingPlanes,ot),_=Lt.get(v,R.length),_.init(),R.push(_),xt.enabled===!0&&xt.isPresenting===!0){let Tt=S.xr.getDepthSensingMesh();if(Tt!==null)qr(Tt,N,-1/0,S.sortObjects)}if(qr(v,N,0,S.sortObjects),_.finish(),D!==null)D.updateLights(T.state.lightsArray);if(S.sortObjects===!0)_.sort(rt,Ut);if(Wt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Wt)Ht.addToRenderList(_,v);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(st===!0)ut.beginShadows();let G=T.state.shadowsArray;if(Ot.render(G,v,N),st===!0)ut.endShadows();if((B&&x.hasRenderPass())===!1){let Tt=_.opaque,yt=_.transmissive;if(T.setupLights(),N.isArrayCamera){let At=N.cameras;if(yt.length>0)for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){let te=At[Pt];gl(Tt,yt,v,te)}if(Wt)Ht.render(v);for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){let te=At[Pt];ml(_,v,te,te.viewport)}}else{if(yt.length>0)gl(Tt,yt,v,N);if(Wt)Ht.render(v);ml(_,v,N)}}if(z!==null&&J===0)k.updateMultisampleRenderTarget(z),k.updateRenderTargetMipmap(z);if(B)x.end(S);if(v.isScene===!0)v.onAfterRender(S,v,N);if(mt.resetDefaultState(),at=-1,W=null,A.pop(),A.length>0){if(T=A[A.length-1],k.setTextureUnits(T.state.textureUnits),st===!0)ut.setGlobalState(S.clippingPlanes,T.state.camera)}else T=null;if(R.pop(),R.length>0)_=R[R.length-1];else _=null;if(D!==null)D.renderEnd()};function qr(v,N,V,B){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(N)}else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight){if(T.pushLight(v),v.castShadow)T.pushShadow(v)}else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(tt)){if(B)It.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ct);let Tt=X.update(v),yt=v.material;if(yt.visible)_.push(v,Tt,yt,V,It.z,null,N)}}else if(v.isMesh||v.isLine||v.isPoints){if(!v.frustumCulled||v.intersectsFrustum(tt)){let Tt=X.update(v),yt=v.material;if(B){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();It.copy(v.boundingSphere.center)}else{if(Tt.boundingSphere===null)Tt.computeBoundingSphere();It.copy(Tt.boundingSphere.center)}It.applyMatrix4(v.matrixWorld).applyMatrix4(ct)}if(Array.isArray(yt)){let At=Tt.groups;for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){let te=At[Pt],Rt=yt[te.materialIndex];if(Rt&&Rt.visible)_.push(v,Tt,Rt,V,It.z,te,N)}}else if(yt.visible)_.push(v,Tt,yt,V,It.z,null,N)}}}let Mt=v.children;for(let Tt=0,yt=Mt.length;Tt<yt;Tt++)qr(Mt[Tt],N,V,B)}function ml(v,N,V,B){let{opaque:G,transmissive:Mt,transparent:Tt}=v;if(T.setupLightsView(V),st===!0)ut.setGlobalState(S.clippingPlanes,V);if(B)b.viewport(Q.copy(B));if(G.length>0)Is(G,N,V);if(Mt.length>0)Is(Mt,N,V);if(Tt.length>0)Is(Tt,N,V);b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function gl(v,N,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Rt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new Ye(1,1,{generateMipmaps:!0,type:Rt?mn:on,minFilter:oi,samples:Math.max(4,jt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let Mt=T.state.transmissionRenderTarget[B.id],Tt=B.viewport||Q;Mt.setSize(Tt.z*S.transmissionResolutionScale,Tt.w*S.transmissionResolutionScale);let yt=S.getRenderTarget(),At=S.getActiveCubeFace(),Pt=S.getActiveMipmapLevel();if(S.setRenderTarget(Mt),S.getClearColor(Nt),le=S.getClearAlpha(),le<1)S.setClearColor(16777215,0.5);if(S.clear(),Wt)Ht.render(V);let Jt=S.toneMapping;S.toneMapping=rn;let te=B.viewport;if(B.viewport!==void 0)B.viewport=void 0;if(T.setupLightsView(B),st===!0)ut.setGlobalState(S.clippingPlanes,B);if(Is(v,V,B),k.updateMultisampleRenderTarget(Mt),k.updateRenderTargetMipmap(Mt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let oe=0,Te=N.length;oe<Te;oe++){let ve=N[oe],{object:fe,geometry:De,material:bt,group:Be}=ve;if(bt.side===Re&&fe.layers.test(B.layers)){let se=bt.side;bt.side=He,bt.needsUpdate=!0,_l(fe,V,B,De,bt,Be),bt.side=se,bt.needsUpdate=!0,Rt=!0}}if(Rt===!0)k.updateMultisampleRenderTarget(Mt),k.updateRenderTargetMipmap(Mt)}if(S.setRenderTarget(yt,At,Pt),S.setClearColor(Nt,le),te!==void 0)B.viewport=te;S.toneMapping=Jt}function Is(v,N,V){let B=N.isScene===!0?N.overrideMaterial:null;for(let G=0,Mt=v.length;G<Mt;G++){let Tt=v[G],{object:yt,geometry:At,group:Pt}=Tt,Jt=Tt.material;if(Jt.allowOverride===!0&&B!==null)Jt=B;if(yt.layers.test(V.layers))_l(yt,N,V,At,Jt,Pt)}}function _l(v,N,V,B,G,Mt){if(D!==null&&G.isNodeMaterial)D.setObject(v,G);if(v.onBeforeRender(S,N,V,B,G,Mt),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(S,N,V,B,v,Mt),G.transparent===!0&&G.side===Re&&G.forceSinglePass===!1)G.side=He,G.needsUpdate=!0,S.renderBufferDirect(V,N,B,G,v,Mt),G.side=Hi,G.needsUpdate=!0,S.renderBufferDirect(V,N,B,G,v,Mt),G.side=Re;else S.renderBufferDirect(V,N,B,G,v,Mt);v.onAfterRender(S,N,V,B,G,Mt)}function Ls(v,N,V){if(N.isScene!==!0)N=Ft;let B=L.get(v),G=T.state.lights,Mt=T.state.shadowsArray,Tt=G.state.version,yt=K.getParameters(v,G.state,Mt,N,V,T.state.lightProbeGridArray),At=K.getProgramCacheKey(yt),Pt=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let Jt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(B.envMap=et.get(v.envMap||B.environment,Jt),B.envMapRotation=B.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Pt===void 0)v.addEventListener("dispose",cn),Pt=new Map,B.programs=Pt;let te=Pt.get(At);if(te!==void 0){if(B.currentProgram===te&&B.lightsStateVersion===Tt)return yl(v,yt),te}else{if(yt.uniforms=K.getUniforms(v),D!==null&&v.isNodeMaterial)D.build(v,V,yt);v.onBeforeCompile(yt,S),te=K.acquireProgram(yt,At),Pt.set(At,te),B.uniforms=yt.uniforms}let Rt=B.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)Rt.clippingPlanes=ut.uniform;if(yl(v,yt),B.needsLights=tu(v),B.lightsStateVersion=Tt,B.needsLights)Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.sunLights.value=G.state.sun,Rt.sunLightShadows.value=G.state.sunShadow,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.sunShadowMatrix.value=G.state.sunShadowMatrix,Rt.sunShadowCascade.value=G.state.sunShadowCascade,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix;return B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=te,B.uniformsList=null,te}function xl(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=Cs.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function yl(v,N){let V=L.get(v);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Kh(v,N){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;w.setFromMatrixPosition(N.matrixWorld);for(let V=0,B=v.length;V<B;V++){let G=v[V];if(G.texture!==null&&G.boundingBox.containsPoint(w))return G}return null}function Qh(v,N,V,B,G){if(N.isScene!==!0)N=Ft;k.resetTextureUnits();let Mt=N.fog,Tt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,yt=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ne.workingColorSpace,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Pt=et.get(B.envMap||Tt,At),Jt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,te=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Rt=!!V.morphAttributes.position,oe=!!V.morphAttributes.normal,Te=!!V.morphAttributes.color,ve=rn;if(B.toneMapped){if(z===null||z.isXRRenderTarget===!0)ve=S.toneMapping}let fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,De=fe!==void 0?fe.length:0,bt=L.get(B),Be=T.state.lights;if(st===!0){if(ot===!0||v!==W){let xe=v===W&&B.id===at;ut.setState(B,v,xe)}}let se=!1;if(B.version===bt.__version){if(bt.needsLights&&bt.lightsStateVersion!==Be.state.version)se=!0;else if(bt.outputColorSpace!==yt)se=!0;else if(G.isBatchedMesh&&bt.batching===!1)se=!0;else if(!G.isBatchedMesh&&bt.batching===!0)se=!0;else if(G.isBatchedMesh&&bt.batchingColor===!0&&G._colorsTexture===null)se=!0;else if(G.isBatchedMesh&&bt.batchingColor===!1&&G._colorsTexture!==null)se=!0;else if(G.isInstancedMesh&&bt.instancing===!1)se=!0;else if(!G.isInstancedMesh&&bt.instancing===!0)se=!0;else if(G.isSkinnedMesh&&bt.skinning===!1)se=!0;else if(!G.isSkinnedMesh&&bt.skinning===!0)se=!0;else if(G.isInstancedMesh&&bt.instancingColor===!0&&G.instanceColor===null)se=!0;else if(G.isInstancedMesh&&bt.instancingColor===!1&&G.instanceColor!==null)se=!0;else if(G.isInstancedMesh&&bt.instancingMorph===!0&&G.morphTexture===null)se=!0;else if(G.isInstancedMesh&&bt.instancingMorph===!1&&G.morphTexture!==null)se=!0;else if(bt.envMap!==Pt)se=!0;else if(B.fog===!0&&bt.fog!==Mt)se=!0;else if(bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==ut.numPlanes||bt.numIntersection!==ut.numIntersection))se=!0;else if(bt.vertexAlphas!==Jt)se=!0;else if(bt.vertexTangents!==te)se=!0;else if(bt.morphTargets!==Rt)se=!0;else if(bt.morphNormals!==oe)se=!0;else if(bt.morphColors!==Te)se=!0;else if(bt.toneMapping!==ve)se=!0;else if(bt.morphTargetsCount!==De)se=!0;else if(!!bt.lightProbeGrid!==T.state.lightProbeGridArray.length>0)se=!0}else se=!0,bt.__version=B.version;let Ze=bt.currentProgram;if(se===!0){if(Ze=Ls(B,N,G),D&&B.isNodeMaterial)D.onUpdateProgram(B,Ze,bt)}let hn=!1,Bn=!1,Mi=!1,de=Ze.getUniforms(),be=bt.uniforms;if(b.useProgram(Ze.program))hn=!0,Bn=!0,Mi=!0;if(B.id!==at)at=B.id,Bn=!0;if(bt.needsLights){let xe=Kh(T.state.lightProbeGridArray,G);if(bt.lightProbeGrid!==xe)bt.lightProbeGrid=xe,Bn=!0}if(hn||W!==v){if(b.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();de.setValue(P,"projectionMatrix",v.projectionMatrix),de.setValue(P,"viewMatrix",v.matrixWorldInverse);let Hn=de.map.cameraPosition;if(Hn!==void 0)Hn.setValue(P,vt.setFromMatrixPosition(v.matrixWorld));if(jt.logarithmicDepthBuffer)de.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)de.setValue(P,"isOrthographic",v.isOrthographicCamera===!0);if(W!==v)W=v,Bn=!0,Mi=!0}if(bt.needsLights){if(Be.state.sunShadowMap.length>0)de.setValue(P,"sunShadowMap",Be.state.sunShadowMap,k);if(Be.state.directionalShadowMap.length>0)de.setValue(P,"directionalShadowMap",Be.state.directionalShadowMap,k);if(Be.state.spotShadowMap.length>0)de.setValue(P,"spotShadowMap",Be.state.spotShadowMap,k);if(Be.state.pointShadowMap.length>0)de.setValue(P,"pointShadowMap",Be.state.pointShadowMap,k)}if(G.isSkinnedMesh){de.setOptional(P,G,"bindMatrix"),de.setOptional(P,G,"bindMatrixInverse");let xe=G.skeleton;if(xe){if(xe.boneTexture===null)xe.computeBoneTexture();de.setValue(P,"boneTexture",xe.boneTexture,k)}}if(G.isBatchedMesh){if(de.setOptional(P,G,"batchingTexture"),de.setValue(P,"batchingTexture",G._matricesTexture,k),de.setOptional(P,G,"batchingIdTexture"),de.setValue(P,"batchingIdTexture",G._indirectTexture,k),de.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null)de.setValue(P,"batchingColorTexture",G._colorsTexture,k)}let Gn=V.morphAttributes;if(Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)re.update(G,V,Ze);if(Bn||bt.receiveShadow!==G.receiveShadow)bt.receiveShadow=G.receiveShadow,de.setValue(P,"receiveShadow",G.receiveShadow);if((B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null)be.envMapIntensity.value=N.environmentIntensity;if(be.dfgLUT!==void 0)be.dfgLUT.value=Q0();if(Bn){if(de.setValue(P,"toneMappingExposure",S.toneMappingExposure),bt.needsLights)jh(be,Mi);if(Mt&&B.fog===!0)St.refreshFogUniforms(be,Mt);if(St.refreshMaterialUniforms(be,B,lt,q,T.state.transmissionRenderTarget[v.id]),bt.needsLights&&bt.lightProbeGrid){let xe=bt.lightProbeGrid;be.probesSH.value=xe.texture,be.probesMin.value.copy(xe.boundingBox.min),be.probesMax.value.copy(xe.boundingBox.max),be.probesResolution.value.copy(xe.resolution)}Cs.upload(P,xl(bt),be,k)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0)Cs.upload(P,xl(bt),be,k),B.uniformsNeedUpdate=!1;if(B.isSpriteMaterial)de.setValue(P,"center",G.center);if(de.setValue(P,"modelViewMatrix",G.modelViewMatrix),de.setValue(P,"normalMatrix",G.normalMatrix),de.setValue(P,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){let xe=B.uniformsGroups;for(let Hn=0,Si=xe.length;Hn<Si;Hn++){let Ml=xe[Hn];Et.update(Ml,Ze),Et.bind(Ml,Ze)}}return Ze}function jh(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.sunLights.needsUpdate=N,v.sunLightShadows.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function tu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(v,N,V){let B=L.get(v);if(B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1)B.__useRenderToTexture=!1;L.get(v.texture).__webglTexture=N,L.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let V=L.get(v);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,V=0){z=v,H=N,J=V;let B=null,G=!1,Mt=!1;if(v){let yt=L.get(v);if(yt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(P.FRAMEBUFFER,yt.__webglFramebuffer),Q.copy(v.viewport),it.copy(v.scissor),Dt=v.scissorTest,b.viewport(Q),b.scissor(it),b.setScissorTest(Dt),at=-1;return}else if(yt.__webglFramebuffer===void 0)k.setupRenderTarget(v);else if(yt.__hasExternalTextures)k.rebindTextures(v,L.get(v.texture).__webglTexture,L.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Jt=v.depthTexture;if(yt.__boundDepthTexture!==Jt){if(Jt!==null&&L.has(Jt)&&(v.width!==Jt.image.width||v.height!==Jt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(v)}}let At=v.texture;if(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)Mt=!0;let Pt=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Pt[N]))B=Pt[N][V];else B=Pt[N];G=!0}else if(v.samples>0&&k.useMultisampledRTT(v)===!1)B=L.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Pt))B=Pt[V];else B=Pt;Q.copy(v.viewport),it.copy(v.scissor),Dt=v.scissorTest}else Q.copy(Gt).multiplyScalar(lt).floor(),it.copy(wt).multiplyScalar(lt).floor(),Dt=ce;if(V!==0)B=F;if(b.bindFramebuffer(P.FRAMEBUFFER,B))b.drawBuffers(v,B);if(b.viewport(Q),b.scissor(it),b.setScissorTest(Dt),G){let yt=L.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,V)}else if(Mt){let yt=N;for(let At=0;At<v.textures.length;At++){let Pt=L.get(v.textures[At]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+At,Pt.__webglTexture,V,yt)}}else if(v!==null&&V!==0){let yt=L.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yt.__webglTexture,V)}at=-1};function vl(v){let N=L.get(v);if(N.__readFormat!==v.format||N.__readType!==v.type)N.__readFormat=v.format,N.__readType=v.type,N.__formatReadable=jt.textureFormatReadable(v.format),N.__typeReadable=jt.textureTypeReadable(v.type);return N}if(this.readRenderTargetPixels=function(v,N,V,B,G,Mt,Tt,yt=0){if(!(v&&v.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Tt!==void 0)At=At[Tt];if(At){b.bindFramebuffer(P.FRAMEBUFFER,At);try{let Pt=v.textures[yt],{format:Jt,type:te}=Pt;if(v.textures.length>1)P.readBuffer(P.COLOR_ATTACHMENT0+yt);let Rt=vl(Pt);if(Rt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(N>=0&&N<=v.width-B&&(V>=0&&V<=v.height-G))P.readPixels(N,V,B,G,Y.convert(Jt),Y.convert(te),Mt)}finally{let Pt=z!==null?L.get(z).__webglFramebuffer:null;b.bindFramebuffer(P.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(v,N,V,B,G,Mt,Tt,yt=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Tt!==void 0)At=At[Tt];if(At)if(N>=0&&N<=v.width-B&&(V>=0&&V<=v.height-G)){b.bindFramebuffer(P.FRAMEBUFFER,At);let Pt=v.textures[yt],{format:Jt,type:te}=Pt;if(v.textures.length>1)P.readBuffer(P.COLOR_ATTACHMENT0+yt);let Rt=vl(Pt);if(Rt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,oe),P.bufferData(P.PIXEL_PACK_BUFFER,Mt.byteLength,P.STREAM_READ),P.readPixels(N,V,B,G,Y.convert(Jt),Y.convert(te),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Te=z!==null?L.get(z).__webglFramebuffer:null;b.bindFramebuffer(P.FRAMEBUFFER,Te);let ve=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Kc(P,ve,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,oe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Mt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(oe),P.deleteSync(ve),Mt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,V=0){let B=Math.pow(2,-V),G=Math.floor(v.image.width*B),Mt=Math.floor(v.image.height*B),Tt=N!==null?N.x:0,yt=N!==null?N.y:0;k.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,Tt,yt,G,Mt),b.unbindTexture()},this.copyTextureToTexture=function(v,N,V=null,B=null,G=0,Mt=0){let Tt,yt,At,Pt,Jt,te,Rt,oe,Te,ve=v.isCompressedTexture?v.mipmaps[Mt]:v.image;if(V!==null)Tt=V.max.x-V.min.x,yt=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,Jt=V.min.y,te=V.isBox3?V.min.z:0;else{let be=Math.pow(2,-G);if(Tt=Math.floor(ve.width*be),yt=Math.floor(ve.height*be),v.isDataArrayTexture)At=ve.depth;else if(v.isData3DTexture)At=Math.floor(ve.depth*be);else At=1;Pt=0,Jt=0,te=0}if(B!==null)Rt=B.x,oe=B.y,Te=B.z;else Rt=0,oe=0,Te=0;let fe=Y.convert(N.format),De=Y.convert(N.type),bt;if(N.isData3DTexture)k.setTexture3D(N,0),bt=P.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)k.setTexture2DArray(N,0),bt=P.TEXTURE_2D_ARRAY;else k.setTexture2D(N,0),bt=P.TEXTURE_2D;b.activeTexture(P.TEXTURE0),b.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let Be=b.getParameter(P.UNPACK_ROW_LENGTH),se=b.getParameter(P.UNPACK_IMAGE_HEIGHT),Ze=b.getParameter(P.UNPACK_SKIP_PIXELS),hn=b.getParameter(P.UNPACK_SKIP_ROWS),Bn=b.getParameter(P.UNPACK_SKIP_IMAGES);b.pixelStorei(P.UNPACK_ROW_LENGTH,ve.width),b.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ve.height),b.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),b.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),b.pixelStorei(P.UNPACK_SKIP_IMAGES,te);let Mi=v.isDataArrayTexture||v.isData3DTexture,de=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let be=L.get(v),Gn=L.get(N),xe=L.get(be.__renderTarget),Hn=L.get(Gn.__renderTarget);b.bindFramebuffer(P.READ_FRAMEBUFFER,xe.__webglFramebuffer),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Si=0;Si<At;Si++){if(Mi)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,L.get(v).__webglTexture,G,te+Si),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,L.get(N).__webglTexture,Mt,Te+Si);P.blitFramebuffer(Pt,Jt,Tt,yt,Rt,oe,Tt,yt,P.DEPTH_BUFFER_BIT,P.NEAREST)}b.bindFramebuffer(P.READ_FRAMEBUFFER,null),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||L.has(v)){let be=L.get(v),Gn=L.get(N);b.bindFramebuffer(P.READ_FRAMEBUFFER,Z),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,I);for(let xe=0;xe<At;xe++){if(Mi)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.__webglTexture,G,te+xe);else P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,be.__webglTexture,G);if(de)P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gn.__webglTexture,Mt,Te+xe);else P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gn.__webglTexture,Mt);if(G!==0)P.blitFramebuffer(Pt,Jt,Tt,yt,Rt,oe,Tt,yt,P.COLOR_BUFFER_BIT,P.NEAREST);else if(de)P.copyTexSubImage3D(bt,Mt,Rt,oe,Te+xe,Pt,Jt,Tt,yt);else P.copyTexSubImage2D(bt,Mt,Rt,oe,Pt,Jt,Tt,yt)}b.bindFramebuffer(P.READ_FRAMEBUFFER,null),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(de)if(v.isDataTexture||v.isData3DTexture)P.texSubImage3D(bt,Mt,Rt,oe,Te,Tt,yt,At,fe,De,ve.data);else if(N.isCompressedArrayTexture)P.compressedTexSubImage3D(bt,Mt,Rt,oe,Te,Tt,yt,At,fe,ve.data);else P.texSubImage3D(bt,Mt,Rt,oe,Te,Tt,yt,At,fe,De,ve);else if(v.isDataTexture)P.texSubImage2D(P.TEXTURE_2D,Mt,Rt,oe,Tt,yt,fe,De,ve.data);else if(v.isCompressedTexture)P.compressedTexSubImage2D(P.TEXTURE_2D,Mt,Rt,oe,ve.width,ve.height,fe,ve.data);else P.texSubImage2D(P.TEXTURE_2D,Mt,Rt,oe,Tt,yt,fe,De,ve);if(b.pixelStorei(P.UNPACK_ROW_LENGTH,Be),b.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se),b.pixelStorei(P.UNPACK_SKIP_PIXELS,Ze),b.pixelStorei(P.UNPACK_SKIP_ROWS,hn),b.pixelStorei(P.UNPACK_SKIP_IMAGES,Bn),Mt===0&&N.generateMipmaps)P.generateMipmap(bt);b.unbindTexture()},this.initRenderTarget=function(v){if(L.get(v).__webglFramebuffer===void 0)k.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)k.setTextureCube(v,0);else if(v.isData3DTexture)k.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)k.setTexture2DArray(v,0);else k.setTexture2D(v,0);b.unbindTexture()},this.resetState=function(){H=0,J=0,z=null,b.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Mn{static createAsphaltTexture(){let e=document.createElement("canvas");e.width=512,e.height=512;let n=e.getContext("2d");n.fillStyle="#22252a",n.fillRect(0,0,512,512);let i=n.getImageData(0,0,512,512),s=i.data;for(let a=0;a<s.length;a+=4){let o=(Math.random()-0.5)*40;s[a]=Math.max(0,Math.min(255,s[a]+o)),s[a+1]=Math.max(0,Math.min(255,s[a+1]+o)),s[a+2]=Math.max(0,Math.min(255,s[a+2]+o))}n.putImageData(i,0,0);for(let a=0;a<600;a++){let o=Math.random()*512,l=Math.random()*512,c=Math.random()*1.5+0.5,u=Math.floor(Math.random()*80+70);n.fillStyle=`rgb(${u},${u},${u})`,n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()}let r=new Nn(e);return r.wrapS=an,r.wrapT=an,r.repeat.set(16,2),r}static createBeakTexture(){let n=document.createElement("canvas");n.width=512,n.height=128;let i=n.getContext("2d"),s=i.createLinearGradient(0,0,512,0);s.addColorStop(0,"#ffb703"),s.addColorStop(0.35,"#fb8500"),s.addColorStop(0.75,"#e63946"),s.addColorStop(1,"#9e0012"),i.fillStyle=s,i.fillRect(0,0,512,128),i.strokeStyle="rgba(255, 255, 255, 0.15)",i.lineWidth=1;for(let a=0;a<128;a+=4)i.beginPath(),i.moveTo(0,a+(Math.random()-0.5)*2),i.lineTo(512,a+(Math.random()-0.5)*2),i.stroke();return new Nn(n)}static createLeatherTexture(){let e=document.createElement("canvas");e.width=256,e.height=256;let n=e.getContext("2d");n.fillStyle="#653a1e",n.fillRect(0,0,256,256);let i=n.getImageData(0,0,256,256),s=i.data;for(let a=0;a<s.length;a+=4){let o=(Math.random()-0.5)*35;s[a]=Math.max(0,Math.min(255,s[a]+o)),s[a+1]=Math.max(0,Math.min(255,s[a+1]+o*0.7)),s[a+2]=Math.max(0,Math.min(255,s[a+2]+o*0.4))}n.putImageData(i,0,0);let r=new Nn(e);return r.wrapS=an,r.wrapT=an,r.repeat.set(3,3),r}static createTireTreadTexture(){let n=document.createElement("canvas");n.width=512,n.height=64;let i=n.getContext("2d");i.fillStyle="#808080",i.fillRect(0,0,512,64),i.strokeStyle="#202020",i.lineWidth=3;let s=16;for(let a=0;a<512;a+=s)i.beginPath(),i.moveTo(a,32),i.lineTo(a+10,4),i.stroke(),i.beginPath(),i.moveTo(a,32),i.lineTo(a+10,60),i.stroke();i.fillStyle="#d0d0d0",i.fillRect(0,29.44,512,5.12);let r=new Nn(n);return r.wrapS=an,r.wrapT=an,r.repeat.set(12,1),r}static createWickerTexture(){let e=document.createElement("canvas");e.width=128,e.height=128;let n=e.getContext("2d");n.fillStyle="#caa472",n.fillRect(0,0,128,128),n.fillStyle="#a27b4b";let i=16;for(let r=0;r<128;r+=i*2)for(let a=0;a<128;a+=i*2)n.fillRect(r,a,i,i),n.fillRect(r+i,a+i,i,i);let s=new Nn(e);return s.wrapS=an,s.wrapT=an,s.repeat.set(4,4),s}static createEnvironmentMap(t="sunset"){let i=document.createElement("canvas");i.width=1024,i.height=512;let s=i.getContext("2d"),r=s.createLinearGradient(0,0,0,512);if(t==="day")r.addColorStop(0,"#1d8cf8"),r.addColorStop(0.45,"#90e0ef"),r.addColorStop(0.5,"#caf0f8"),r.addColorStop(0.55,"#0077b6"),r.addColorStop(1,"#023e8a");else if(t==="sunset")r.addColorStop(0,"#3a0ca3"),r.addColorStop(0.35,"#f72585"),r.addColorStop(0.48,"#ff9e00"),r.addColorStop(0.52,"#ff6000"),r.addColorStop(0.7,"#5f0f40"),r.addColorStop(1,"#0f051d");else if(t==="cyberpunk")r.addColorStop(0,"#10002b"),r.addColorStop(0.45,"#7209b7"),r.addColorStop(0.5,"#f72585"),r.addColorStop(0.55,"#4cc9f0"),r.addColorStop(1,"#03071e");else r.addColorStop(0,"#03071e"),r.addColorStop(0.45,"#0d1b2a"),r.addColorStop(0.5,"#1b263b"),r.addColorStop(0.55,"#415a77"),r.addColorStop(1,"#050a12");if(s.fillStyle=r,s.fillRect(0,0,1024,512),t==="sunset"||t==="day"){let c=s.createRadialGradient(460.8,245.76,4,460.8,245.76,80);c.addColorStop(0,"#ffffff"),c.addColorStop(0.2,"#ffe066"),c.addColorStop(0.6,"rgba(255, 120, 0, 0.4)"),c.addColorStop(1,"rgba(255, 120, 0, 0)"),s.fillStyle=c,s.fillRect(360.8,145.76,200,200)}let a=new Nn(i);return a.mapping=Vi,a}}class cl{constructor(){this.group=new Ct,this.wheelRadius=0.42,this.wheelBase=1.25,this.bbHeight=0.32,this.crankLength=0.19,this.pedalSpread=0.22,this.wheelAngle=0,this.crankAngle=0,this.steerAngle=0,this.speed=0,this.wheelieAngle=0,this.createMaterials(),this.buildBicycle()}createMaterials(){this.frameMat=new Kn({color:1357990,roughness:0.15,metalness:0.85,clearcoat:1,clearcoatRoughness:0.08,reflectivity:0.95,envMapIntensity:1.6}),this.chromeMat=new Yt({color:16777215,roughness:0.03,metalness:0.98,envMapIntensity:1.8}),this.leatherMat=new Yt({map:Mn.createLeatherTexture(),roughness:0.55,metalness:0.08}),this.rubberMat=new Yt({color:1842465,roughness:0.8,metalness:0.05,bumpMap:Mn.createTireTreadTexture(),bumpScale:0.02}),this.brassMat=new Yt({color:16096779,roughness:0.18,metalness:0.92,envMapIntensity:1.4}),this.wickerMat=new Yt({map:Mn.createWickerTexture(),roughness:0.85,metalness:0.02}),this.reflectorMat=new Yt({color:16096779,emissive:14251782,emissiveIntensity:0.35,roughness:0.2,metalness:0.6}),this.fishMat=new Yt({color:11066076,roughness:0.2,metalness:0.8}),this.glassMat=new Yt({color:16775904,roughness:0.1,metalness:0.1,emissive:16770688,emissiveIntensity:0.6,transparent:!0,opacity:0.9})}buildBicycle(){this.bikeBody=new Ct,this.group.add(this.bikeBody),this.bbPos=new C(0,this.bbHeight,0),this.rearAxlePos=new C(-this.wheelBase*0.52,this.wheelRadius,0),this.frontAxlePos=new C(this.wheelBase*0.48,this.wheelRadius,0),this.headTubeBottom=new C(this.wheelBase*0.4,this.wheelRadius+0.38,0),this.headTubeTop=new C(this.wheelBase*0.36,this.wheelRadius+0.56,0),this.seatClusterPos=new C(-this.wheelBase*0.14,this.bbHeight+0.46,0),this.buildFrame(),this.buildWheels(),this.buildForkAndHandlebars(),this.buildDrivetrain(),this.buildSaddle(),this.buildBasketAndFish(),this.buildFendersAndRack()}buildFrame(){let t=new Ct,e=(M,p,d,E=this.frameMat)=>{let w=new C().subVectors(p,M),_=w.length(),T=new ee(d,d,_,16),R=new j(T,E);return R.castShadow=!0,R.receiveShadow=!0,R.position.copy(M).addScaledVector(w,0.5),R.quaternion.setFromUnitVectors(new C(0,1,0),w.clone().normalize()),t.add(R),R},n=new ee(0.032,0.032,0.12,16),i=new j(n,this.chromeMat);i.rotation.x=Math.PI/2,i.position.copy(this.bbPos),t.add(i),e(this.bbPos,this.seatClusterPos,0.022),e(this.bbPos,this.headTubeBottom,0.024),e(this.headTubeBottom,this.headTubeTop,0.026),[-0.018,0.018].forEach((M)=>{let p=this.seatClusterPos.clone().add(new C(0,-0.04,M)),d=new C((this.seatClusterPos.x+this.headTubeTop.x)*0.5,this.headTubeTop.y-0.06,M*1.5),E=this.headTubeTop.clone().add(new C(0,-0.05,M)),w=new Fn(p,d,E),_=new ln(w,20,0.014,12,!1),T=new j(_,this.frameMat);T.castShadow=!0,t.add(T)}),[-0.055,0.055].forEach((M)=>{let p=this.bbPos.clone().add(new C(0,0,M*0.7)),d=this.rearAxlePos.clone().add(new C(0,0,M));e(p,d,0.015)}),[-0.055,0.055].forEach((M)=>{let p=this.seatClusterPos.clone().add(new C(0,-0.03,M*0.5)),d=this.rearAxlePos.clone().add(new C(0,0,M));e(p,d,0.014)}),this.bikeBody.add(t);let s=new Ct,r=new C().addVectors(this.bbPos,this.headTubeBottom).multiplyScalar(0.48);s.position.copy(r);let a=new C().subVectors(this.headTubeBottom,this.bbPos).normalize();s.quaternion.setFromUnitVectors(new C(0,1,0),a);let o=new ee(0.034,0.034,0.19,14),l=new Yt({color:15681391,roughness:0.3,metalness:0.1}),c=new j(o,l);c.position.set(0,0,0.045),s.add(c);let u=new ee(0.038,0.038,0.14,12,1,!0),f=new j(u,this.chromeMat);f.position.set(0,-0.02,0.045),s.add(f),this.bikeBody.add(s);let h=new Ke({color:1118481}),m=new $n([new C(-0.06,this.wheelRadius+0.58,-0.22),new C(this.seatClusterPos.x+0.1,this.seatClusterPos.y+0.02,-0.04),new C(this.rearAxlePos.x+0.08,this.rearAxlePos.y+0.14,-0.055)]),g=new j(new ln(m,20,0.0035,6,!1),h);this.bikeBody.add(g)}createSpokedWheel(){let t=new Ct,e=new xn(this.wheelRadius-0.035,0.035,18,48),n=new j(e,this.rubberMat);n.castShadow=!0,t.add(n);let i=new xn(this.wheelRadius-0.045,0.016,12,48),s=new j(i,this.chromeMat);t.add(s);let r=new ee(0.024,0.024,0.08,16),a=new j(r,this.chromeMat);a.rotation.x=Math.PI/2,t.add(a);let o=new ye(0.08,0.025,0.015),l=new j(o,this.reflectorMat);l.position.set(0,this.wheelRadius*0.52,0),t.add(l);let c=new ee(0.003,0.003,0.025,8),u=new j(c,this.brassMat);u.position.set(0,this.wheelRadius-0.045-0.012,0),t.add(u);let f=28,h=new ee(0.0018,0.0018,this.wheelRadius-0.05,4);for(let m=0;m<f;m++){let g=m/f*Math.PI*2,M=m%2===0,p=new j(h,this.chromeMat),d=M?0.025:-0.025,E=new C(Math.cos(g)*(this.wheelRadius-0.045),Math.sin(g)*(this.wheelRadius-0.045),0),w=new C(Math.cos(g+0.3)*0.02,Math.sin(g+0.3)*0.02,d),_=new C().subVectors(E,w);p.position.copy(w).addScaledVector(_,0.5),p.quaternion.setFromUnitVectors(new C(0,1,0),_.clone().normalize()),t.add(p)}return t}buildWheels(){this.rearWheelGroup=new Ct,this.rearWheelGroup.position.copy(this.rearAxlePos),this.rearWheelMesh=this.createSpokedWheel(),this.rearWheelGroup.add(this.rearWheelMesh),this.bikeBody.add(this.rearWheelGroup);let t=new ee(0.045,0.045,0.006,18),e=new j(t,this.chromeMat);e.rotation.x=Math.PI/2,e.position.set(0,0,0.035),this.rearWheelMesh.add(e)}buildForkAndHandlebars(){this.steerGroup=new Ct,this.steerGroup.position.copy(this.headTubeBottom);let t=new C().subVectors(this.frontAxlePos,this.headTubeBottom);this.forkAngle=Math.atan2(t.x,-t.y);let e=0.38,n=new ee(0.018,0.018,e,16),i=new j(n,this.chromeMat);i.position.set(0,e*0.5,0),this.steerGroup.add(i);let s=new ye(0.05,0.03,0.12),r=new j(s,this.frameMat);r.position.set(0,0,0),this.steerGroup.add(r);let a=t.length();[-0.05,0.05].forEach((T)=>{let R=new ee(0.016,0.012,a,12),A=new j(R,this.frameMat);A.castShadow=!0,A.position.set(t.x*0.5,t.y*0.5,T),A.rotation.z=-this.forkAngle,this.steerGroup.add(A)}),this.frontWheelGroup=new Ct,this.frontWheelGroup.position.set(t.x,t.y,0),this.frontWheelMesh=this.createSpokedWheel(),this.frontWheelGroup.add(this.frontWheelMesh),this.steerGroup.add(this.frontWheelGroup);let o=new ee(0.016,0.016,0.16,12),l=new j(o,this.chromeMat);l.position.set(0.02,e+0.04,0),l.rotation.z=-0.2,this.steerGroup.add(l);let c=new $n([new C(-0.06,e+0.12,-0.28),new C(-0.02,e+0.13,-0.18),new C(0.02,e+0.12,0),new C(-0.02,e+0.13,0.18),new C(-0.06,e+0.12,0.28)]),u=new ln(c,24,0.012,12,!1),f=new j(u,this.chromeMat);f.castShadow=!0,this.steerGroup.add(f),[-0.24,0.24].forEach((T)=>{let R=new ee(0.016,0.016,0.09,12),A=new j(R,this.leatherMat);A.position.set(-0.04,e+0.12,T),A.rotation.z=Math.PI/2,A.rotation.y=T>0?0.3:-0.3,this.steerGroup.add(A)}),this.bellMesh=new Ct;let h=new j(new Ve(0.024,16,12,0,Math.PI*2,0,Math.PI*0.6),this.brassMat),m=new j(new ee(0.018,0.022,0.01,16),this.chromeMat),g=new j(new ye(0.006,0.012,0.025),this.chromeMat);g.position.set(-0.015,0.01,-0.018),this.bellMesh.add(h,m,g),this.bellMesh.position.set(-0.02,e+0.14,-0.16),this.steerGroup.add(this.bellMesh),this.headlightGroup=new Ct,this.headlightGroup.position.set(0.08,0.08,0);let M=new Ae(0.045,0.1,16),p=new j(M,this.chromeMat);p.rotation.z=-Math.PI/2,this.headlightGroup.add(p);let d=new j(new Un(0.045,16),this.glassMat);d.position.set(0.05,0,0),d.rotation.y=Math.PI/2,this.headlightGroup.add(d),this.headlight=new Or(16775904,2.8,18,Math.PI*0.22,0.4,1.2),this.headlight.position.set(0.08,0,0),this.headlight.target.position.set(6,-1.2,0),this.headlight.castShadow=!0,this.headlight.shadow.mapSize.width=512,this.headlight.shadow.mapSize.height=512,this.headlightGroup.add(this.headlight),this.headlightGroup.add(this.headlight.target);let E=new Ae(0.75,4.2,24,1,!0);E.translate(0,-2.1,0),E.rotateX(-Math.PI/2);let w=new Ke({color:16775904,transparent:!0,opacity:0.12,side:Re,blending:qn,depthWrite:!1}),_=new j(E,w);_.position.set(0.1,0,0),this.headlightGroup.add(_),this.lightBeam=_,this.steerGroup.add(this.headlightGroup),this.leftGripTarget=new C(-0.04,e+0.12,-0.23),this.rightGripTarget=new C(-0.04,e+0.12,0.23),this.bikeBody.add(this.steerGroup)}buildDrivetrain(){this.crankGroup=new Ct,this.crankGroup.position.copy(this.bbPos);let t=new ee(0.095,0.095,0.005,24),e=new j(t,this.chromeMat);e.rotation.x=Math.PI/2,e.position.set(0,0,0.045),this.crankGroup.add(e);for(let h=0;h<5;h++){let m=new ye(0.015,0.08,0.008),g=new j(m,this.chromeMat);g.position.set(0,0,0.046),g.rotation.z=h/5*Math.PI*2,this.crankGroup.add(g)}this.rightCrankArm=new Ct;let n=new ye(0.018,this.crankLength,0.012),i=new j(n,this.chromeMat);i.position.set(0,-this.crankLength*0.5,0.065),this.rightCrankArm.add(i),this.rightPedal=new Ct,this.rightPedal.position.set(0,-this.crankLength,0.11);let s=new ye(0.065,0.02,0.09),r=new j(s,this.rubberMat);r.castShadow=!0,this.rightPedal.add(r),this.rightCrankArm.add(this.rightPedal),[-0.03,0.03].forEach((h)=>{let m=new j(new ye(0.006,0.012,0.075),this.reflectorMat);m.position.set(h,0,0),this.rightPedal.add(m)}),this.leftCrankArm=new Ct;let a=new ye(0.018,this.crankLength,0.012),o=new j(a,this.chromeMat);o.position.set(0,this.crankLength*0.5,-0.065),this.leftCrankArm.add(o),this.leftPedal=new Ct,this.leftPedal.position.set(0,this.crankLength,-0.11);let l=new j(s,this.rubberMat);l.castShadow=!0,this.leftPedal.add(l),this.leftCrankArm.add(this.leftPedal),[-0.03,0.03].forEach((h)=>{let m=new j(new ye(0.006,0.012,0.075),this.reflectorMat);m.position.set(h,0,0),this.leftPedal.add(m)}),this.crankGroup.add(this.rightCrankArm),this.crankGroup.add(this.leftCrankArm),this.bikeBody.add(this.crankGroup);let c=new On;c.moveTo(0,0.1),c.lineTo(-0.48,0.05),c.lineTo(-0.48,-0.05),c.lineTo(0,-0.1),c.closePath();let u=new Yi(c,{depth:0.012,bevelEnabled:!1}),f=new j(u,this.frameMat);f.position.copy(this.bbPos).add(new C(0,0,0.048)),this.bikeBody.add(f)}buildSaddle(){this.saddleGroup=new Ct,this.saddleGroup.position.copy(this.seatClusterPos).add(new C(0,0.1,0));let t=new ee(0.015,0.015,0.14,12),e=new j(t,this.chromeMat);e.position.set(0,-0.06,0),this.saddleGroup.add(e);let n=new On;n.moveTo(-0.12,-0.09),n.quadraticCurveTo(-0.16,0,-0.12,0.09),n.quadraticCurveTo(-0.04,0.1,0.04,0.035),n.quadraticCurveTo(0.14,0.02,0.16,0),n.quadraticCurveTo(0.14,-0.02,0.04,-0.035),n.quadraticCurveTo(-0.04,-0.1,-0.12,-0.09);let i=new Yi(n,{depth:0.04,bevelEnabled:!0,bevelSegments:4,steps:1,bevelSize:0.015,bevelThickness:0.015}),s=new j(i,this.leatherMat);s.rotation.x=Math.PI/2,s.rotation.z=Math.PI,s.position.set(0.02,0.02,0.02),s.castShadow=!0,this.saddleGroup.add(s),[-0.045,0.045].forEach((r)=>{let a=new ee(0.016,0.016,0.06,12),o=new j(a,this.chromeMat);o.position.set(-0.08,-0.02,r),this.saddleGroup.add(o)}),this.bikeBody.add(this.saddleGroup),this.saddleSeatingPoint=new C(this.seatClusterPos.x,this.seatClusterPos.y+0.15,0)}buildBasketAndFish(){this.basketGroup=new Ct,this.basketGroup.position.set(0.16,0.38,0);let t=new ye(0.18,0.16,0.28),e=new j(t,this.wickerMat);e.castShadow=!0,this.basketGroup.add(e);let n=new ye(0.19,0.02,0.29),i=new j(n,this.wickerMat);i.position.y=0.08,this.basketGroup.add(i),this.fishGroup=new Ct,this.fishGroup.position.set(0,0.05,0),this.fishGroup.rotation.y=0.4,this.fishGroup.rotation.z=0.2;let s=new Ae(0.045,0.18,12),r=new j(s,this.fishMat);r.rotation.z=Math.PI/2,this.fishGroup.add(r),this.fishTail=new j(new Ae(0.035,0.08,8),this.fishMat),this.fishTail.position.set(-0.11,0,0),this.fishTail.rotation.z=-Math.PI/2,this.fishGroup.add(this.fishTail);let a=new Ke({color:1118481}),o=new j(new ye(0.02,0.015,0.07),a);o.position.set(0.05,0.015,0),this.fishGroup.add(o),this.basketGroup.add(this.fishGroup),this.steerGroup.add(this.basketGroup)}buildFendersAndRack(){let e=new _n(0,0,this.wheelRadius+0.025,this.wheelRadius+0.025,Math.PI*0.12,Math.PI*0.72,!1,0).getPoints(24),n=new ge().setFromPoints(e),i=new pi(n,new Jn({color:16777215,linewidth:3}));this.frontWheelGroup.add(i);let r=new _n(0,0,this.wheelRadius+0.025,this.wheelRadius+0.025,Math.PI*0.45,Math.PI*1.15,!1,0).getPoints(24),a=new ge().setFromPoints(r),o=new pi(a,new Jn({color:16777215,linewidth:3}));this.rearWheelGroup.add(o);let l=new Ct;l.position.set(this.seatClusterPos.x-0.22,this.wheelRadius+0.18,0);let c=new j(new ye(0.36,0.015,0.16),this.chromeMat);l.add(c);let u=new ee(0.05,0.05,0.2,16),f=new Yt({color:16739179,roughness:0.8}),h=new j(u,f);h.rotation.x=Math.PI/2,h.position.set(0,0.055,0),l.add(h),this.bikeBody.add(l)}update(t,e,n,i=!1){this.speed=e;let s=this.speed/this.wheelRadius;this.wheelAngle+=s*t,this.rearWheelMesh.rotation.z=-this.wheelAngle,this.frontWheelMesh.rotation.z=-this.wheelAngle;let r=s/2.4;this.crankAngle+=r*t,this.crankGroup.rotation.z=-this.crankAngle,this.rightPedal.rotation.z=this.crankAngle,this.leftPedal.rotation.z=this.crankAngle;let a=n*0.35;this.steerAngle+=(a-this.steerAngle)*Math.min(t*12,1),this.steerGroup.rotation.y=this.steerAngle;let o=-this.steerAngle*Math.min(this.speed*0.14,0.28);this.bikeBody.rotation.z=o;let l=i?0.42:0;if(this.wheelieAngle+=(l-this.wheelieAngle)*Math.min(t*8,1),this.bikeBody.position.y=Math.sin(this.wheelieAngle)*0.35,this.bikeBody.rotation.z+=this.wheelieAngle*0.9,this.speed>0.5){let c=Math.sin(Date.now()*0.02)*0.003*Math.min(this.speed*0.2,1);this.bikeBody.position.y+=c}if(this.fishGroup&&this.fishTail){let c=10+this.speed*4;this.fishTail.rotation.y=Math.sin(Date.now()*0.001*c)*0.55;let u=Math.abs(Math.sin(Date.now()*0.001*(c*0.5)))*0.025;this.fishGroup.position.y=0.05+u,this.fishGroup.rotation.z=0.2+Math.sin(Date.now()*0.008)*0.15}}getPedalWorldPositions(){let t=new C,e=new C;return this.leftPedal.getWorldPosition(t),this.rightPedal.getWorldPosition(e),{left:t,right:e}}getHandlebarGripWorldPositions(){let t=this.leftGripTarget.clone(),e=this.rightGripTarget.clone();return this.steerGroup.localToWorld(t),this.steerGroup.localToWorld(e),{left:t,right:e}}}class hl{constructor(t){this.bicycle=t,this.group=new Ct,this.thighLen=0.32,this.shinLen=0.3,this.hipOffsetZ=0.11,this.pouchY=0,this.pouchVel=0,this.blinkTimer=0,this.isBlinking=!1,this.blinkProgress=0,this.honkAmount=0,this.headBobPhase=0,this.cadenceSway=0,this.createMaterials(),this.buildPelican()}createMaterials(){this.featherWhiteMat=new Kn({color:16316922,roughness:0.72,metalness:0.02,sheen:0.85,sheenColor:new zt(16777215),sheenRoughness:0.5}),this.featherDarkMat=new Kn({color:2829634,roughness:0.8,metalness:0.05,sheen:0.5,sheenColor:new zt(9279918)}),this.billMat=new Yt({map:Mn.createBeakTexture(),roughness:0.28,metalness:0.15,envMapIntensity:1.3}),this.billTipMat=new Yt({color:10354706,roughness:0.25,metalness:0.2}),this.pouchMat=new Kn({color:16623701,roughness:0.45,metalness:0.05,transmission:0.15,thickness:0.35,side:Re}),this.legMat=new Yt({color:15885337,roughness:0.6,metalness:0.1}),this.eyeWhiteMat=new Yt({color:16777215,roughness:0.1,metalness:0.1}),this.irisMat=new Yt({color:1914199,roughness:0.2,metalness:0.1}),this.pupilMat=new Ke({color:0}),this.goggleStrapMat=new Yt({color:4007444,roughness:0.8}),this.goggleRimMat=new Yt({color:13145662,roughness:0.3,metalness:0.85}),this.goggleLensMat=new Yt({color:9494767,roughness:0.1,metalness:0.4,transparent:!0,opacity:0.85})}buildPelican(){this.root=new Ct,this.root.position.copy(this.bicycle.saddleSeatingPoint),this.group.add(this.root),this.pelvis=new Ct,this.root.add(this.pelvis),this.buildTorso(),this.buildTail(),this.buildNeckAndHead(),this.buildWings(),this.buildLegs()}buildTorso(){this.torso=new Ct,this.pelvis.add(this.torso);let t=new Ve(0.24,24,18);t.scale(1.2,0.95,0.85);let e=new j(t,this.featherWhiteMat);e.castShadow=!0,e.receiveShadow=!0,e.rotation.z=-0.22,e.position.set(0.08,0.16,0),this.torso.add(e);let n=new Ve(0.18,16,12);n.scale(1,1.2,0.75);let i=new j(n,this.featherWhiteMat);i.position.set(0.18,0.18,0),i.rotation.z=-0.3,this.torso.add(i)}buildTail(){this.tail=new Ct,this.tail.position.set(-0.2,0.14,0);for(let t=-3;t<=3;t++){let e=new Ae(0.038,0.22,6);e.scale(1,1,0.3);let n=new j(e,this.featherDarkMat);n.rotation.z=Math.PI*0.65,n.rotation.y=t*0.14,n.position.set(-0.06,t*0.012,t/3*0.09),n.castShadow=!0,this.tail.add(n)}this.torso.add(this.tail)}buildNeckAndHead(){this.neckBase=new Ct,this.neckBase.position.set(0.24,0.24,0),this.torso.add(this.neckBase);let t=new ee(0.085,0.11,0.18,16),e=new j(t,this.featherWhiteMat);e.position.set(0.04,0.09,0),e.rotation.z=-0.45,e.castShadow=!0,this.neckBase.add(e),this.neckMid=new Ct,this.neckMid.position.set(0.1,0.18,0),this.neckBase.add(this.neckMid);let n=new ee(0.075,0.085,0.18,16),i=new j(n,this.featherWhiteMat);i.position.set(0.02,0.09,0),i.rotation.z=0.35,i.castShadow=!0,this.neckMid.add(i),this.headGroup=new Ct,this.headGroup.position.set(0.04,0.19,0),this.neckMid.add(this.headGroup);let s=new Ve(0.12,20,16);s.scale(1.15,0.95,0.88);let r=new j(s,this.featherWhiteMat);r.castShadow=!0,this.headGroup.add(r);for(let a=0;a<4;a++){let o=new Ae(0.025,0.14-a*0.02,6),l=new j(o,this.featherWhiteMat);l.rotation.z=Math.PI*0.65+a*0.12,l.position.set(-0.1,0.04-a*0.02,(a-1.5)*0.02),this.headGroup.add(l)}this.buildEyes(),this.buildBeakAndPouch(),this.buildGoggles()}buildEyes(){this.eyes=[],[-0.075,0.075].forEach((t)=>{let e=new Ct;e.position.set(0.065,0.04,t);let n=new Ve(0.038,16,12),i=new j(n,this.eyeWhiteMat);e.add(i);let s=new Un(0.022,16),r=new j(s,this.irisMat);r.position.set(0.036,0,0),r.rotation.y=Math.PI/2,e.add(r);let a=new Un(0.012,16),o=new j(a,this.pupilMat);o.position.set(0.037,0,0),o.rotation.y=Math.PI/2,e.add(o);let l=new Ve(0.04,16,8,0,Math.PI*2,0,Math.PI*0.5),c=new j(l,this.featherWhiteMat);c.rotation.z=Math.PI,c.position.set(0,0.015,0),c.scale.set(1.05,0.05,1.05),e.add(c),this.eyes.push({group:e,eyelid:c,iris:r,pupil:o}),this.headGroup.add(e)})}buildBeakAndPouch(){this.beakGroup=new Ct,this.beakGroup.position.set(0.11,-0.01,0),this.headGroup.add(this.beakGroup);let t=new Ae(0.055,0.54,16);t.scale(1,1,0.45);let e=new j(t,this.billMat);e.rotation.z=-Math.PI/2,e.position.set(0.27,0.015,0),e.castShadow=!0,this.beakGroup.add(e);let n=new Ae(0.028,0.08,12),i=new j(n,this.billTipMat);i.rotation.z=-Math.PI*0.82,i.position.set(0.53,-0.01,0),this.beakGroup.add(i),this.lowerBeakGroup=new Ct,this.lowerBeakGroup.position.set(0.02,-0.02,0),this.beakGroup.add(this.lowerBeakGroup),[-0.038,0.038].forEach((r)=>{let a=new ee(0.012,0.008,0.5,8),o=new j(a,this.billMat);o.rotation.z=-Math.PI/2,o.position.set(0.25,-0.01,r),this.lowerBeakGroup.add(o)});let s=new Ve(0.18,20,16);s.scale(1.8,0.95,0.45),this.pouchMesh=new j(s,this.pouchMat),this.pouchMesh.position.set(0.24,-0.09,0),this.pouchMesh.castShadow=!0,this.lowerBeakGroup.add(this.pouchMesh)}buildGoggles(){this.gogglesGroup=new Ct,this.gogglesGroup.position.set(0.04,0.09,0);let e=new _n(0,0,0.12,0.09,0,Math.PI*2,!1,0).getPoints(24),n=new ge().setFromPoints(e),i=new pi(n,new Jn({color:4007444,linewidth:4}));i.rotation.x=Math.PI/2,this.gogglesGroup.add(i),[-0.05,0.05].forEach((s)=>{let r=new xn(0.032,0.007,10,20),a=new j(r,this.goggleRimMat);a.position.set(0.08,0.03,s),a.rotation.y=Math.PI/2,this.gogglesGroup.add(a);let o=new Un(0.03,16),l=new j(o,this.goggleLensMat);l.position.set(0.082,0.03,s),l.rotation.y=Math.PI/2,this.gogglesGroup.add(l)}),this.headGroup.add(this.gogglesGroup)}buildWings(){this.leftWing=new Ct,this.rightWing=new Ct,this.leftWing.position.set(0.12,0.22,-0.16),this.rightWing.position.set(0.12,0.22,0.16);let t=(e,n)=>{let i=n?1:-1,s=new ee(0.045,0.06,0.28,12);s.scale(1,1,0.5);let r=new j(s,this.featherWhiteMat);r.position.set(0.06,-0.1,i*0.04),r.rotation.z=-0.55,r.rotation.x=i*0.3,e.add(r);let a=new ee(0.035,0.045,0.32,12);a.scale(1,1,0.4);let o=new j(a,this.featherWhiteMat);o.position.set(0.24,-0.16,i*0.08),o.rotation.z=-1.25,e.add(o);let l=new ye(0.06,0.04,0.12),c=new j(l,this.featherDarkMat);c.position.set(0.38,-0.14,i*0.1),c.rotation.y=i*0.25,e.add(c)};t(this.leftWing,!1),t(this.rightWing,!0),this.torso.add(this.leftWing),this.torso.add(this.rightWing)}buildLegs(){this.leftLeg=this.createLeg(!1),this.rightLeg=this.createLeg(!0),this.pelvis.add(this.leftLeg.root),this.pelvis.add(this.rightLeg.root)}createLeg(t){let e=t?1:-1,n=new Ct;n.position.set(0.02,0.04,e*this.hipOffsetZ);let i=new Ct;n.add(i);let s=new ee(0.032,0.028,this.thighLen,12),r=new j(s,this.featherWhiteMat);r.position.set(0,-this.thighLen*0.5,0),r.castShadow=!0,i.add(r);let a=new Ct;a.position.set(0,-this.thighLen,0),i.add(a);let o=new j(new Ve(0.03,10,8),this.legMat);a.add(o);let l=new Ct;a.add(l);let c=new ee(0.024,0.02,this.shinLen,12),u=new j(c,this.legMat);u.position.set(0,-this.shinLen*0.5,0),u.castShadow=!0,l.add(u);let f=new Ct;f.position.set(0,-this.shinLen,0),l.add(f);let h=new j(new Ve(0.022,10,8),this.legMat);f.add(h);let m=new Ct,g=new ye(0.12,0.012,0.022),M=new j(g,this.legMat);M.position.set(0.06,0,0),m.add(M);let p=new j(g,this.legMat);p.position.set(0.055,0,-0.035),p.rotation.y=-0.35,m.add(p);let d=new j(g,this.legMat);d.position.set(0.055,0,0.035),d.rotation.y=0.35,m.add(d);let E=new On;E.moveTo(0,0),E.lineTo(0.11,-0.05),E.lineTo(0.12,0),E.lineTo(0.11,0.05),E.closePath();let w=new bs(E),_=new j(w,this.legMat);return _.rotation.x=Math.PI/2,_.position.set(0,-0.002,0),m.add(_),f.add(m),{root:n,thighGroup:i,kneeGroup:a,shinGroup:l,footGroup:f,isRight:t}}solveLegIK(t,e){let n=new C;t.root.getWorldPosition(n);let i=new C().subVectors(e,n),s=i.length(),r=(this.thighLen+this.shinLen)*0.995,a=Math.abs(this.thighLen-this.shinLen)*1.05;s=Math.max(a,Math.min(s,r));let o=(this.thighLen*this.thighLen+s*s-this.shinLen*this.shinLen)/(2*this.thighLen*s),l=Math.acos(Math.max(-1,Math.min(1,o))),c=(this.thighLen*this.thighLen+this.shinLen*this.shinLen-s*s)/(2*this.thighLen*this.shinLen),u=Math.PI-Math.acos(Math.max(-1,Math.min(1,c))),f=i.clone().normalize(),h=Math.atan2(f.x,-f.y),m=Math.atan2(f.z,Math.sqrt(f.x*f.x+f.y*f.y));t.thighGroup.rotation.set(0,0,0),t.thighGroup.rotation.z=h-l,t.thighGroup.rotation.x=m*(t.isRight?0.4:-0.4),t.kneeGroup.rotation.set(0,0,0),t.kneeGroup.rotation.z=u,t.footGroup.rotation.set(0,0,0),t.footGroup.rotation.z=-(t.thighGroup.rotation.z+t.kneeGroup.rotation.z)}honk(){this.honkAmount=1}update(t,e,n=!1){let i=this.bicycle.crankAngle,s=Math.sin(i)*0.07;this.cadenceSway+=(s-this.cadenceSway)*Math.min(t*10,1),this.pelvis.rotation.z=this.cadenceSway,this.pelvis.rotation.x=Math.sin(i*0.5)*0.03;let r=Math.max(0,Math.min((e-4.5)*0.035,0.22));this.torso.rotation.z=-0.22-r,this.neckBase.rotation.z=-r*0.7,this.headBobPhase+=t*Math.max(e*3.5,2);let a=Math.cos(this.headBobPhase)*0.03,o=Math.sin(this.headBobPhase*2)*0.02;this.headGroup.position.x=0.04+a,this.headGroup.position.y=0.19+o,this.headGroup.rotation.z=-this.pelvis.rotation.z*0.6;let l=60,c=7.5,u=(Math.random()-0.5)*e*0.15,f=this.honkAmount*-0.06+u,h=-l*(this.pouchY-f)-c*this.pouchVel;if(this.pouchVel+=h*t,this.pouchY+=this.pouchVel*t,this.pouchMesh.position.y=-0.09+this.pouchY,this.pouchMesh.scale.set(1.8+this.honkAmount*0.4,0.95+Math.abs(this.pouchY)*2+this.honkAmount*0.5,0.45+this.honkAmount*0.3),this.honkAmount>0.01)this.honkAmount-=t*3.2,this.lowerBeakGroup.rotation.z=-this.honkAmount*0.45;else this.lowerBeakGroup.rotation.z=0,this.honkAmount=0;if(this.blinkTimer+=t,!this.isBlinking&&this.blinkTimer>3.5+Math.random()*3)this.isBlinking=!0,this.blinkTimer=0,this.blinkProgress=0;if(this.isBlinking){this.blinkProgress+=t*12;let M=Math.sin(this.blinkProgress)*0.95;if(this.eyes.forEach((p)=>{p.eyelid.scale.y=0.05+M*0.95}),this.blinkProgress>=Math.PI)this.isBlinking=!1,this.eyes.forEach((p)=>{p.eyelid.scale.y=0.05})}let m=Math.sin(Date.now()*0.002)*0.003;if(this.eyes.forEach((M)=>{M.pupil.position.y=m}),n)this.leftWing.rotation.z=Math.PI*0.25,this.rightWing.rotation.z=Math.PI*0.25,this.leftWing.rotation.y=-0.4,this.rightWing.rotation.y=0.4;else this.leftWing.rotation.set(0,0,0),this.rightWing.rotation.set(0,0,0);let g=this.bicycle.getPedalWorldPositions();this.solveLegIK(this.leftLeg,g.left),this.solveLegIK(this.rightLeg,g.right)}}class ul{constructor(t){this.scene=t,this.time=0,this.roadSegments=[],this.roadSegmentLength=40,this.totalSegments=5,this.roadWidth=7,this.seagulls=[],this.palmTrees=[],this.streetLamps=[],this.clouds=[],this.particles=null,this.beaconBeam=null,this.currentTimeOfDay="sunset",this.createMaterials(),this.buildWorld()}createMaterials(){this.asphaltMat=new Yt({map:Mn.createAsphaltTexture(),roughness:0.85,metalness:0.12}),this.markingYellowMat=new Yt({color:16765286,roughness:0.4,metalness:0.05}),this.markingWhiteMat=new Yt({color:16316922,roughness:0.4,metalness:0.05}),this.concreteMat=new Yt({color:9279918,roughness:0.8,metalness:0.1}),this.sandMat=new Yt({color:16032353,roughness:0.95,metalness:0.02}),this.grassMat=new Yt({color:2792847,roughness:0.85,metalness:0.05}),this.oceanMat=new Yt({color:30646,roughness:0.15,metalness:0.85,transparent:!0,opacity:0.92,flatShading:!0}),this.trunkMat=new Yt({color:7294519,roughness:0.9,metalness:0.05}),this.leafMat=new Yt({color:3715072,roughness:0.6,metalness:0.1,side:Re}),this.woodMat=new Yt({color:10910802,roughness:0.8,metalness:0.05}),this.ironMat=new Yt({color:1710628,roughness:0.4,metalness:0.8}),this.lampGlowMat=new Yt({color:16775904,roughness:0.1,emissive:16763904,emissiveIntensity:0.8}),this.cloudMat=new Yt({color:16777215,roughness:0.95,metalness:0.02,flatShading:!0})}buildWorld(){this.worldGroup=new Ct,this.scene.add(this.worldGroup),this.buildInfiniteRoad(),this.buildOcean(),this.buildClouds(),this.buildSeagulls(),this.buildAtmosphericParticles(),this.buildDistantCoastAndLighthouse(),this.setupLighting()}setupLighting(){this.ambientLight=new Gr(16772829,0.6),this.scene.add(this.ambientLight),this.sunLight=new Br(16775917,1.8),this.sunLight.position.set(40,50,-30),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=150,this.sunLight.shadow.camera.left=-25,this.sunLight.shadow.camera.right=25,this.sunLight.shadow.camera.top=25,this.sunLight.shadow.camera.bottom=-25,this.sunLight.shadow.bias=-0.0005,this.scene.add(this.sunLight),this.hemiLight=new Nr(8900331,16032353,0.5),this.scene.add(this.hemiLight),this.scene.fog=new vs(16771286,0.012),this.setTimeOfDay(this.currentTimeOfDay)}setTimeOfDay(t){this.currentTimeOfDay=t;let e=Mn.createEnvironmentMap(t);switch(this.scene.environment=e,this.scene.background=e,t){case"day":this.scene.fog.color=new zt(10213631),this.scene.fog.density=0.007,this.ambientLight.color.setHex(16777215),this.ambientLight.intensity=0.75,this.sunLight.color.setHex(16775917),this.sunLight.intensity=2.2,this.sunLight.position.set(20,60,-20),this.hemiLight.color.setHex(7389695),this.hemiLight.groundColor.setHex(16032353),this.oceanMat.color.setHex(30646),this.setLampsEmissive(0);break;case"sunset":this.scene.fog.color=new zt(16485156),this.scene.fog.density=0.01,this.ambientLight.color.setHex(16772829),this.ambientLight.intensity=0.65,this.sunLight.color.setHex(16739125),this.sunLight.intensity=2.6,this.sunLight.position.set(-50,18,-40),this.hemiLight.color.setHex(16219904),this.hemiLight.groundColor.setHex(14034984),this.oceanMat.color.setHex(24435),this.setLampsEmissive(0.8);break;case"cyberpunk":this.scene.fog.color=new zt(2359366),this.scene.fog.density=0.013,this.ambientLight.color.setHex(10309341),this.ambientLight.intensity=0.5,this.sunLight.color.setHex(16711807),this.sunLight.intensity=1.8,this.sunLight.position.set(-30,25,20),this.hemiLight.color.setHex(62932),this.hemiLight.groundColor.setHex(8072383),this.oceanMat.color.setHex(1048619),this.setLampsEmissive(1.8,62932);break;case"night":this.scene.fog.color=new zt(659752),this.scene.fog.density=0.011,this.ambientLight.color.setHex(1844545),this.ambientLight.intensity=0.3,this.sunLight.color.setHex(9284036),this.sunLight.intensity=0.9,this.sunLight.position.set(30,45,-30),this.hemiLight.color.setHex(730437),this.hemiLight.groundColor.setHex(71207),this.oceanMat.color.setHex(197726),this.setLampsEmissive(2.2,16765286);break}}setLampsEmissive(t,e=16763904){this.lampGlowMat.emissiveIntensity=t,this.lampGlowMat.emissive.setHex(e)}createRoadSegment(t){let e=new Ct;e.position.x=t;let n=this.roadSegmentLength,i=new ke(n,this.roadWidth),s=new j(i,this.asphaltMat);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s);let r=8,a=n/(r*2);for(let p=0;p<r;p++){let d=new ke(a,0.16),E=new j(d,this.markingYellowMat);E.rotation.x=-Math.PI/2,E.position.set(-n*0.5+(p*2+1)*a,0.002,0),e.add(E)}[-this.roadWidth*0.45,this.roadWidth*0.45].forEach((p)=>{let d=new ke(n,0.14),E=new j(d,this.markingWhiteMat);E.rotation.x=-Math.PI/2,E.position.set(0,0.002,p),e.add(E)});let o=new ke(n,18),l=new j(o,this.grassMat);l.rotation.x=-Math.PI/2,l.position.set(0,0.05,this.roadWidth*0.5+11.5),l.receiveShadow=!0,e.add(l);let c=6,u=n/c;for(let p=0;p<c;p++){let d=-n*0.5+p*u,E=new ye(0.14,0.95,0.14),w=new j(E,this.woodMat);w.position.set(d,0.47,-this.roadWidth*0.5-0.12),w.castShadow=!0,e.add(w)}[0.45,0.85].forEach((p)=>{let d=new ye(n,0.08,0.1),E=new j(d,this.woodMat);E.position.set(0,p,-this.roadWidth*0.5-0.12),E.castShadow=!0,e.add(E)});let f=new Yt({color:9137218,roughness:0.9});for(let p=0;p<c-1;p++){let d=-n*0.5+p*u,E=-n*0.5+(p+1)*u,w=(d+E)*0.5,_=new Fn(new C(d,0.65,-this.roadWidth*0.5-0.12),new C(w,0.48,-this.roadWidth*0.5-0.12),new C(E,0.65,-this.roadWidth*0.5-0.12)),T=new j(new ln(_,10,0.018,6,!1),f);e.add(T)}let h=new ke(n,16),m=new j(h,this.sandMat);m.rotation.x=-Math.PI/2+0.04,m.position.set(0,-0.2,-this.roadWidth*0.5-8),m.receiveShadow=!0,e.add(m);let g=this.createPalmTree();g.position.set(8,0.14,this.roadWidth*0.5+3.8),e.add(g);let M=this.createStreetLamp();if(M.position.set(-12,0.14,this.roadWidth*0.5+2.6),e.add(M),Math.random()>0.4){let p=this.createBeachUmbrella();p.position.set((Math.random()-0.5)*20,-0.4,-this.roadWidth*0.5-9.5-Math.random()*4),e.add(p)}return e}buildInfiniteRoad(){for(let t=0;t<this.totalSegments;t++){let e=(t-2)*this.roadSegmentLength,n=this.createRoadSegment(e);this.worldGroup.add(n),this.roadSegments.push(n)}}createPalmTree(){let t=new Ct,e=new $n([new C(0,0,0),new C(0.2,2,0.1),new C(0.5,4.2,0.2),new C(0.7,5.8,0.1)]),n=new ln(e,16,0.18,10,!1),i=new j(n,this.trunkMat);i.castShadow=!0,t.add(i);let s=new C(0.7,5.8,0.1),r=9;for(let a=0;a<r;a++){let o=a/r*Math.PI*2,l=new Ct;l.position.copy(s),l.rotation.y=o;let c=new Fn(new C(0,0,0),new C(1.4,0.6,0),new C(2.6,-0.8,0)),u=new ln(c,12,0.035,6,!1),f=new j(u,this.leafMat);f.castShadow=!0,l.add(f);let h=new ke(2.4,0.6,8,2),m=new j(h,this.leafMat);m.position.set(1.4,-0.1,0),m.rotation.x=Math.PI/2,m.rotation.z=-0.3,l.add(m),t.add(l)}return t}createStreetLamp(){let t=new Ct,e=new ee(0.18,0.24,0.45,12),n=new j(e,this.ironMat);t.add(n);let i=new ee(0.06,0.08,4.2,12),s=new j(i,this.ironMat);s.position.y=2.3,t.add(s);let r=new xn(0.5,0.04,8,16,Math.PI*0.6),a=new j(r,this.ironMat);a.position.set(-0.35,4.4,0),a.rotation.z=-Math.PI*0.3,t.add(a);let o=new ee(0.16,0.1,0.42,6),l=new j(o,this.lampGlowMat);l.position.set(-0.65,4.3,0),t.add(l);let c=new Ae(0.24,0.16,6),u=new j(c,this.ironMat);return u.position.set(-0.65,4.55,0),t.add(u),t}createBeachUmbrella(){let t=new Ct,e=new ee(0.03,0.03,2.4,8),n=new j(e,this.woodMat);n.position.y=1.2,n.rotation.z=0.15,t.add(n);let i=new Ae(1.4,0.5,12,1,!0),s=new Yt({color:15681391,roughness:0.6,side:Re}),r=new j(i,s);return r.position.set(0.18,2.3,0),r.rotation.z=0.15,r.castShadow=!0,t.add(r),t}buildOcean(){this.oceanGeom=new ke(350,220,64,48),this.oceanMesh=new j(this.oceanGeom,this.oceanMat),this.oceanMesh.rotation.x=-Math.PI/2,this.oceanMesh.position.set(0,-0.65,-118),this.worldGroup.add(this.oceanMesh),this.oceanPosAttr=this.oceanGeom.attributes.position,this.oceanInitY=new Float32Array(this.oceanPosAttr.count);for(let t=0;t<this.oceanPosAttr.count;t++)this.oceanInitY[t]=this.oceanPosAttr.getY(t)}buildClouds(){this.cloudGroup=new Ct,this.worldGroup.add(this.cloudGroup);for(let t=0;t<18;t++){let e=this.createCloud();e.position.set((Math.random()-0.5)*300,28+Math.random()*22,-50-Math.random()*120),this.clouds.push({mesh:e,speed:1.2+Math.random()*1.5}),this.cloudGroup.add(e)}}createCloud(){let t=new Ct,e=5+Math.floor(Math.random()*4);for(let n=0;n<e;n++){let i=3.5+Math.random()*4.5,s=new qi(i,1),r=new j(s,this.cloudMat);r.position.set((n-e*0.5)*3.5,(Math.random()-0.5)*1.8,(Math.random()-0.5)*2.2),t.add(r)}return t}buildSeagulls(){this.seagullGroup=new Ct,this.worldGroup.add(this.seagullGroup);for(let t=0;t<6;t++){let e=this.createSeagull();e.mesh.position.set(15+Math.random()*30,10+Math.random()*14,-15-Math.random()*25),this.seagulls.push(e),this.seagullGroup.add(e.mesh)}}createSeagull(){let t=new Ct,e=new Ae(0.12,0.6,6);e.scale(1,1,0.4);let n=new j(e,this.markingWhiteMat);n.rotation.z=Math.PI/2,t.add(n);let i=new Ae(0.04,0.18,5),s=new j(i,this.markingYellowMat);s.rotation.z=-Math.PI/2,s.position.set(0.36,0,0),t.add(s);let r=new ke(0.8,0.28,4,1),a=new Yt({color:16316922,side:Re,roughness:0.8}),o=new j(r,a);o.position.set(0,0.05,-0.42),t.add(o);let l=new j(r,a);return l.position.set(0,0.05,0.42),t.add(l),{mesh:t,leftWing:o,rightWing:l,flapSpeed:4.5+Math.random()*3,flapOffset:Math.random()*Math.PI*2,flySpeed:5+Math.random()*3,circleRadius:18+Math.random()*15,angle:Math.random()*Math.PI*2}}buildAtmosphericParticles(){let e=new ge,n=new Float32Array(1050),i=new Float32Array(350);for(let r=0;r<350;r++)n[r*3+0]=(Math.random()-0.5)*80,n[r*3+1]=Math.random()*12,n[r*3+2]=(Math.random()-0.5)*30,i[r]=Math.random()*0.18+0.08;e.setAttribute("position",new qe(n,3));let s=new Es({color:16775904,size:0.15,transparent:!0,opacity:0.65,blending:qn});this.particles=new Tr(e,s),this.worldGroup.add(this.particles)}buildDistantCoastAndLighthouse(){this.coastGroup=new Ct,this.worldGroup.add(this.coastGroup);let t=new Yt({color:1786674,roughness:0.95,metalness:0.05,flatShading:!0});[-120,-40,50,130].forEach((o,l)=>{let c=new Ae(32+l*8,26+l*5,7),u=new j(c,t);u.position.set(o,5,-170-l*10),u.scale.set(1.5,0.8,1),this.coastGroup.add(u)}),this.lighthouse=new Ct,this.lighthouse.position.set(45,10,-145);let e=new j(new qi(12,1),this.woodMat);e.position.y=-6,this.lighthouse.add(e);for(let o=0;o<5;o++){let l=new Yt({color:o%2===0?15672124:16777215,roughness:0.7}),c=new j(new ee(2.2-o*0.2,2.5-o*0.2,4,16),l);c.position.y=o*4,this.lighthouse.add(c)}let n=new Yt({color:16775904,emissive:16771584,emissiveIntensity:2}),i=new j(new ee(1.6,1.6,2.5,12),n);i.position.y=21,this.lighthouse.add(i),this.beaconBeam=new Ct,this.beaconBeam.position.y=21;let s=new Ae(12,140,16,1,!0);s.translate(0,-70,0),s.rotateX(-Math.PI/2);let r=new Ke({color:16771584,transparent:!0,opacity:0.28,blending:qn,side:Re,depthWrite:!1}),a=new j(s,r);this.beaconBeam.add(a),this.lighthouse.add(this.beaconBeam),this.coastGroup.add(this.lighthouse)}update(t,e){this.time+=t;let n=e*t,i=this.totalSegments*this.roadSegmentLength*0.5;this.roadSegments.forEach((a)=>{if(a.position.x-=n,a.position.x<-i)a.position.x+=this.totalSegments*this.roadSegmentLength});let s=this.oceanPosAttr,r=this.time*1.8;for(let a=0;a<s.count;a++){let o=s.getX(a),l=s.getY(a),c=Math.sin(o*0.08+r)*0.45+Math.cos(l*0.06+r*0.8)*0.35+Math.sin((o+l)*0.04+r*1.4)*0.2;s.setZ(a,c)}if(s.needsUpdate=!0,this.oceanGeom.computeVertexNormals(),this.seagulls.forEach((a)=>{a.angle+=t*0.18,a.mesh.position.x=Math.cos(a.angle)*a.circleRadius+10,a.mesh.position.z=Math.sin(a.angle)*a.circleRadius-25,a.mesh.rotation.y=-a.angle+Math.PI/2;let o=Math.sin(this.time*a.flapSpeed+a.flapOffset)*0.6;a.leftWing.rotation.x=o,a.rightWing.rotation.x=-o}),this.clouds.forEach((a)=>{if(a.mesh.position.x-=a.speed*t,a.mesh.position.x<-160)a.mesh.position.x=160}),this.particles){let a=this.particles.geometry.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o)-(e+2)*t;if(l<-40)l=40;a.setX(o,l);let c=a.getY(o)+Math.sin(this.time*2+o)*0.005;a.setY(o,Math.max(0.2,Math.min(c,14)))}a.needsUpdate=!0}if(this.beaconBeam)this.beaconBeam.rotation.y+=t*0.8}}class qh{constructor(){this.ctx=null,this.isMuted=!0,this.bgmPlaying=!1,this.bgmTimer=null,this.windNode=null,this.windGain=null,this.windFilter=null,this.oceanGain=null,this.initialized=!1}init(){if(this.initialized)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=0.8,this.masterGain.connect(this.ctx.destination),this.setupWind(),this.setupOcean(),this.initialized=!0}resume(){if(!this.initialized)this.init();if(this.ctx&&this.ctx.state==="suspended")this.ctx.resume();this.isMuted=!1}mute(t=!0){if(this.isMuted=t,this.masterGain)this.masterGain.gain.setTargetAtTime(t?0:0.8,this.ctx.currentTime,0.05)}toggleMute(){return this.resume(),this.mute(!this.isMuted),!this.isMuted}playBell(){if(!this.initialized)this.init();if(this.resume(),this.isMuted)return;let t=this.ctx.currentTime;this._strikeBell(t,2350,2890,0.7),this._strikeBell(t+0.14,2520,3100,0.9)}_strikeBell(t,e,n,i){[e,n].forEach((s,r)=>{let a=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();a.type="sine",a.frequency.setValueAtTime(s,t),a.frequency.exponentialRampToValueAtTime(s*0.998,t+1.2),l.type="bandpass",l.frequency.setValueAtTime(s,t),l.Q.setValueAtTime(15,t),o.gain.setValueAtTime(i*(r===0?0.7:0.5),t),o.gain.exponentialRampToValueAtTime(0.0001,t+(r===0?1.5:1.1)),a.connect(l),l.connect(o),o.connect(this.masterGain),a.start(t),a.stop(t+1.6)})}playHonk(){if(!this.initialized)this.init();if(this.resume(),this.isMuted)return;let t=this.ctx.currentTime,e=0.38,n=this.ctx.createOscillator(),i=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.type="sawtooth",i.type="triangle",n.frequency.setValueAtTime(320,t),n.frequency.linearRampToValueAtTime(420,t+0.08),n.frequency.exponentialRampToValueAtTime(180,t+e),i.frequency.setValueAtTime(160,t),i.frequency.linearRampToValueAtTime(210,t+0.08),i.frequency.exponentialRampToValueAtTime(90,t+e),s.type="bandpass",s.frequency.setValueAtTime(1100,t),s.frequency.linearRampToValueAtTime(1450,t+0.1),s.frequency.exponentialRampToValueAtTime(650,t+e),s.Q.setValueAtTime(6,t),r.gain.setValueAtTime(0.01,t),r.gain.linearRampToValueAtTime(0.65,t+0.04),r.gain.exponentialRampToValueAtTime(0.001,t+e),n.connect(s),i.connect(s),s.connect(r),r.connect(this.masterGain),n.start(t),i.start(t),n.stop(t+e),i.stop(t+e)}playChainTick(t=1){if(!this.initialized||this.isMuted)return;let e=this.ctx.currentTime,n=this.ctx.sampleRate*0.012,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let l=0;l<n;l++)s[l]=(Math.random()*2-1)*Math.exp(-l/(n*0.25));let r=this.ctx.createBufferSource();r.buffer=i;let a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(2800+Math.random()*400,e);let o=this.ctx.createGain();o.gain.setValueAtTime(0.06*Math.min(t,1.5),e),o.gain.exponentialRampToValueAtTime(0.001,e+0.015),r.connect(a),a.connect(o),o.connect(this.masterGain),r.start(e)}setupWind(){let t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0),i=0;for(let s=0;s<t;s++){let r=Math.random()*2-1;n[s]=(i+0.02*r)/1.02,i=n[s],n[s]*=2.5}this.windNode=this.ctx.createBufferSource(),this.windNode.buffer=e,this.windNode.loop=!0,this.windFilter=this.ctx.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.frequency.setValueAtTime(200,this.ctx.currentTime),this.windFilter.Q.setValueAtTime(1.5,this.ctx.currentTime),this.windGain=this.ctx.createGain(),this.windGain.gain.setValueAtTime(0.001,this.ctx.currentTime),this.windNode.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.masterGain),this.windNode.start()}updateSpeed(t){if(!this.initialized||!this.windGain||this.isMuted)return;let e=this.ctx.currentTime,n=Math.max(0,Math.min(t,2.5)),i=180+n*650,s=0.02+n*0.12;this.windFilter.frequency.setTargetAtTime(i,e,0.1),this.windGain.gain.setTargetAtTime(s,e,0.1)}setupOcean(){let t=this.ctx.sampleRate*3,e=this.ctx.createBuffer(2,t,this.ctx.sampleRate);for(let s=0;s<2;s++){let r=e.getChannelData(s),a=0,o=0,l=0;for(let c=0;c<t;c++){let u=Math.random()*2-1;a=0.99*a+u*0.05,o=0.97*o+u*0.08,l=0.92*l+u*0.12,r[c]=(a+o+l)*0.4}}let n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;let i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(450,this.ctx.currentTime),this.oceanGain=this.ctx.createGain(),this.oceanGain.gain.setValueAtTime(0.04,this.ctx.currentTime),n.connect(i),i.connect(this.oceanGain),this.oceanGain.connect(this.masterGain),n.start()}toggleBGM(){if(!this.initialized)this.init();if(this.resume(),this.bgmPlaying)return this.stopBGM(),!1;else return this.startBGM(),!0}startBGM(){if(this.bgmPlaying)return;this.bgmPlaying=!0;let t=0,n=0.35714285714285715,i=[[174.61,220,261.63,329.63],[164.81,220,246.94,293.66],[116.54,174.61,220,261.63],[130.81,164.81,196,246.94]],s=[87.31,110,58.27,65.41],r=()=>{if(!this.bgmPlaying)return;let a=this.ctx.currentTime,o=Math.floor(t/16)%4,l=t%16;if(l===0||l===8)i[o].forEach((u)=>{this._playRhodesNote(u,a,n*7.5,0.08)});if(l===0||l===6||l===10)this._playBassNote(s[o],a,n*3.5,0.12);if(l===0||l===8||l===14)this._playLoFiKick(a);if(l===4||l===12)this._playLoFiSnare(a);if(l%2===0)this._playLoFiHat(a,l%4===2?0.03:0.018);t++,this.bgmTimer=setTimeout(r,n*1000)};r()}stopBGM(){if(this.bgmPlaying=!1,this.bgmTimer)clearTimeout(this.bgmTimer),this.bgmTimer=null}_playRhodesNote(t,e,n,i){if(this.isMuted)return;let s=this.ctx.createOscillator(),r=this.ctx.createGain(),a=this.ctx.createBiquadFilter();s.type="triangle",s.frequency.setValueAtTime(t,e),a.type="lowpass",a.frequency.setValueAtTime(900,e),a.frequency.exponentialRampToValueAtTime(450,e+n),r.gain.setValueAtTime(0.001,e),r.gain.linearRampToValueAtTime(i,e+0.03),r.gain.exponentialRampToValueAtTime(0.0001,e+n),s.connect(a),a.connect(r),r.connect(this.masterGain),s.start(e),s.stop(e+n)}_playBassNote(t,e,n,i){if(this.isMuted)return;let s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t,e),r.gain.setValueAtTime(i,e),r.gain.exponentialRampToValueAtTime(0.0001,e+n),s.connect(r),r.connect(this.masterGain),s.start(e),s.stop(e+n)}_playLoFiKick(t){if(this.isMuted)return;let e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(35,t+0.15),n.gain.setValueAtTime(0.2,t),n.gain.exponentialRampToValueAtTime(0.001,t+0.18),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+0.2)}_playLoFiSnare(t){if(this.isMuted)return;let e=this.ctx.sampleRate*0.08,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let o=0;o<e;o++)i[o]=(Math.random()*2-1)*Math.exp(-o/(e*0.3));let s=this.ctx.createBufferSource();s.buffer=n;let r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(1400,t);let a=this.ctx.createGain();a.gain.setValueAtTime(0.08,t),a.gain.exponentialRampToValueAtTime(0.001,t+0.08),s.connect(r),r.connect(a),a.connect(this.masterGain),s.start(t)}_playLoFiHat(t,e){if(this.isMuted)return;let n=this.ctx.sampleRate*0.03,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let l=0;l<n;l++)s[l]=(Math.random()*2-1)*Math.exp(-l/(n*0.15));let r=this.ctx.createBufferSource();r.buffer=i;let a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(6000,t);let o=this.ctx.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(0.0001,t+0.03),r.connect(a),a.connect(o),o.connect(this.masterGain),r.start(t)}}var Qn=new qh;class Zh{constructor(){this.container=document.getElementById("canvas-container"),this.speed=4.5,this.targetSpeed=4.5,this.maxSpeed=14,this.steer=0,this.distance=0,this.energy=95,this.isWheelie=!1,this.isBraking=!1,this.isAccelerating=!1,this.cameraMode="follow",this.orbitRadius=5.5,this.orbitTheta=0.5,this.orbitPhi=1.1,this.isDragging=!1,this.lastPointer={x:0,y:0},this.lastChainTickAngle=0,this.clock=new Hr,this.initThree(),this.initSceneObjects(),this.initEventListeners(),this.initUI(),this.animate=this.animate.bind(this),this.renderer.setAnimationLoop(this.animate),setInterval(()=>{if(this.clock.getDelta()>0.05)this.animate()},100),this.animate()}initThree(){this.scene=new Sr;let t=window.innerWidth/window.innerHeight;this.camera=new Fe(48,t,0.1,400),this.camera.position.set(-2.8,1.4,1.9),this.camera.lookAt(0.3,0.85,0),this.renderer=new ll({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lr,this.renderer.toneMapping=ps,this.renderer.toneMappingExposure=1.1,this.container.appendChild(this.renderer.domElement)}initSceneObjects(){this.world=new ul(this.scene),this.bicycle=new cl,this.scene.add(this.bicycle.group),this.pelican=new hl(this.bicycle),this.scene.add(this.pelican.group)}initEventListeners(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.keys={},window.addEventListener("keydown",(e)=>{if(Qn.resume(),this.keys[e.code]=!0,e.code==="Space")e.preventDefault(),this.ringBell();else if(e.code==="KeyH")this.honkPelican();else if(e.code==="KeyC")this.cycleCamera();else if(e.code==="KeyT")this.cycleTimeOfDay();else if(e.code==="KeyM")this.toggleSound();else if(e.code==="KeyB")this.toggleBGM()}),window.addEventListener("keyup",(e)=>{this.keys[e.code]=!1});let t=this.renderer.domElement;t.addEventListener("pointerdown",(e)=>{this.isDragging=!0,this.lastPointer.x=e.clientX,this.lastPointer.y=e.clientY}),window.addEventListener("pointermove",(e)=>{if(!this.isDragging)return;let n=e.clientX-this.lastPointer.x,i=e.clientY-this.lastPointer.y;if(this.lastPointer.x=e.clientX,this.lastPointer.y=e.clientY,this.cameraMode==="orbit")this.orbitTheta-=n*0.008,this.orbitPhi=Math.max(0.2,Math.min(Math.PI*0.48,this.orbitPhi-i*0.008));else this.camera.position.x+=n*0.003,this.camera.position.y-=i*0.003}),window.addEventListener("pointerup",()=>{this.isDragging=!1}),t.addEventListener("wheel",(e)=>{if(this.cameraMode==="orbit")this.orbitRadius=Math.max(2.5,Math.min(15,this.orbitRadius+e.deltaY*0.005))},{passive:!0})}initUI(){if(this.speedNumEl=document.getElementById("speed-num"),this.rpmNumEl=document.getElementById("rpm-num"),this.distNumEl=document.getElementById("dist-num"),this.energyBarEl=document.getElementById("energy-fill"),this.camBadgeEl=document.getElementById("cam-badge"),this.timeBadgeEl=document.getElementById("time-badge"),this.audioBtnEl=document.getElementById("btn-sound"),this.bgmBtnEl=document.getElementById("btn-bgm"),document.getElementById("btn-pedal")?.addEventListener("pointerdown",()=>{this.isAccelerating=!0}),document.getElementById("btn-pedal")?.addEventListener("pointerup",()=>{this.isAccelerating=!1}),document.getElementById("btn-pedal")?.addEventListener("pointerleave",()=>{this.isAccelerating=!1}),document.getElementById("btn-brake")?.addEventListener("pointerdown",()=>{this.isBraking=!0}),document.getElementById("btn-brake")?.addEventListener("pointerup",()=>{this.isBraking=!1}),document.getElementById("btn-brake")?.addEventListener("pointerleave",()=>{this.isBraking=!1}),document.getElementById("btn-bell")?.addEventListener("click",()=>{this.ringBell()}),document.getElementById("btn-honk")?.addEventListener("click",()=>{this.honkPelican()}),document.getElementById("btn-wheelie")?.addEventListener("click",()=>{this.toggleWheelie()}),document.getElementById("btn-cam")?.addEventListener("click",()=>{this.cycleCamera()}),document.getElementById("btn-time")?.addEventListener("click",()=>{this.cycleTimeOfDay()}),document.getElementById("btn-sound")?.addEventListener("click",()=>{this.toggleSound()}),document.getElementById("btn-bgm")?.addEventListener("click",()=>{this.toggleBGM()}),this.speedSlider=document.getElementById("speed-slider"),this.speedSlider)this.speedSlider.addEventListener("input",(t)=>{this.targetSpeed=parseFloat(t.target.value)})}ringBell(){if(Qn.playBell(),this.bicycle.bellMesh)this.bicycle.bellMesh.rotation.z=0.35,setTimeout(()=>{if(this.bicycle.bellMesh)this.bicycle.bellMesh.rotation.z=0},180)}honkPelican(){Qn.playHonk(),this.pelican.honk()}toggleWheelie(){this.isWheelie=!this.isWheelie;let t=document.getElementById("btn-wheelie");if(t)t.classList.toggle("active",this.isWheelie)}toggleSound(){let t=Qn.toggleMute();if(this.audioBtnEl)this.audioBtnEl.innerHTML=t?"\uD83D\uDD0A":"\uD83D\uDD07",this.audioBtnEl.classList.toggle("active",t)}toggleBGM(){let t=Qn.toggleBGM();if(this.bgmBtnEl)this.bgmBtnEl.innerHTML=t?"\uD83C\uDFB5 音乐开启":"\uD83C\uDFB5 音乐关闭",this.bgmBtnEl.classList.toggle("active",t)}cycleCamera(){let t=["follow","beak","side","front","orbit"],e=t.indexOf(this.cameraMode);switch(this.cameraMode=t[(e+1)%t.length],this.cameraMode){case"follow":this.camera.position.set(-2.8,1.4,1.9);break;case"beak":this.camera.position.set(0.45,1.48,0);break;case"side":this.camera.position.set(0,1,3.8);break;case"front":this.camera.position.set(3.4,0.7,1.6);break;case"orbit":this.camera.position.set(0,2.5,5);break}if(this.camBadgeEl){let n={follow:"追随视角 \uD83C\uDFA5",beak:"鹈鹕第一视角 \uD83E\uDEBF",side:"侧面特写 \uD83D\uDEB2",front:"正面英雄 \uD83D\uDCF7",orbit:"360° 自由观察 \uD83D\uDE81"};this.camBadgeEl.innerText=n[this.cameraMode]}this.animate()}cycleTimeOfDay(){let t=["day","sunset","cyberpunk","night"],e=t.indexOf(this.world.currentTimeOfDay),n=t[(e+1)%t.length];this.world.setTimeOfDay(n);let i={day:1.05,sunset:1.28,cyberpunk:1.4,night:1.18};if(this.renderer.toneMappingExposure=i[n]||1.1,this.timeBadgeEl){let s={day:"晴空正午 ☀️",sunset:"落日余晖 \uD83C\uDF05",cyberpunk:"赛博霓虹 \uD83C\uDF06",night:"静谧星空 \uD83C\uDF19"};this.timeBadgeEl.innerText=s[n]}this.animate()}updatePhysics(t){let e=0;if(this.keys.KeyW||this.keys.ArrowUp||this.isAccelerating)e+=4.5;if(this.keys.KeyS||this.keys.ArrowDown||this.isBraking)e-=8;let n=0;if(this.keys.KeyA||this.keys.ArrowLeft)n-=1;if(this.keys.KeyD||this.keys.ArrowRight)n+=1;if(this.steer+=(n-this.steer)*Math.min(t*8,1),this.isWheelie=!!(this.keys.ShiftLeft||this.keys.ShiftRight||this.isWheelie),e!==0){if(this.targetSpeed=Math.max(0.5,Math.min(this.maxSpeed,this.targetSpeed+e*t)),this.speedSlider)this.speedSlider.value=this.targetSpeed.toFixed(1)}let i=e>0?3:e<0?7:1.5;if(this.speed+=(this.targetSpeed-this.speed)*Math.min(t*i,1),this.speed=Math.max(0.2,Math.min(this.isWheelie?16:this.maxSpeed,this.speed)),this.distance+=this.speed*t,this.speed>8)this.energy=Math.max(10,this.energy-t*2.5);else this.energy=Math.min(100,this.energy+t*1.5);Qn.updateSpeed(this.speed/5);let s=this.bicycle.crankAngle;if(Math.abs(s-this.lastChainTickAngle)>0.45)Qn.playChainTick(this.speed/5),this.lastChainTickAngle=s}updateCamera(t){let e=new C(0,0.9,0),n=new C,i=e.clone();switch(this.cameraMode){case"follow":n.set(-2.8,1.4,1.9),i.set(0.3,0.85,0),n.z+=this.steer*0.8;break;case"beak":n.set(0.45,1.48,0),i.set(8,1.25,this.steer*2.5);break;case"side":n.set(0,1,3.8),i.set(0,0.85,0);break;case"front":n.set(3.4,0.7,1.6),i.set(0,1.1,0);break;case"orbit":let r=this.orbitRadius*Math.sin(this.orbitPhi)*Math.sin(this.orbitTheta),a=this.orbitRadius*Math.cos(this.orbitPhi)+0.6,o=this.orbitRadius*Math.sin(this.orbitPhi)*Math.cos(this.orbitTheta);n.set(r,a,o);break}let s=this.cameraMode==="beak"?0.35:Math.min(t*6,1);if(this.camera.position.lerp(n,s),this.camera.lookAt(i),this.speed>8.5){let r=(this.speed-8.5)*0.003;this.camera.position.x+=(Math.random()-0.5)*r,this.camera.position.y+=(Math.random()-0.5)*r}}updateHUD(){let t=(this.speed*3.6).toFixed(1);if(this.speedNumEl)this.speedNumEl.innerText=t;let e=Math.round(this.speed/this.bicycle.wheelRadius/2.4*(60/(Math.PI*2)));if(this.rpmNumEl)this.rpmNumEl.innerText=e;let n=(this.distance/1000).toFixed(2);if(this.distNumEl)this.distNumEl.innerText=n;if(this.energyBarEl)this.energyBarEl.style.width=`${this.energy.toFixed(0)}%`}animate(){requestAnimationFrame(this.animate);let t=Math.min(this.clock.getDelta(),0.1);this.updatePhysics(t),this.bicycle.update(t,this.speed,this.steer,this.isWheelie),this.pelican.update(t,this.speed,this.isWheelie),this.world.update(t,this.speed),this.updateCamera(t),this.updateHUD(),this.renderer.render(this.scene,this.camera)}}function Yh(){if(!window.pelicanApp)window.pelicanApp=new Zh}if(document.readyState==="loading")window.addEventListener("DOMContentLoaded",Yh);else Yh();export{Zh as App};
