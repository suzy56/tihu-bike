var Jl="186";var $l=0,ya=1,Kl=2;var rs=1,nr=2,Di=3,Ui=0,He=1,Fe=2,un=0,as=1,os=2,va=3,Ma=4,Ql=5;var Fi=100,jl=101,tc=102,ec=103,nc=104,ic=200,sc=201,rc=202,ac=203,oc=204,lc=205,cc=206,hc=207,uc=208,dc=209,fc=210,pc=211,mc=212,gc=213,_c=214,xc=0,yc=1,vc=2,Sa=3,Mc=4,Sc=5,bc=6,Ec=7,Tc=0,wc=1,Ac=2,sn=0,ba=1,Ea=2,Ta=3,ls=4,wa=5,Aa=6,Ra=7;var Oi=301,ti=302,ir=303,sr=304,cs=306,Rc=1000,rr=1001,Cc=1002,zn=1003,Pc=1004;var hs=1005;var ze=1006,ar=1007;var ei=1008;var rn=1009,Ic=1010,Lc=1011,us=1012,Ca=1013,kn=1014,wn=1015,dn=1016,Pa=1017,Ia=1018,Bi=1020,Nc=35902,Dc=35899,Uc=1021,Fc=1022,fn=1023,ni=1026,ii=1027,Oc=1028,La=1029,si=1030,Na=1031;var Da=1033,or=33776,lr=33777,cr=33778,hr=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,Ga=36196,Ha=37492,za=37496,ka=37488,Va=37489,ur=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,Ja=37812,$a=37813,Ka=37814,Qa=37815,ja=37816,to=37817,eo=37818,no=37819,io=37820,so=37821,ro=36492,ao=36494,oo=36495,lo=36283,co=36284,dr=36285,ho=36286;var uo=0,Bc=1,ri="",Gc="srgb",fo="srgb-linear",po="linear",me="srgb";var Hc=512,zc=513,kc=514,fr=515,Vc=516,Wc=517,pr=518,Xc=519;var mo="300 es",go=2000;function Qh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jh(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ts(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qc(){let t=ts("canvas");return t.style.display="block",t}var xl={},Li=null;function _o(...t){let e="THREE."+t.shift();if(Li)Li("log",e,...t);else console.log(e,...t)}function Yc(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Bt(...t){t=Yc(t);let e="THREE."+t.shift();if(Li)Li("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function zt(...t){t=Yc(t);let e="THREE."+t.shift();if(Li)Li("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Qn(...t){let e=t.join(" ");if(e in xl)return;xl[e]=!0,Bt(...t)}function Zc(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Jc={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class An{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vr=Math.PI/180,es=180/Math.PI;function Gi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[t&255]+Le[t>>8&255]+Le[t>>16&255]+Le[t>>24&255]+"-"+Le[e&255]+Le[e>>8&255]+"-"+Le[e>>16&15|64]+Le[e>>24&255]+"-"+Le[n&63|128]+Le[n>>8&255]+"-"+Le[n>>16&255]+Le[n>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function te(t,e,n){return Math.max(e,Math.min(n,t))}function tu(t,e){return(t%e+e)%e}function Wr(t,e,n){return(1-n)*t+n*e}function Xi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Ge(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class dt{static{dt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],f=s[r+0],h=s[r+1],p=s[r+2],g=s[r+3];if(u!==g||o!==f||l!==h||c!==p){let M=o*f+l*h+c*p+u*g;if(M<0)f=-f,h=-h,p=-p,g=-g,M=-M;let m=1-a;if(M<0.9995){let d=Math.acos(M),E=Math.sin(d);m=Math.sin(m*d)/E,a=Math.sin(a*d)/E,o=o*m+f*a,l=l*m+h*a,c=c*m+p*a,u=u*m+g*a}else{o=o*m+f*a,l=l*m+h*a,c=c*m+p*a,u=u*m+g*a;let d=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=d,l*=d,c*=d,u*=d}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],f=s[r+1],h=s[r+2],p=s[r+3];return t[e]=a*p+c*u+o*h-l*f,t[e+1]=o*p+c*f+l*u-a*h,t[e+2]=l*p+c*h+a*f-o*u,t[e+3]=c*p-a*u-o*f-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),u=a(s/2),f=o(n/2),h=o(i/2),p=o(s/2);switch(r){case"XYZ":this._x=f*c*u+l*h*p,this._y=l*h*u-f*c*p,this._z=l*c*p+f*h*u,this._w=l*c*u-f*h*p;break;case"YXZ":this._x=f*c*u+l*h*p,this._y=l*h*u-f*c*p,this._z=l*c*p-f*h*u,this._w=l*c*u+f*h*p;break;case"ZXY":this._x=f*c*u-l*h*p,this._y=l*h*u+f*c*p,this._z=l*c*p+f*h*u,this._w=l*c*u-f*h*p;break;case"ZYX":this._x=f*c*u-l*h*p,this._y=l*h*u+f*c*p,this._z=l*c*p-f*h*u,this._w=l*c*u+f*h*p;break;case"YZX":this._x=f*c*u+l*h*p,this._y=l*h*u+f*c*p,this._z=l*c*p-f*h*u,this._w=l*c*u-f*h*p;break;case"XZY":this._x=f*c*u-l*h*p,this._y=l*h*u-f*c*p,this._z=l*c*p+f*h*u,this._w=l*c*u+f*h*p;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],f=n+a+u;if(f>0){let h=0.5/Math.sqrt(f+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>u){let h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{C.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Xr=new C,yl=new Rn;class Vt{static{Vt.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],f=n[2],h=n[5],p=n[8],g=i[0],M=i[3],m=i[6],d=i[1],E=i[4],w=i[7],_=i[2],T=i[5],R=i[8];return s[0]=r*g+a*d+o*_,s[3]=r*M+a*E+o*T,s[6]=r*m+a*w+o*R,s[1]=l*g+c*d+u*_,s[4]=l*M+c*E+u*T,s[7]=l*m+c*w+u*R,s[2]=f*g+h*d+p*_,s[5]=f*M+h*E+p*T,s[8]=f*m+h*w+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=c*r-a*l,f=a*o-c*s,h=l*s-r*o,p=e*u+n*f+i*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=u*g,t[1]=(i*l-c*n)*g,t[2]=(a*n-i*r)*g,t[3]=f*g,t[4]=(c*e-i*o)*g,t[5]=(i*s-a*e)*g,t[6]=h*g,t[7]=(n*o-l*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Qn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qr.makeScale(t,e)),this}rotate(t){return Qn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return Qn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var qr=new Vt,vl=new Vt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Ml=new Vt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function eu(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=En(s.r),s.g=En(s.g),s.b=En(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:vl,fromXYZ:Ml,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:vl,fromXYZ:Ml,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var ee=eu();function En(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Ii(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var xi;class xo{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(xi===void 0)xi=ts("canvas");xi.width=t.width,xi.height=t.height;let i=xi.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ts("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=En(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(En(e[n]/255)*255);else e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var nu=0;class ds{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(Yr(i[r].image));else s.push(Yr(i[r]))}else s=Yr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Yr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return xo.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Bt("Texture: Unable to serialize Texture."),{}}var iu=0,Zr=new C;class Ue extends An{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Ue.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Gi(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zr).x}get height(){return this.source.getSize(Zr).y}get depth(){return this.source.getSize(Zr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=300;Ue.DEFAULT_ANISOTROPY=1;class ve{static{ve.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],u=o[8],f=o[1],h=o[5],p=o[9],g=o[2],M=o[6],m=o[10];if(Math.abs(c-f)<0.01&&Math.abs(u-g)<0.01&&Math.abs(p-M)<0.01){if(Math.abs(c+f)<0.1&&Math.abs(u+g)<0.1&&Math.abs(p+M)<0.1&&Math.abs(l+h+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,w=(h+1)/2,_=(m+1)/2,T=(c+f)/4,R=(u+g)/4,A=(p+M)/4;if(E>w&&E>_)if(E<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(E),i=T/n,s=R/n;else if(w>_)if(w<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(w),n=T/i,s=A/i;else if(_<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(_),n=R/s,i=A/s;return this.set(n,i,s,e),this}let d=Math.sqrt((M-p)*(M-p)+(u-g)*(u-g)+(f-c)*(f-c));if(Math.abs(d)<0.001)d=1;return this.x=(M-p)/d,this.y=(u-g)/d,this.z=(f-c)/d,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yo extends An{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Ue(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(t!==null&&t.renderTarget===null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ye extends yo{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class mr extends Ue{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vo extends Ue{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class pe{static{pe.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,u,f,h,p,g,M){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,u,f,h,p,g,M)}set(t,e,n,i,s,r,a,o,l,c,u,f,h,p,g,M){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=u,m[14]=f,m[3]=h,m[7]=p,m[11]=g,m[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/yi.setFromMatrixColumn(t,0).length(),s=1/yi.setFromMatrixColumn(t,1).length(),r=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=r*c,h=r*u,p=a*c,g=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=h+p*l,e[5]=f-g*l,e[9]=-a*o,e[2]=g-f*l,e[6]=p+h*l,e[10]=r*o}else if(t.order==="YXZ"){let f=o*c,h=o*u,p=l*c,g=l*u;e[0]=f+g*a,e[4]=p*a-h,e[8]=r*l,e[1]=r*u,e[5]=r*c,e[9]=-a,e[2]=h*a-p,e[6]=g+f*a,e[10]=r*o}else if(t.order==="ZXY"){let f=o*c,h=o*u,p=l*c,g=l*u;e[0]=f-g*a,e[4]=-r*u,e[8]=p+h*a,e[1]=h+p*a,e[5]=r*c,e[9]=g-f*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let f=r*c,h=r*u,p=a*c,g=a*u;e[0]=o*c,e[4]=p*l-h,e[8]=f*l+g,e[1]=o*u,e[5]=g*l+f,e[9]=h*l-p,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let f=r*o,h=r*l,p=a*o,g=a*l;e[0]=o*c,e[4]=g-f*u,e[8]=p*u+h,e[1]=u,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*u+p,e[10]=f-g*u}else if(t.order==="XZY"){let f=r*o,h=r*l,p=a*o,g=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=f*u+g,e[5]=r*c,e[9]=h*u-p,e[2]=p*u-h,e[6]=a*c,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(su,t,ru)}lookAt(t,e,n){let i=this.elements;if(We.subVectors(t,e),We.lengthSq()===0)We.z=1;if(We.normalize(),Fn.crossVectors(n,We),Fn.lengthSq()===0){if(Math.abs(n.z)===1)We.x+=0.0001;else We.z+=0.0001;We.normalize(),Fn.crossVectors(n,We)}return Fn.normalize(),As.crossVectors(We,Fn),i[0]=Fn.x,i[4]=As.x,i[8]=We.x,i[1]=Fn.y,i[5]=As.y,i[9]=We.y,i[2]=Fn.z,i[6]=As.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],f=n[9],h=n[13],p=n[2],g=n[6],M=n[10],m=n[14],d=n[3],E=n[7],w=n[11],_=n[15],T=i[0],R=i[4],A=i[8],x=i[12],S=i[1],O=i[5],N=i[9],F=i[13],Z=i[2],I=i[6],H=i[10],J=i[14],z=i[3],at=i[7],W=i[11],Q=i[15];return s[0]=r*T+a*S+o*Z+l*z,s[4]=r*R+a*O+o*I+l*at,s[8]=r*A+a*N+o*H+l*W,s[12]=r*x+a*F+o*J+l*Q,s[1]=c*T+u*S+f*Z+h*z,s[5]=c*R+u*O+f*I+h*at,s[9]=c*A+u*N+f*H+h*W,s[13]=c*x+u*F+f*J+h*Q,s[2]=p*T+g*S+M*Z+m*z,s[6]=p*R+g*O+M*I+m*at,s[10]=p*A+g*N+M*H+m*W,s[14]=p*x+g*F+M*J+m*Q,s[3]=d*T+E*S+w*Z+_*z,s[7]=d*R+E*O+w*I+_*at,s[11]=d*A+E*N+w*H+_*W,s[15]=d*x+E*F+w*J+_*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],u=t[6],f=t[10],h=t[14],p=t[3],g=t[7],M=t[11],m=t[15],d=o*h-l*f,E=a*h-l*u,w=a*f-o*u,_=r*h-l*c,T=r*f-o*c,R=r*u-a*c;return e*(g*d-M*E+m*w)-n*(p*d-M*_+m*T)+i*(p*E-g*_+m*R)-s*(p*w-g*T+M*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],f=t[10],h=t[11],p=t[12],g=t[13],M=t[14],m=t[15],d=e*a-n*r,E=e*o-i*r,w=e*l-s*r,_=n*o-i*a,T=n*l-s*a,R=i*l-s*o,A=c*g-u*p,x=c*M-f*p,S=c*m-h*p,O=u*M-f*g,N=u*m-h*g,F=f*m-h*M,Z=d*F-E*N+w*O+_*S-T*x+R*A;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/Z;return t[0]=(a*F-o*N+l*O)*I,t[1]=(i*N-n*F-s*O)*I,t[2]=(g*R-M*T+m*_)*I,t[3]=(f*T-u*R-h*_)*I,t[4]=(o*S-r*F-l*x)*I,t[5]=(e*F-i*S+s*x)*I,t[6]=(M*w-p*R-m*E)*I,t[7]=(c*R-f*w+h*E)*I,t[8]=(r*N-a*S+l*A)*I,t[9]=(n*S-e*N-s*A)*I,t[10]=(p*T-g*w+m*d)*I,t[11]=(u*w-c*T-h*d)*I,t[12]=(a*x-r*O-o*A)*I,t[13]=(e*O-n*x+i*A)*I,t[14]=(g*E-p*_-M*d)*I,t[15]=(c*_-u*E+f*d)*I,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,u=a+a,f=s*l,h=s*c,p=s*u,g=r*c,M=r*u,m=a*u,d=o*l,E=o*c,w=o*u,{x:_,y:T,z:R}=n;return i[0]=(1-(g+m))*_,i[1]=(h+w)*_,i[2]=(p-E)*_,i[3]=0,i[4]=(h-w)*T,i[5]=(1-(f+m))*T,i[6]=(M+d)*T,i[7]=0,i[8]=(p+E)*R,i[9]=(M-d)*R,i[10]=(1-(f+g))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=yi.set(i[0],i[1],i[2]).length(),a=yi.set(i[4],i[5],i[6]).length(),o=yi.set(i[8],i[9],i[10]).length();if(s<0)r=-r;tn.copy(this);let l=1/r,c=1/a,u=1/o;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=c,tn.elements[5]*=c,tn.elements[6]*=c,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i),p,g;if(o)p=s/(r-s),g=r*s/(r-s);else if(a===2000)p=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===2001)p=-r/(r-s),g=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),h=-(n+i)/(n-i),p,g;if(o)p=1/(r-s),g=r/(r-s);else if(a===2000)p=-2/(r-s),g=-(r+s)/(r-s);else if(a===2001)p=-1/(r-s),g=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var yi=new C,tn=new pe,su=new C(0,0,0),ru=new C(1,1,1),Fn=new C,As=new C,We=new C,Sl=new pe,bl=new Rn;class Tn{constructor(t=0,e=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],f=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin(te(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(f,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-te(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(te(f,-1,1)),Math.abs(f)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(f,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(te(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-te(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(f,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class gr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var au=0,El=new C,vi=new Rn,yn=new pe,Rs=new C,qi=new C,ou=new C,lu=new Rn,Tl=new C(1,0,0),wl=new C(0,1,0),Al=new C(0,0,1),Rl={type:"added"},cu={type:"removed"},Mi={type:"childadded",child:null},Jr={type:"childremoved",child:null};class be extends An{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();let t=new C,e=new Tn,n=new Rn,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new Vt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.multiply(vi),this}rotateOnWorldAxis(t,e){return vi.setFromAxisAngle(t,e),this.quaternion.premultiply(vi),this}rotateX(t){return this.rotateOnAxis(Tl,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,e){return El.copy(t).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tl,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Rs.copy(t);else Rs.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)yn.lookAt(qi,Rs,this.up);else yn.lookAt(Rs,qi,this.up);if(this.quaternion.setFromRotationMatrix(yn),i)yn.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(yn),this.quaternion.premultiply(vi.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return zt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rl),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null;else zt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(cu),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld);return t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rl),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),u=r(t.shapes),f=r(t.skeletons),h=r(t.animations),p=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(f.length>0)n.skeletons=f;if(h.length>0)n.animations=h;if(p.length>0)n.nodes=p}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}be.DEFAULT_UP=new C(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ut extends be{constructor(){super();this.isGroup=!0,this.type="Group"}}var hu={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let g of t.hand.values()){let M=e.getJointPose(g,n),m=this._getHandJoint(l,g);if(M!==null)m.matrix.fromArray(M.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=M.radius;m.visible=M!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),h=0.02,p=0.005;if(l.inputState.pinching&&f>h+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&f<=h-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(hu)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function $r(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=tu(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=$r(r,s,t+0.3333333333333333),this.g=$r(r,s,t),this.b=$r(r,s,t-0.3333333333333333)}return ee.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=$c[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Bt("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return ee.workingToColorSpace(Ne.copy(this),t),Math.round(te(Ne.r*255,0,255))*65536+Math.round(te(Ne.g*255,0,255))*256+Math.round(te(Ne.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ne.copy(this),e);let{r:n,g:i,b:s}=Ne,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t="srgb"){ee.workingToColorSpace(Ne.copy(this),t);let{r:e,g:n,b:i}=Ne;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Cs);let n=Wr(On.h,Cs.h,e),i=Wr(On.s,Cs.s,e),s=Wr(On.l,Cs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ne=new kt;kt.NAMES=$c;class ps{constructor(t,e=0.00025){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new ps(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _r extends be{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();return e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}var en=new C,vn=new C,Kr=new C,Mn=new C,Si=new C,bi=new C,Cl=new C,Qr=new C,jr=new C,ta=new C,ea=new ve,na=new ve,ia=new ve;class $e{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){en.subVectors(i,e),vn.subVectors(n,e),Kr.subVectors(t,e);let r=en.dot(en),a=en.dot(vn),o=en.dot(Kr),l=vn.dot(vn),c=vn.dot(Kr),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,h=(l*o-a*c)*f,p=(r*c-a*o)*f;return s.set(1-h-p,p,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Mn)===null)return!1;return Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Mn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Mn.x),o.addScaledVector(r,Mn.y),o.addScaledVector(a,Mn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,n),ia.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ea,s.x),r.addScaledVector(na,s.y),r.addScaledVector(ia,s.z),r}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),vn.subVectors(t,e),en.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),en.cross(vn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;Si.subVectors(i,n),bi.subVectors(s,n),Qr.subVectors(t,n);let o=Si.dot(Qr),l=bi.dot(Qr);if(o<=0&&l<=0)return e.copy(n);jr.subVectors(t,i);let c=Si.dot(jr),u=bi.dot(jr);if(c>=0&&u<=c)return e.copy(i);let f=o*u-c*l;if(f<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(Si,r);ta.subVectors(t,s);let h=Si.dot(ta),p=bi.dot(ta);if(p>=0&&h<=p)return e.copy(s);let g=h*l-o*p;if(g<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(bi,a);let M=c*p-h*u;if(M<=0&&u-c>=0&&h-p>=0)return Cl.subVectors(s,i),a=(u-c)/(u-c+(h-p)),e.copy(i).addScaledVector(Cl,a);let m=1/(M+g+f);return r=g*m,a=f*m,e.copy(n).addScaledVector(Si,r).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ai{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=nn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,nn);else nn.fromBufferAttribute(s,r);nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Ps.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Ps.copy(n.boundingBox)}Ps.applyMatrix4(t.matrixWorld),this.union(Ps)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),Is.subVectors(this.max,Yi),Ei.subVectors(t.a,Yi),Ti.subVectors(t.b,Yi),wi.subVectors(t.c,Yi),Bn.subVectors(Ti,Ei),Gn.subVectors(wi,Ti),Zn.subVectors(Ei,wi);let e=[0,-Bn.z,Bn.y,0,-Gn.z,Gn.y,0,-Zn.z,Zn.y,Bn.z,0,-Bn.x,Gn.z,0,-Gn.x,Zn.z,0,-Zn.x,-Bn.y,Bn.x,0,-Gn.y,Gn.x,0,-Zn.y,Zn.x,0];if(!sa(e,Ei,Ti,wi,Is))return!1;if(e=[1,0,0,0,1,0,0,0,1],!sa(e,Ei,Ti,wi,Is))return!1;return Ls.crossVectors(Bn,Gn),e=[Ls.x,Ls.y,Ls.z],sa(e,Ei,Ti,wi,Is)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(nn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Sn=[new C,new C,new C,new C,new C,new C,new C,new C],nn=new C,Ps=new ai,Ei=new C,Ti=new C,wi=new C,Bn=new C,Gn=new C,Zn=new C,Yi=new C,Is=new C,Ls=new C,Jn=new C;function sa(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Jn.fromArray(t,r);let o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),c=n.dot(Jn),u=i.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var we=new C,Ns=new dt,uu=0;class qe extends An{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Xi(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=Ge(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Xi(e,this.array);return e}setX(t,e){if(this.normalized)e=Ge(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Xi(e,this.array);return e}setY(t,e){if(this.normalized)e=Ge(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Xi(e,this.array);return e}setZ(t,e){if(this.normalized)e=Ge(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Xi(e,this.array);return e}setW(t,e){if(this.normalized)e=Ge(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=Ge(e,this.array),n=Ge(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=Ge(e,this.array),n=Ge(n,this.array),i=Ge(i,this.array),s=Ge(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yr extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}var du=new ai,Zi=new C,ra=new C;class oi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else du.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);let e=Zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Zi,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(ra)),this.expandByPoint(Zi.copy(t.center).sub(ra));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var fu=0,Je=new pe,aa=new be,Ai=new C,Xe=new ai,Ji=new ai,Ce=new C;class ge extends An{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Qh(t))?yr:xr)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new ai;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Xe.setFromBufferAttribute(s),this.morphTargetsRelative)Ce.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Ce);else this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new oi;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Ji.setFromBufferAttribute(a),this.morphTargetsRelative)Ce.addVectors(Xe.min,Ji.min),Xe.expandByPoint(Ce),Ce.addVectors(Xe.max,Ji.max),Xe.expandByPoint(Ce);else Xe.expandByPoint(Ji.min),Xe.expandByPoint(Ji.max)}Xe.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Ce.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Ce.fromBufferAttribute(a,l),o)Ai.fromBufferAttribute(t,l),Ce.add(Ai);i=Math.max(i,n.distanceToSquared(Ce))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let A=0;A<n.count;A++)a[A]=new C,o[A]=new C;let l=new C,c=new C,u=new C,f=new dt,h=new dt,p=new dt,g=new C,M=new C;function m(A,x,S){l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,A),h.fromBufferAttribute(s,x),p.fromBufferAttribute(s,S),c.sub(l),u.sub(l),h.sub(f),p.sub(f);let O=1/(h.x*p.y-p.x*h.y);if(!isFinite(O))return;g.copy(c).multiplyScalar(p.y).addScaledVector(u,-h.y).multiplyScalar(O),M.copy(u).multiplyScalar(h.x).addScaledVector(c,-p.x).multiplyScalar(O),a[A].add(g),a[x].add(g),a[S].add(g),o[A].add(M),o[x].add(M),o[S].add(M)}let d=this.groups;if(d.length===0)d=[{start:0,count:t.count}];for(let A=0,x=d.length;A<x;++A){let S=d[A],{start:O,count:N}=S;for(let F=O,Z=O+N;F<Z;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let E=new C,w=new C,_=new C,T=new C;function R(A){_.fromBufferAttribute(i,A),T.copy(_);let x=a[A];E.copy(x),E.sub(_.multiplyScalar(_.dot(x))).normalize(),w.crossVectors(T,x);let O=w.dot(o[A])<0?-1:1;r.setXYZW(A,E.x,E.y,E.z,O)}for(let A=0,x=d.length;A<x;++A){let S=d[A],{start:O,count:N}=S;for(let F=O,Z=O+N;F<Z;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let i=new C,s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C;if(t)for(let f=0,h=t.count;f<h;f+=3){let p=t.getX(f+0),g=t.getX(f+1),M=t.getX(f+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),a.add(c),o.add(c),l.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z)}else for(let f=0,h=e.count;f<h;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:u}=a,f=new l.constructor(o.length*c),h=0,p=0;for(let g=0,M=o.length;g<M;g++){if(a.isInterleavedBufferAttribute)h=o[g]*a.data.stride+a.offset;else h=o[g]*c;for(let m=0;m<c;m++)f[p++]=l[h++]}return new qe(f,c,u)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new ge,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let f=l[c],h=t(f,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,f=l.length;u<f;u++){let h=l[u];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],u=s[l];for(let f=0,h=u.length;f<h;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var oa=new C,pu=new C,mu=new Vt;class cn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=oa.subVectors(n,e).cross(pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(oa),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mu.getNormalMatrix(t),i=this.coplanarPoint(oa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}var gu=0;class Cn extends An{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new kt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.retroreflectivity!==void 0)this.retroreflectivity=t.retroreflectivity;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.clippingPlanes!==void 0)this.clippingPlanes=t.clippingPlanes.map((n)=>new cn().fromJSON(n));if(t.clipIntersection!==void 0)this.clipIntersection=t.clipIntersection;if(t.clipShadows!==void 0)this.clipShadows=t.clipShadows;if(t.depthPacking!==void 0)this.depthPacking=t.depthPacking;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.linecap!==void 0)this.linecap=t.linecap;if(t.linejoin!==void 0)this.linejoin=t.linejoin;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new dt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new dt().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}var bn=new C,la=new C,Ds=new C,Us=new C;class ms{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){la.copy(t).add(e).multiplyScalar(0.5),Ds.copy(e).sub(t).normalize(),Us.copy(this.origin).sub(la);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Ds),a=Us.dot(this.direction),o=-Us.dot(Ds),l=Us.lengthSq(),c=Math.abs(1-r*r),u,f,h,p;if(c>0)if(u=r*o-a,f=r*a-o,p=s*c,u>=0)if(f>=-p)if(f<=p){let g=1/c;u*=g,f*=g,h=u*(u+r*f+2*a)+f*(r*u+f+2*o)+l}else f=s,u=Math.max(0,-(r*f+a)),h=-u*u+f*(f+2*o)+l;else f=-s,u=Math.max(0,-(r*f+a)),h=-u*u+f*(f+2*o)+l;else if(f<=-p)u=Math.max(0,-(-r*s+a)),f=u>0?-s:Math.min(Math.max(-s,-o),s),h=-u*u+f*(f+2*o)+l;else if(f<=p)u=0,f=Math.min(Math.max(-s,-o),s),h=f*(f+2*o)+l;else u=Math.max(0,-(r*s+a)),f=u>0?s:Math.min(Math.max(-s,-o),s),h=-u*u+f*(f+2*o)+l;else f=r>0?-s:s,u=Math.max(0,-(r*f+a)),h=-u*u+f*(f+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(la).addScaledVector(Ds,f);return h}intersectSphere(t,e){if(t.radius<0)return null;bn.subVectors(t.center,this.origin);let n=bn.dot(this.direction),i=bn.dot(bn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;if(l>=0)n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l;else n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l;if(c>=0)s=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c;else s=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(t.min.z-f.z)*u,o=(t.max.z-f.z)*u;else a=(t.max.z-f.z)*u,o=(t.min.z-f.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,{x:o,y:l,z:c}=a,u=t.x-r.x,f=t.y-r.y,h=t.z-r.z,p=e.x-r.x,g=e.y-r.y,M=e.z-r.z,m=n.x-r.x,d=n.y-r.y,E=n.z-r.z,w=Math.abs(o),_=Math.abs(l),T=Math.abs(c),R,A,x,S,O,N,F,Z,I,H,J,z;if(w>=_&&w>=T)if(x=o,N=u,I=p,z=m,o>=0)R=l,A=c,S=f,O=h,F=g,Z=M,H=d,J=E;else R=c,A=l,S=h,O=f,F=M,Z=g,H=E,J=d;else if(_>=T)if(x=l,N=f,I=g,z=d,l>=0)R=c,A=o,S=h,O=u,F=M,Z=p,H=E,J=m;else R=o,A=c,S=u,O=h,F=p,Z=M,H=m,J=E;else if(x=c,N=h,I=M,z=E,c>=0)R=o,A=l,S=u,O=f,F=p,Z=g,H=m,J=d;else R=l,A=o,S=f,O=u,F=g,Z=p,H=d,J=m;if(x===0)return null;let at=R/x,W=A/x,Q=1/x,nt=S-at*N,Lt=O-W*N,Nt=F-at*I,le=Z-W*I,Yt=H-at*z,q=J-W*z,lt=Yt*le-q*Nt,rt=nt*q-Lt*Yt,Dt=Nt*Lt-le*nt;if(i){if(lt<0||rt<0||Dt<0)return null}else if((lt<0||rt<0||Dt<0)&&(lt>0||rt>0||Dt>0))return null;let Gt=lt+rt+Dt;if(Gt===0)return null;let wt=Q*(lt*N+rt*I+Dt*z);if(Gt>0?wt<0:wt>0)return null;return this.at(wt/Gt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vn extends Cn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Pl=new pe,$n=new ms,Fs=new oi,Il=new C,Os=new C,Bs=new C,Gs=new C,ca=new C,Hs=new C,Ll=new C,zs=new C;class it extends be{constructor(t=new ge,e=new Vn){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Hs.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(ca.fromBufferAttribute(u,t),r)Hs.addScaledVector(ca,c);else Hs.addScaledVector(ca.sub(e),c)}e.add(Hs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),$n.copy(t.ray).recast(t.near),Fs.containsPoint($n.origin)===!1){if($n.intersectSphere(Fs,Il)===null)return;if($n.origin.distanceToSquared(Il)>(t.far-t.near)**2)return}if(Pl.copy(s).invert(),$n.copy(t.ray).applyMatrix4(Pl),n.boundingBox!==null){if($n.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,$n)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,{groups:f,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let p=0,g=f.length;p<g;p++){let M=f[p],m=r[M.materialIndex],d=Math.max(M.start,h.start),E=Math.min(a.count,Math.min(M.start+M.count,h.start+h.count));for(let w=d,_=E;w<_;w+=3){let T=a.getX(w),R=a.getX(w+1),A=a.getX(w+2);if(i=ks(this,m,t,n,l,c,u,T,R,A),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=M.materialIndex,e.push(i)}}else{let p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let M=p,m=g;M<m;M+=3){let d=a.getX(M),E=a.getX(M+1),w=a.getX(M+2);if(i=ks(this,r,t,n,l,c,u,d,E,w),i)i.faceIndex=Math.floor(M/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,g=f.length;p<g;p++){let M=f[p],m=r[M.materialIndex],d=Math.max(M.start,h.start),E=Math.min(o.count,Math.min(M.start+M.count,h.start+h.count));for(let w=d,_=E;w<_;w+=3){let T=w,R=w+1,A=w+2;if(i=ks(this,m,t,n,l,c,u,T,R,A),i)i.faceIndex=Math.floor(w/3),i.face.materialIndex=M.materialIndex,e.push(i)}}else{let p=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let M=p,m=g;M<m;M+=3){let d=M,E=M+1,w=M+2;if(i=ks(this,r,t,n,l,c,u,d,E,w),i)i.faceIndex=Math.floor(M/3),e.push(i)}}}}function _u(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;zs.copy(o),zs.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(zs);if(c<n.near||c>n.far)return null;return{distance:c,point:zs.clone(),object:t}}function ks(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Os),t.getVertexPosition(l,Bs),t.getVertexPosition(c,Gs);let u=_u(t,e,n,i,Os,Bs,Gs,Ll);if(u){let f=new C;if($e.getBarycoord(Ll,Os,Bs,Gs,f),s)u.uv=$e.getInterpolatedAttribute(s,o,l,c,f,new dt);if(r)u.uv1=$e.getInterpolatedAttribute(r,o,l,c,f,new dt);if(a){if(u.normal=$e.getInterpolatedAttribute(a,o,l,c,f,new C),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new C,materialIndex:0};$e.getNormal(Os,Bs,Gs,h.normal),u.face=h,u.barycoord=f}return u}class Mo extends Ue{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,u,f){super(null,r,a,o,l,c,i,s,u,f);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Kn=new oi,xu=new dt(0.5,0.5),Vs=new C;class gs{constructor(t=new cn,e=new cn,n=new cn,i=new cn,s=new cn,r=new cn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],g=s[9],M=s[10],m=s[11],d=s[12],E=s[13],w=s[14],_=s[15];if(i[0].setComponents(l-r,h-c,m-p,_-d).normalize(),i[1].setComponents(l+r,h+c,m+p,_+d).normalize(),i[2].setComponents(l+a,h+u,m+g,_+E).normalize(),i[3].setComponents(l-a,h-u,m-g,_-E).normalize(),n)i[4].setComponents(o,f,M,w).normalize(),i[5].setComponents(l-o,h-f,m-M,_-w).normalize();else if(i[4].setComponents(l-o,h-f,m-M,_-w).normalize(),e===2000)i[5].setComponents(l+o,h+f,m+M,_+w).normalize();else if(e===2001)i[5].setComponents(o,f,M,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){Kn.center.set(0,0,0);let e=xu.distanceTo(t.center);return Kn.radius=0.7071067811865476+e,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Vs.x=i.normal.x>0?t.max.x:t.min.x,Vs.y=i.normal.y>0?t.max.y:t.min.y,Vs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wn extends Cn{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var Qs=new C,js=new C,Nl=new pe,$i=new ms,Ws=new oi,ha=new C,Dl=new C;class li extends be{constructor(t=new ge,e=new Wn){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Qs.fromBufferAttribute(e,i-1),js.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Qs.distanceTo(js);t.setAttribute("lineDistance",new ne(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=s,t.ray.intersectsSphere(Ws)===!1)return;Nl.copy(i).invert(),$i.copy(t.ray).applyMatrix4(Nl);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=h,M=p-1;g<M;g+=l){let m=c.getX(g),d=c.getX(g+1),E=Xs(this,t,$i,o,m,d,g);if(E)e.push(E)}if(this.isLineLoop){let g=c.getX(p-1),M=c.getX(h),m=Xs(this,t,$i,o,g,M,p-1);if(m)e.push(m)}}else{let h=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let g=h,M=p-1;g<M;g+=l){let m=Xs(this,t,$i,o,g,g+1,g);if(m)e.push(m)}if(this.isLineLoop){let g=Xs(this,t,$i,o,p-1,h,p-1);if(g)e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xs(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(Qs.fromBufferAttribute(o,s),js.fromBufferAttribute(o,r),n.distanceSqToSegment(Qs,js,ha,Dl)>i)return;ha.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(ha);if(c<e.near||c>e.far)return;return{distance:c,point:Dl.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class _s extends Cn{constructor(t){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Ul=new pe,ga=new ms,qs=new oi,Ys=new C;class vr extends be{constructor(t=new ge,e=new _s){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=s,t.ray.intersectsSphere(qs)===!1)return;Ul.copy(i).invert(),ga.copy(t.ray).applyMatrix4(Ul);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let p=f,g=h;p<g;p++){let M=l.getX(p);Ys.fromBufferAttribute(u,M),Fl(Ys,M,o,i,t,e,this)}}else{let f=Math.max(0,r.start),h=Math.min(u.count,r.start+r.count);for(let p=f,g=h;p<g;p++)Ys.fromBufferAttribute(u,p),Fl(Ys,p,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fl(t,e,n,i,s,r,a){let o=ga.distanceSqToPoint(t);if(o<n){let l=new C;ga.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Mr extends Ue{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ci extends Ue{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class So extends ci{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Sr extends Ue{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Se extends ge{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],f=0,h=0;p("z","y","x",-1,-1,n,e,t,r,s,0),p("z","y","x",1,-1,n,e,-t,r,s,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(u,2));function p(g,M,m,d,E,w,_,T,R,A,x){let S=w/R,O=_/A,N=w/2,F=_/2,Z=T/2,I=R+1,H=A+1,J=0,z=0,at=new C;for(let W=0;W<H;W++){let Q=W*O-F;for(let nt=0;nt<I;nt++){let Lt=nt*S-N;at[g]=Lt*d,at[M]=Q*E,at[m]=Z,l.push(at.x,at.y,at.z),at[g]=0,at[M]=0,at[m]=T>0?1:-1,c.push(at.x,at.y,at.z),u.push(nt/R),u.push(1-W/A),J+=1}}for(let W=0;W<A;W++)for(let Q=0;Q<R;Q++){let nt=f+Q+I*W,Lt=f+Q+I*(W+1),Nt=f+(Q+1)+I*(W+1),le=f+(Q+1)+I*W;o.push(nt,Lt,le),o.push(Lt,Nt,le),z+=6}a.addGroup(h,z,x),h+=z,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Pn extends ge{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],o=[],l=new C,c=new dt;r.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let u=0,f=3;u<=e;u++,f+=3){let h=n+u/e*i;l.x=t*Math.cos(h),l.y=t*Math.sin(h),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[f]/t+1)/2,c.y=(r[f+1]/t+1)/2,o.push(c.x,c.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class re extends ge{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],u=[],f=[],h=[],p=0,g=[],M=n/2,m=0;if(d(),r===!1){if(t>0)E(!0);if(e>0)E(!1)}this.setIndex(c),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(h,2));function d(){let w=new C,_=new C,T=0,R=(e-t)/n;for(let A=0;A<=s;A++){let x=[],S=A/s,O=S*(e-t)+t;for(let N=0;N<=i;N++){let F=N/i,Z=F*o+a,I=Math.sin(Z),H=Math.cos(Z);_.x=O*I,_.y=-S*n+M,_.z=O*H,u.push(_.x,_.y,_.z),w.set(I,R,H).normalize(),f.push(w.x,w.y,w.z),h.push(F,1-S),x.push(p++)}g.push(x)}for(let A=0;A<i;A++)for(let x=0;x<s;x++){let S=g[x][A],O=g[x+1][A],N=g[x+1][A+1],F=g[x][A+1];if(t>0||x!==0)c.push(S,O,F),T+=3;if(e>0||x!==s-1)c.push(O,N,F),T+=3}l.addGroup(m,T,0),m+=T}function E(w){let _=p,T=new dt,R=new C,A=0,x=w===!0?t:e,S=w===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,M*S,0),f.push(0,S,0),h.push(0.5,0.5),p++;let O=p;for(let N=0;N<=i;N++){let Z=N/i*o+a,I=Math.cos(Z),H=Math.sin(Z);R.x=x*H,R.y=M*S,R.z=x*I,u.push(R.x,R.y,R.z),f.push(0,S,0),T.x=I*0.5+0.5,T.y=H*0.5*S+0.5,h.push(T.x,T.y),p++}for(let N=0;N<i;N++){let F=_+N,Z=O+N;if(w===!0)c.push(Z,Z+1,F);else c.push(Z+1,Z,F);A+=3}l.addGroup(m,A,w===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pe extends re{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Pe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class br extends ge{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(s.slice(),3)),this.setAttribute("uv",new ne(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(d){let E=new C,w=new C,_=new C;for(let T=0;T<e.length;T+=3)h(e[T+0],E),h(e[T+1],w),h(e[T+2],_),o(E,w,_,d)}function o(d,E,w,_){let T=_+1,R=[];for(let A=0;A<=T;A++){R[A]=[];let x=d.clone().lerp(w,A/T),S=E.clone().lerp(w,A/T),O=T-A;for(let N=0;N<=O;N++)if(N===0&&A===T)R[A][N]=x;else R[A][N]=x.clone().lerp(S,N/O)}for(let A=0;A<T;A++)for(let x=0;x<2*(T-A)-1;x++){let S=Math.floor(x/2);if(x%2===0)f(R[A][S+1]),f(R[A+1][S]),f(R[A][S]);else f(R[A][S+1]),f(R[A+1][S+1]),f(R[A+1][S])}}function l(d){let E=new C;for(let w=0;w<s.length;w+=3)E.x=s[w+0],E.y=s[w+1],E.z=s[w+2],E.normalize().multiplyScalar(d),s[w+0]=E.x,s[w+1]=E.y,s[w+2]=E.z}function c(){let d=new C;for(let E=0;E<s.length;E+=3){d.x=s[E+0],d.y=s[E+1],d.z=s[E+2];let w=M(d)/2/Math.PI+0.5,_=m(d)/Math.PI+0.5;r.push(w,1-_)}p(),u()}function u(){for(let d=0;d<r.length;d+=6){let E=r[d+0],w=r[d+2],_=r[d+4],T=Math.max(E,w,_),R=Math.min(E,w,_);if(T>0.9&&R<0.1){if(E<0.2)r[d+0]+=1;if(w<0.2)r[d+2]+=1;if(_<0.2)r[d+4]+=1}}}function f(d){s.push(d.x,d.y,d.z)}function h(d,E){let w=d*3;E.x=t[w+0],E.y=t[w+1],E.z=t[w+2]}function p(){let d=new C,E=new C,w=new C,_=new C,T=new dt,R=new dt,A=new dt;for(let x=0,S=0;x<s.length;x+=9,S+=6){d.set(s[x+0],s[x+1],s[x+2]),E.set(s[x+3],s[x+4],s[x+5]),w.set(s[x+6],s[x+7],s[x+8]),T.set(r[S+0],r[S+1]),R.set(r[S+2],r[S+3]),A.set(r[S+4],r[S+5]),_.copy(d).add(E).add(w).divideScalar(3);let O=M(_);g(T,S+0,d,O),g(R,S+2,E,O),g(A,S+4,w,O)}}function g(d,E,w,_){if(_<0&&d.x===1)r[E]=d.x-1;if(w.x===0&&w.z===0)r[E]=_/2/Math.PI+0.5}function M(d){return Math.atan2(d.z,-d.x)}function m(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.vertices,t.indices,t.radius,t.detail)}}class xs extends br{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,e);this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xs(t.radius,t.detail)}}class Ke{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],f=n[i+1]-c,h=(r-c)/f;return(i+h)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new dt:new C);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,i=[],s=[],r=[],a=new C,o=new pe;for(let h=0;h<=t;h++){let p=h/t;i[h]=this.getTangentAt(p,new C)}s[0]=new C,r[0]=new C;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(u<=l)l=u,n.set(0,1,0);if(f<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(te(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,p))}r[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos(te(s[0].dot(s[t]),-1,1));if(h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)h=-h;for(let p=1;p<=t;p++)s[p].applyMatrix4(o.makeRotationAxis(i[p],h*p)),r[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pn extends Ke{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new dt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=o-this.aX,h=l-this.aY;o=f*c-h*u+this.aX,l=f*u+h*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bo extends pn{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function Eo(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,p*=u,s(a,o,h,p)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var Ol=new C,Bl=new C,ua=new Eo,da=new Eo,fa=new Eo;class hi extends Ke{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else Bl.subVectors(i[0],i[1]).add(i[0]),l=Bl;let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else Ol.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Ol;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,p=Math.pow(l.distanceToSquared(u),h),g=Math.pow(u.distanceToSquared(f),h),M=Math.pow(f.distanceToSquared(c),h);if(g<0.0001)g=1;if(p<0.0001)p=g;if(M<0.0001)M=g;ua.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,p,g,M),da.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,p,g,M),fa.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,p,g,M)}else if(this.curveType==="catmullrom")ua.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),da.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),fa.initCatmullRom(l.z,u.z,f.z,c.z,this.tension);return n.set(ua.calc(o),da.calc(o),fa.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gl(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function yu(t,e){let n=1-t;return n*n*e}function vu(t,e){return 2*(1-t)*t*e}function Mu(t,e){return t*t*e}function Qi(t,e,n,i){return yu(t,e)+vu(t,n)+Mu(t,i)}function Su(t,e){let n=1-t;return n*n*n*e}function bu(t,e){let n=1-t;return 3*n*n*t*e}function Eu(t,e){return 3*(1-t)*t*t*e}function Tu(t,e){return t*t*t*e}function ji(t,e,n,i,s){return Su(t,e)+bu(t,n)+Eu(t,i)+Tu(t,s)}class Er extends Ke{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ji(t,i.x,s.x,r.x,a.x),ji(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class To extends Ke{constructor(t=new C,e=new C,n=new C,i=new C){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(ji(t,i.x,s.x,r.x,a.x),ji(t,i.y,s.y,r.y,a.y),ji(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tr extends Ke{constructor(t=new dt,e=new dt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wo extends Ke{constructor(t=new C,e=new C){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wr extends Ke{constructor(t=new dt,e=new dt,n=new dt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Qi(t,i.x,s.x,r.x),Qi(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xn extends Ke{constructor(t=new C,e=new C,n=new C){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Qi(t,i.x,s.x,r.x),Qi(t,i.y,s.y,r.y),Qi(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ar extends Ke{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Gl(a,o.x,l.x,c.x,u.x),Gl(a,o.y,l.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var tr=Object.freeze({__proto__:null,ArcCurve:bo,CatmullRomCurve3:hi,CubicBezierCurve:Er,CubicBezierCurve3:To,EllipseCurve:pn,LineCurve:Tr,LineCurve3:wo,QuadraticBezierCurve:wr,QuadraticBezierCurve3:Xn,SplineCurve:Ar});class Ao extends Ke{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new tr[i.type]().fromJSON(i))}return this}}class er extends Ao{constructor(t){super();if(this.type="Path",this.currentPoint=new dt,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Tr(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new wr(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new Er(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ar(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new pn(t,e,n,i,s,r,a,o);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class In extends er{constructor(t){super(t);this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new er().fromJSON(i))}return this}}function wu(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=Kc(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=Iu(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let u=o,f=l;for(let h=n;h<s;h+=n){let p=t[h],g=t[h+1];if(p<o)o=p;if(g<l)l=g;if(p>u)u=p;if(g>f)f=g}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return ns(r,a,n,o,l,c,0),a}function Kc(t,e,n,i,s){let r;if(s===ku(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=Hl(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=Hl(a/i|0,t[a],t[a+1],r);if(r&&Ni(r,r.next))ss(r),r=r.next;return r}function jn(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(Ni(n,n.next)||Me(n.prev,n,n.next)===0)){if(ss(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ns(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)Fu(t,i,s,r);let o=t;while(t.prev!==t.next){let l=t.prev,c=t.next;if(r?Ru(t,i,s,r):Au(t)){e.push(l.i,t.i,c.i),ss(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)ns(jn(t),e,n,i,s,r,1);else if(a===1)t=Cu(jn(t),e),ns(t,e,n,i,s,r,2);else if(a===2)Pu(t,e,n,i,s,r);break}}}function Au(t){let e=t.prev,n=t,i=t.next;if(Me(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),p=Math.max(o,l,c),g=i.next;while(g!==e){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&Ki(s,o,r,l,a,c,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ru(t,e,n,i){let s=t.prev,r=t,a=t.next;if(Me(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,p=Math.min(o,l,c),g=Math.min(u,f,h),M=Math.max(o,l,c),m=Math.max(u,f,h),d=_a(p,g,e,n,i),E=_a(M,m,e,n,i),{prevZ:w,nextZ:_}=t;while(w&&w.z>=d&&_&&_.z<=E){if(w.x>=p&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Ki(o,u,l,f,c,h,w.x,w.y)&&Me(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,_.x>=p&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Ki(o,u,l,f,c,h,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.nextZ}while(w&&w.z>=d){if(w.x>=p&&w.x<=M&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Ki(o,u,l,f,c,h,w.x,w.y)&&Me(w.prev,w,w.next)>=0)return!1;w=w.prevZ}while(_&&_.z<=E){if(_.x>=p&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Ki(o,u,l,f,c,h,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Cu(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!Ni(i,s)&&jc(i,n,n.next,s)&&is(i,s)&&is(s,i))e.push(i.i,n.i,s.i),ss(n),ss(n.next),n=t=s;n=n.next}while(n!==t);return jn(n)}function Pu(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&Gu(a,o)){let l=th(a,o);a=jn(a,a.next),l=jn(l,l.next),ns(a,e,n,i,s,r,0),ns(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function Iu(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=Kc(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(Bu(c))}s.sort(Lu);for(let r=0;r<s.length;r++)n=Nu(s[r],n);return n}function Lu(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function Nu(t,e){let n=Du(t,e);if(!n)return e;let i=th(n,t);return jn(i,i.next),jn(n,n.next)}function Du(t,e){let n=e,{x:i,y:s}=t,r=-1/0,a;if(Ni(t,n))return n;do{if(Ni(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let f=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>r){if(r=f,a=n.x<n.next.x?n:n.next,f===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Qc(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let f=Math.abs(s-n.y)/(i-n.x);if(is(n,t)&&(f<u||f===u&&(n.x>a.x||n.x===a.x&&Uu(a,n))))a=n,u=f}n=n.next}while(n!==o);return a}function Uu(t,e){return Me(t.prev,t,e.prev)<0&&Me(e.next,t,t.next)<0}function Fu(t,e,n,i){let s=t;do{if(s.z===0)s.z=_a(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,Ou(s)}function Ou(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function _a(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Bu(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function Qc(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function Ki(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&Qc(t,e,n,i,s,r,a,o)}function Gu(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Hu(t,e)&&(is(t,e)&&is(e,t)&&zu(t,e)&&(Me(t.prev,t,e.prev)||Me(t,e.prev,e))||Ni(t,e)&&Me(t.prev,t,t.next)>0&&Me(e.prev,e,e.next)>0)}function Me(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ni(t,e){return t.x===e.x&&t.y===e.y}function jc(t,e,n,i){let s=Js(Me(t,e,n)),r=Js(Me(t,e,i)),a=Js(Me(n,i,t)),o=Js(Me(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&Zs(t,n,e))return!0;if(r===0&&Zs(t,i,e))return!0;if(a===0&&Zs(n,t,i))return!0;if(o===0&&Zs(n,e,i))return!0;return!1}function Zs(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Js(t){return t>0?1:t<0?-1:0}function Hu(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&jc(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function is(t,e){return Me(t.prev,t,t.next)<0?Me(t,e,t.next)>=0&&Me(t,t.prev,e)>=0:Me(t,e,t.prev)<0||Me(t,t.next,e)<0}function zu(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function th(t,e){let n=xa(t.i,t.x,t.y),i=xa(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Hl(t,e,n,i){let s=xa(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function ss(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function xa(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ku(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class eh{static triangulate(t,e,n=2){return wu(t,e,n)}}class hn{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return hn.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];zl(t),kl(n,t);let r=t.length;e.forEach(zl);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,kl(n,e[o]);let a=eh.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function zl(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function kl(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Hi extends ge{constructor(t=new In([new dt(0.5,0.5),new dt(-0.5,0.5),new dt(-0.5,-0.5),new dt(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a];r(l)}this.setAttribute("position",new ne(i,3)),this.setAttribute("uv",new ne(s,2)),this.computeVertexNormals();function r(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:0.2,p=e.bevelSize!==void 0?e.bevelSize:h-0.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,M=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,d=e.UVGenerator!==void 0?e.UVGenerator:Vu,E,w=!1,_,T,R,A;if(m){E=m.getSpacedPoints(c),w=!0,f=!1;let j=m.isCatmullRomCurve3?m.closed:!1;_=m.computeFrenetFrames(c,j),T=new C,R=new C,A=new C}if(!f)M=0,h=0,p=0,g=0;let x=a.extractPoints(l),{shape:S,holes:O}=x;if(!hn.isClockWise(S)){S=S.reverse();for(let j=0,st=O.length;j<st;j++){let ot=O[j];if(hn.isClockWise(ot))O[j]=ot.reverse()}}function F(j){let ct=j[0];for(let vt=1;vt<=j.length;vt++){let Pt=vt%j.length,Ft=j[Pt],Wt=Ft.x-ct.x,Xt=Ft.y-ct.y,P=Wt*Wt+Xt*Xt,ue=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(ct.x),Math.abs(ct.y)),Kt=0.000000000000000000010000000000000001*ue*ue;if(P<=Kt){j.splice(Pt,1),vt--;continue}ct=Ft}}F(S),O.forEach(F);let Z=O.length,I=S;for(let j=0;j<Z;j++){let st=O[j];S=S.concat(st)}function H(j,st,ot){if(!st)zt("ExtrudeGeometry: vec does not exist");return j.clone().addScaledVector(st,ot)}let J=S.length;function z(j,st,ot){let ct,vt,Pt,Ft=j.x-st.x,Wt=j.y-st.y,Xt=ot.x-j.x,P=ot.y-j.y,ue=Ft*Ft+Wt*Wt,Kt=Ft*P-Wt*Xt;if(Math.abs(Kt)>Number.EPSILON){let Qt=Math.sqrt(ue),b=Math.sqrt(Xt*Xt+P*P),y=st.x-Wt/Qt,L=st.y+Ft/Qt,k=ot.x-P/b,tt=ot.y+Xt/b,ht=((k-y)*P-(tt-L)*Xt)/(Ft*P-Wt*Xt);ct=y+Ft*ht-j.x,vt=L+Wt*ht-j.y;let ft=ct*ct+vt*vt;if(ft<=2)return new dt(ct,vt);else Pt=Math.sqrt(ft/2)}else{let Qt=!1;if(Ft>Number.EPSILON){if(Xt>Number.EPSILON)Qt=!0}else if(Ft<-Number.EPSILON){if(Xt<-Number.EPSILON)Qt=!0}else if(Math.sign(Wt)===Math.sign(P))Qt=!0;if(Qt)ct=-Wt,vt=Ft,Pt=Math.sqrt(ue);else ct=Ft,vt=Wt,Pt=Math.sqrt(ue/2)}return new dt(ct/Pt,vt/Pt)}let at=[];for(let j=0,st=I.length,ot=st-1,ct=j+1;j<st;j++,ot++,ct++){if(ot===st)ot=0;if(ct===st)ct=0;at[j]=z(I[j],I[ot],I[ct])}let W=[],Q,nt=at.concat();for(let j=0,st=Z;j<st;j++){let ot=O[j];Q=[];for(let ct=0,vt=ot.length,Pt=vt-1,Ft=ct+1;ct<vt;ct++,Pt++,Ft++){if(Pt===vt)Pt=0;if(Ft===vt)Ft=0;Q[ct]=z(ot[ct],ot[Pt],ot[Ft])}W.push(Q),nt=nt.concat(Q)}let Lt;if(M===0)Lt=hn.triangulateShape(I,O);else{let j=[],st=[];for(let ot=0;ot<M;ot++){let ct=ot/M,vt=h*Math.cos(ct*Math.PI/2),Pt=p*Math.sin(ct*Math.PI/2)+g;for(let Ft=0,Wt=I.length;Ft<Wt;Ft++){let Xt=H(I[Ft],at[Ft],Pt);if(rt(Xt.x,Xt.y,-vt),ct===0)j.push(Xt)}for(let Ft=0,Wt=Z;Ft<Wt;Ft++){let Xt=O[Ft];Q=W[Ft];let P=[];for(let ue=0,Kt=Xt.length;ue<Kt;ue++){let Qt=H(Xt[ue],Q[ue],Pt);if(rt(Qt.x,Qt.y,-vt),ct===0)P.push(Qt)}if(ct===0)st.push(P)}}Lt=hn.triangulateShape(j,st)}let Nt=Lt.length,le=p+g;for(let j=0;j<J;j++){let st=f?H(S[j],nt[j],le):S[j];if(!w)rt(st.x,st.y,0);else R.copy(_.normals[0]).multiplyScalar(st.x),T.copy(_.binormals[0]).multiplyScalar(st.y),A.copy(E[0]).add(R).add(T),rt(A.x,A.y,A.z)}for(let j=1;j<=c;j++)for(let st=0;st<J;st++){let ot=f?H(S[st],nt[st],le):S[st];if(!w)rt(ot.x,ot.y,u/c*j);else R.copy(_.normals[j]).multiplyScalar(ot.x),T.copy(_.binormals[j]).multiplyScalar(ot.y),A.copy(E[j]).add(R).add(T),rt(A.x,A.y,A.z)}for(let j=M-1;j>=0;j--){let st=j/M,ot=h*Math.cos(st*Math.PI/2),ct=p*Math.sin(st*Math.PI/2)+g;for(let vt=0,Pt=I.length;vt<Pt;vt++){let Ft=H(I[vt],at[vt],ct);rt(Ft.x,Ft.y,u+ot)}for(let vt=0,Pt=O.length;vt<Pt;vt++){let Ft=O[vt];Q=W[vt];for(let Wt=0,Xt=Ft.length;Wt<Xt;Wt++){let P=H(Ft[Wt],Q[Wt],ct);if(!w)rt(P.x,P.y,u+ot);else rt(P.x,P.y+E[c-1].y,E[c-1].x+ot)}}}Yt(),q();function Yt(){let j=i.length/3;if(f){let st=0,ot=J*st;for(let ct=0;ct<Nt;ct++){let vt=Lt[ct];Dt(vt[2]+ot,vt[1]+ot,vt[0]+ot)}st=c+M*2,ot=J*st;for(let ct=0;ct<Nt;ct++){let vt=Lt[ct];Dt(vt[0]+ot,vt[1]+ot,vt[2]+ot)}}else{for(let st=0;st<Nt;st++){let ot=Lt[st];Dt(ot[2],ot[1],ot[0])}for(let st=0;st<Nt;st++){let ot=Lt[st];Dt(ot[0]+J*c,ot[1]+J*c,ot[2]+J*c)}}n.addGroup(j,i.length/3-j,0)}function q(){let j=i.length/3,st=0;lt(I,st),st+=I.length;for(let ot=0,ct=O.length;ot<ct;ot++){let vt=O[ot];lt(vt,st),st+=vt.length}n.addGroup(j,i.length/3-j,1)}function lt(j,st){let ot=j.length;while(--ot>=0){let ct=ot,vt=ot-1;if(vt<0)vt=j.length-1;for(let Pt=0,Ft=c+M*2;Pt<Ft;Pt++){let Wt=J*Pt,Xt=J*(Pt+1),P=st+ct+Wt,ue=st+vt+Wt,Kt=st+vt+Xt,Qt=st+ct+Xt;Gt(P,ue,Kt,Qt)}}}function rt(j,st,ot){o.push(j),o.push(st),o.push(ot)}function Dt(j,st,ot){wt(j),wt(st),wt(ot);let ct=i.length/3,vt=d.generateTopUV(n,i,ct-3,ct-2,ct-1);ce(vt[0]),ce(vt[1]),ce(vt[2])}function Gt(j,st,ot,ct){wt(j),wt(st),wt(ct),wt(st),wt(ot),wt(ct);let vt=i.length/3,Pt=d.generateSideWallUV(n,i,vt-6,vt-3,vt-2,vt-1);ce(Pt[0]),ce(Pt[1]),ce(Pt[3]),ce(Pt[1]),ce(Pt[2]),ce(Pt[3])}function wt(j){i.push(o[j*3+0]),i.push(o[j*3+1]),i.push(o[j*3+2])}function ce(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wu(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new tr[i.type]().fromJSON(i);return new Hi(n,t.options)}}var Vu={generateTopUV:function(t,e,n,i,s){let r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new dt(r,a),new dt(o,l),new dt(c,u)]},generateSideWallUV:function(t,e,n,i,s,r){let a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[s*3],p=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],d=e[r*3+2];if(Math.abs(o-u)<Math.abs(a-c))return[new dt(a,1-l),new dt(c,1-f),new dt(h,1-g),new dt(M,1-d)];else return[new dt(o,1-l),new dt(u,1-f),new dt(p,1-g),new dt(m,1-d)]}};function Wu(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class ke extends ge{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=t/a,f=e/o,h=[],p=[],g=[],M=[];for(let m=0;m<c;m++){let d=m*f-r;for(let E=0;E<l;E++){let w=E*u-s;p.push(w,-d,0),g.push(0,0,1),M.push(E/a),M.push(1-m/o)}}for(let m=0;m<o;m++)for(let d=0;d<a;d++){let E=d+l*m,w=d+l*(m+1),_=d+1+l*(m+1),T=d+1+l*m;h.push(E,w,T),h.push(w,_,T)}this.setIndex(h),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.widthSegments,t.heightSegments)}}class ys extends ge{constructor(t=new In([new dt(0,0.5),new dt(-0.5,-0.5),new dt(0.5,-0.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],r=[],a=0,o=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(a,o,c),a+=o,o=0;this.setIndex(n),this.setAttribute("position",new ne(i,3)),this.setAttribute("normal",new ne(s,3)),this.setAttribute("uv",new ne(r,2));function l(c){let u=i.length/3,f=c.extractPoints(e),{shape:h,holes:p}=f;if(hn.isClockWise(h)===!1)h=h.reverse();for(let M=0,m=p.length;M<m;M++){let d=p[M];if(hn.isClockWise(d)===!0)p[M]=d.reverse()}let g=hn.triangulateShape(h,p);for(let M=0,m=p.length;M<m;M++){let d=p[M];h=h.concat(d)}for(let M=0,m=h.length;M<m;M++){let d=h[M];i.push(d.x,d.y,0),s.push(0,0,1),r.push(d.x,d.y)}for(let M=0,m=g.length;M<m;M++){let d=g[M],E=d[0]+u,w=d[1]+u,_=d[2]+u;n.push(E,w,_),o+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Xu(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let r=e[t.shapes[i]];n.push(r)}return new ys(n,t.curveSegments)}}function Xu(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let s=t[n];e.shapes.push(s.uuid)}else e.shapes.push(t.uuid);return e}class Ve extends ge{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],u=new C,f=new C,h=[],p=[],g=[],M=[];for(let m=0;m<=n;m++){let d=[],E=m/n,w=r+E*a,_=t*Math.cos(w),T=Math.sqrt(t*t-_*_),R=0;if(m===0&&r===0)R=0.5/e;else if(m===n&&o===Math.PI)R=-0.5/e;for(let A=0;A<=e;A++){let x=A/e,S=i+x*s;u.x=-T*Math.cos(S),u.y=_,u.z=T*Math.sin(S),p.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),M.push(x+R,1-E),d.push(l++)}c.push(d)}for(let m=0;m<n;m++)for(let d=0;d<e;d++){let E=c[m][d+1],w=c[m][d],_=c[m+1][d],T=c[m+1][d+1];if(m!==0||r>0)h.push(E,w,T);if(m!==n-1||o<Math.PI)h.push(w,_,T)}this.setIndex(h),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mn extends ge{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],u=[],f=new C,h=new C,p=new C;for(let g=0;g<=n;g++){let M=r+g/n*a;for(let m=0;m<=i;m++){let d=m/i*s;h.x=(t+e*Math.cos(M))*Math.cos(d),h.y=(t+e*Math.cos(M))*Math.sin(d),h.z=e*Math.sin(M),l.push(h.x,h.y,h.z),f.x=t*Math.cos(d),f.y=t*Math.sin(d),p.subVectors(h,f).normalize(),c.push(p.x,p.y,p.z),u.push(m/i),u.push(g/n)}}for(let g=1;g<=n;g++)for(let M=1;M<=i;M++){let m=(i+1)*g+M-1,d=(i+1)*(g-1)+M-1,E=(i+1)*(g-1)+M,w=(i+1)*g+M;o.push(m,d,w),o.push(d,E,w)}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Ln extends ge{constructor(t=new Xn(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let r=t.computeFrenetFrames(e,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new C,o=new C,l=new dt,c=new C,u=[],f=[],h=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(h,2));function g(){for(let E=0;E<e;E++)M(E);M(s===!1?e:0),d(),m()}function M(E){c=t.getPointAt(E/e,c);let w=r.normals[E],_=r.binormals[E];for(let T=0;T<=i;T++){let R=T/i*Math.PI*2,A=Math.sin(R),x=-Math.cos(R);o.x=x*w.x+A*_.x,o.y=x*w.y+A*_.y,o.z=x*w.z+A*_.z,o.normalize(),f.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,u.push(a.x,a.y,a.z)}}function m(){for(let E=1;E<=e;E++)for(let w=1;w<=i;w++){let _=(i+1)*(E-1)+(w-1),T=(i+1)*E+(w-1),R=(i+1)*E+w,A=(i+1)*(E-1)+w;p.push(_,T,A),p.push(T,R,A)}}function d(){for(let E=0;E<=e;E++)for(let w=0;w<=i;w++)l.x=E/e,l.y=w/i,h.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ln(new tr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ui(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Vl(s))if(s.isRenderTargetTexture)Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(Vl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Oe(t){let e={};for(let n=0;n<t.length;n++){let i=ui(t[n]);for(let s in i)e[s]=i[s]}return e}function Vl(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function qu(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ro(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return ee.workingColorSpace}var nh={clone:ui,merge:Oe},Yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qe extends Cn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new dt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class Co extends Qe{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jt extends Cn{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Po extends Cn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Io extends Cn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ri(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function pa(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}class di{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Lo extends di{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(n-e)/(i-e),g=p*p,M=g*p,m=-f*M+2*f*g-f*p,d=(1+f)*M+(-1.5-2*f)*g+(-0.5+f)*p+1,E=(-1-h)*M+(1.5+h)*g+0.5*p,w=h*M-h*g;for(let _=0;_!==a;++_)s[_]=m*r[c+_]+d*r[l+_]+E*r[o+_]+w*r[u+_];return s}}class No extends di{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let f=0;f!==a;++f)s[f]=r[l+f]*u+r[o+f]*c;return s}}class Do extends di{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Uo extends di{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let p=(n-e)/(i-e),g=1-p;for(let M=0;M!==a;++M)s[M]=r[l+M]*g+r[o+M]*p;return s}let f=a*2,h=t-1;for(let p=0;p!==a;++p){let g=r[l+p],M=r[o+p],m=h*f+p*2,d=u[m],E=u[m+1],w=t*f+p*2,_=c[w],T=c[w+1],R=$u(n,e,d,_,i);s[p]=ih(R,g,E,T,M)}return s}}function ih(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function Ju(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function $u(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=ih(r,e,n,i,s)-t;if(Math.abs(o)<0.0000000001)break;let l=Ju(r,e,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class je{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ri(e,this.TimeBufferType),this.values=Ri(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ri(t.times,Array),values:Ri(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i;if(pa(t.settings))n.settings={inTangents:Ri(t.settings.inTangents,Array),outTangents:Ri(t.settings.outTangents,Array)}}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Do(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Uo(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;if(pa(this.settings))Wl(this.settings.inTangents,t),Wl(this.settings.outTangents,t)}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)zt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)zt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){zt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){zt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(jh(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){zt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let u=a*n,f=u-n,h=u+n;for(let p=0;p!==n;++p){let g=e[u+p];if(g!==e[f+p]||g!==e[h+p]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let u=a*n,f=r*n;for(let h=0;h!==n;++h)e[f+h]=e[u+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);if(i.createInterpolant=this.createInterpolant,pa(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function Wl(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}je.prototype.ValueTypeName="";je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=2301;class fi extends je{constructor(t,e,n){super(t,e,n)}}fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=2300;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;class Fo extends je{constructor(t,e,n,i){super(t,e,n,i)}}Fo.prototype.ValueTypeName="color";class Oo extends je{constructor(t,e,n,i){super(t,e,n,i)}}Oo.prototype.ValueTypeName="number";class Bo extends di{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)Rn.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Rr extends je{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}}Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class pi extends je{constructor(t,e,n){super(t,e,n)}}pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=2300;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;class Go extends je{constructor(t,e,n,i){super(t,e,n,i)}}Go.prototype.ValueTypeName="vector";class Ho{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){let h=l[u],p=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var sh=new Ho;class zo{constructor(t){if(this.manager=t!==void 0?t:sh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}zo.DEFAULT_MATERIAL_NAME="__DEFAULT";class zi extends be{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Cr extends zi{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var ma=new pe,Xl=new C,ql=new C;class Pr{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xl),ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ql),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ma,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,a=i?i.w/s.y:1,o=i?i.x/s.x:0,l=i?i.y/s.y:0;if(t.coordinateSystem===2001||t.reversedDepth)e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,1,0,0,0,0,1);else e.set(0.5*r,0,0,0.5*r+o,0,0.5*a,0,0.5*a+l,0,0,0.5,0.5,0,0,0,1);e.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var $s=new C,Ks=new Rn,ln=new C;class Ir extends be{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose($s,Ks,ln),ln.x===1&&ln.y===1&&ln.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose($s,Ks,ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($s,Ks,ln),ln.x===1&&ln.y===1&&ln.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose($s,Ks,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Hn=new C,Yl=new dt,Zl=new dt;class De extends Ir{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vr*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Vr*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,Yl,Zl),e.subVectors(Zl,Yl)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vr*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class rh extends Pr{constructor(){super(new De(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=es*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;if(n!==e.fov||i!==e.aspect||s!==e.far)e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix();super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Lr extends zi{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);if(e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture)e.object.map=this.map.toJSON(t).uuid;return e.object.shadow=this.shadow.toJSON(),e}}class vs extends Ir{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class ah extends Pr{constructor(){super(new vs(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Nr extends zi{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new ah}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Dr extends zi{constructor(t,e){super(t,e);this.isAmbientLight=!0,this.type="AmbientLight"}}var Ci=-90,Pi=1;class ko extends be{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new De(Ci,Pi,t,e);i.layers=this.layers,this.add(i);let s=new De(Ci,Pi,t,e);s.layers=this.layers,this.add(s);let r=new De(Ci,Pi,t,e);r.layers=this.layers,this.add(r);let a=new De(Ci,Pi,t,e);a.layers=this.layers,this.add(a);let o=new De(Ci,Pi,t,e);o.layers=this.layers,this.add(o);let l=new De(Ci,Pi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;if(t.isWebGLRenderer===!0)M=t.state.buffers.depth.getReversed();else M=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),M&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),M&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(u,f,h),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Vo extends De{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}var Wo="\\[\\]\\.:\\/",Ku=new RegExp("["+Wo+"]","g"),Xo="[^"+Wo+"]",Qu="[^"+Wo.replace("\\.","")+"]",ju=/((?:WC+[\/:])*)/.source.replace("WC",Xo),td=/(WCOD+)?/.source.replace("WCOD",Qu),ed=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xo),nd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xo),id=new RegExp("^"+ju+td+ed+nd+"$"),sd=["material","materials","bones","map"];class oh{constructor(t,e,n){let i=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class he{constructor(t,e,n){this.path=e,this.parsedPath=n||he.parseTrackName(e),this.node=he.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new he(t,e,n);else return new he.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ku,"")}static parseTrackName(t){let e=id.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(sd.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=he.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}he.Composite=oh;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $g=new Float32Array(1);class Ur{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Bt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1000,this.oldTime=e,this.elapsedTime+=t}return t}}class qo{static{qo.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}function Yo(t,e,n,i){let s=rd(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function rd(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)Bt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function Ch(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function ad(t){let e=new WeakMap;function n(o,l){let{array:c,usage:u}=o,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)p=t.HALF_FLOAT;else p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let{array:u,updateRanges:f}=l;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){let g=f[h],M=f[p];if(M.start<=g.start+g.count+1)g.count=Math.max(g.count,M.start+M.count-g.start);else++h,f[h]=M}f.length=h+1;for(let p=0,g=f.length;p<g;p++){let M=f[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=e.get(o);if(!u||u.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ld=`#ifdef USE_ALPHAHASH
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
#endif`,cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
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
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md=`#ifdef USE_BATCHING
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
#endif`,gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vd=`#ifdef USE_IRIDESCENCE
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
#endif`,Md=`#ifdef USE_BUMPMAP
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pd=`#define PI 3.141592653589793
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
} // validated`,Id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ld=`vec3 transformedNormal = objectNormal;
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
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
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
}`,Jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jd=`#ifdef USE_ENVMAP
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
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rf=`PhysicalMaterial material;
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
#endif`,af=`uniform sampler2D dfgLUT;
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
}`,of=`
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
#endif`,lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xf=`#if defined( USE_POINTS_UV )
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
#endif`,yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
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
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,If=`#ifdef USE_NORMALMAP
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
#endif`,Lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Of=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yf=`float getShadowMask() {
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
}`,Zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,Qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,np=`#ifdef USE_TRANSMISSION
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
#endif`,ip=`#ifdef USE_TRANSMISSION
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`#include <common>
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
}`,mp=`#if DEPTH_PACKING == 3200
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
}`,gp=`#define DISTANCE
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
}`,_p=`#define DISTANCE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#include <common>
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
}`,bp=`uniform vec3 diffuse;
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
}`,Ep=`#define LAMBERT
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
}`,Tp=`#define LAMBERT
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
}`,wp=`#define MATCAP
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
}`,Ap=`#define MATCAP
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
}`,Rp=`#define NORMAL
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
}`,Cp=`#define NORMAL
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
}`,Pp=`#define PHONG
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
}`,Ip=`#define PHONG
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
}`,Lp=`#define STANDARD
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
}`,Np=`#define STANDARD
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
}`,Dp=`#define TOON
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
}`,Up=`#define TOON
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
}`,Fp=`uniform float size;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,Gp=`uniform vec3 color;
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
}`,Hp=`uniform float rotation;
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
}`,zp=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:od,alphahash_pars_fragment:ld,alphamap_fragment:cd,alphamap_pars_fragment:hd,alphatest_fragment:ud,alphatest_pars_fragment:dd,aomap_fragment:fd,aomap_pars_fragment:pd,batching_pars_vertex:md,batching_vertex:gd,begin_vertex:_d,beginnormal_vertex:xd,bsdfs:yd,iridescence_fragment:vd,bumpmap_pars_fragment:Md,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Ed,clipping_planes_vertex:Td,color_fragment:wd,color_pars_fragment:Ad,color_pars_vertex:Rd,color_vertex:Cd,common:Pd,cube_uv_reflection_fragment:Id,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Nd,displacementmap_vertex:Dd,emissivemap_fragment:Ud,emissivemap_pars_fragment:Fd,colorspace_fragment:Od,colorspace_pars_fragment:Bd,envmap_fragment:Gd,envmap_common_pars_fragment:Hd,envmap_pars_fragment:zd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:jd,envmap_vertex:Vd,fog_vertex:Wd,fog_pars_vertex:Xd,fog_fragment:qd,fog_pars_fragment:Yd,gradientmap_pars_fragment:Zd,lightmap_pars_fragment:Jd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Kd,lights_pars_begin:Qd,lights_toon_fragment:tf,lights_toon_pars_fragment:ef,lights_phong_fragment:nf,lights_phong_pars_fragment:sf,lights_physical_fragment:rf,lights_physical_pars_fragment:af,lights_fragment_begin:of,lights_fragment_maps:lf,lights_fragment_end:cf,lightprobes_pars_fragment:hf,logdepthbuf_fragment:uf,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:ff,logdepthbuf_vertex:pf,map_fragment:mf,map_pars_fragment:gf,map_particle_fragment:_f,map_particle_pars_fragment:xf,metalnessmap_fragment:yf,metalnessmap_pars_fragment:vf,morphinstance_vertex:Mf,morphcolor_vertex:Sf,morphnormal_vertex:bf,morphtarget_pars_vertex:Ef,morphtarget_vertex:Tf,normal_fragment_begin:wf,normal_fragment_maps:Af,normal_pars_fragment:Rf,normal_pars_vertex:Cf,normal_vertex:Pf,normalmap_pars_fragment:If,clearcoat_normal_fragment_begin:Lf,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:Df,iridescence_pars_fragment:Uf,opaque_fragment:Ff,packing:Of,premultiplied_alpha_fragment:Bf,project_vertex:Gf,dithering_fragment:Hf,dithering_pars_fragment:zf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Vf,shadowmap_pars_fragment:Wf,shadowmap_pars_vertex:Xf,shadowmap_vertex:qf,shadowmask_pars_fragment:Yf,skinbase_vertex:Zf,skinning_pars_vertex:Jf,skinning_vertex:$f,skinnormal_vertex:Kf,specularmap_fragment:Qf,specularmap_pars_fragment:jf,tonemapping_fragment:tp,tonemapping_pars_fragment:ep,transmission_fragment:np,transmission_pars_fragment:ip,uv_pars_fragment:sp,uv_pars_vertex:rp,uv_vertex:ap,worldpos_vertex:op,background_vert:lp,background_frag:cp,backgroundCube_vert:hp,backgroundCube_frag:up,cube_vert:dp,cube_frag:fp,depth_vert:pp,depth_frag:mp,distance_vert:gp,distance_frag:_p,equirect_vert:xp,equirect_frag:yp,linedashed_vert:vp,linedashed_frag:Mp,meshbasic_vert:Sp,meshbasic_frag:bp,meshlambert_vert:Ep,meshlambert_frag:Tp,meshmatcap_vert:wp,meshmatcap_frag:Ap,meshnormal_vert:Rp,meshnormal_frag:Cp,meshphong_vert:Pp,meshphong_frag:Ip,meshphysical_vert:Lp,meshphysical_frag:Np,meshtoon_vert:Dp,meshtoon_frag:Up,points_vert:Fp,points_frag:Op,shadow_vert:Bp,shadow_frag:Gp,sprite_vert:Hp,sprite_frag:zp},_t={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new dt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},_n={basic:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Oe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Oe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Oe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Oe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Oe([_t.points,_t.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Oe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Oe([_t.common,_t.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Oe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Oe([_t.sprite,_t.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Oe([_t.common,_t.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Oe([_t.lights,_t.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};_n.physical={uniforms:Oe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Fr={r:0,b:0,g:0},kp=new pe,Ph=new Vt;Ph.set(-1,0,0,0,1,0,0,0,1);function Vp(t,e,n,i,s,r){let a=new kt(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){let _=E.backgroundBlurriness>0;w=e.get(w,_)}return w}function g(E){let w=!1,_=p(E);if(_===null)m(a,o);else if(_&&_.isColor)m(_,1),w=!0;let T=t.xr.getEnvironmentBlendMode();if(T==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(T==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||w)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function M(E,w){let _=p(w);if(_&&(_.isCubeTexture||_.mapping===cs)){if(c===void 0)c=new it(new Se(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:ui(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Ph);if(c.material.toneMapped=ee.getTransfer(_.colorSpace)!==me,u!==_||f!==_.version||h!==t.toneMapping)c.material.needsUpdate=!0,u=_,f=_.version,h=t.toneMapping;c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)}else if(_&&_.isTexture){if(l===void 0)l=new it(new ke(2,2),new Qe({name:"BackgroundMaterial",uniforms:ui(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ee.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0)_.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(_.matrix),u!==_||f!==_.version||h!==t.toneMapping)l.material.needsUpdate=!0,u=_,f=_.version,h=t.toneMapping;l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)}}function m(E,w){E.getRGB(Fr,Ro(t)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,w,r)}function d(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:M,dispose:d}}function Wp(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(N,F,Z,I,H){let J=!1,z=f(N,I,Z,F);if(r!==z)r=z,c(r.object);if(J=p(N,I,Z,H),J)g(N,I,Z,H);if(H!==null)e.update(H,t.ELEMENT_ARRAY_BUFFER);if(J||a){if(a=!1,_(N,F,Z,I),H!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer)}}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function u(N){return t.deleteVertexArray(N)}function f(N,F,Z,I){let H=I.wireframe===!0,J=i[F.id];if(J===void 0)J={},i[F.id]=J;let z=N.isInstancedMesh===!0?N.id:0,at=J[z];if(at===void 0)at={},J[z]=at;let W=at[Z.id];if(W===void 0)W={},at[Z.id]=W;let Q=W[H];if(Q===void 0)Q=h(l()),W[H]=Q;return Q}function h(N){let F=[],Z=[],I=[];for(let H=0;H<n;H++)F[H]=0,Z[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:I,object:N,attributes:{},index:null}}function p(N,F,Z,I){let H=r.attributes,J=F.attributes,z=0,at=Z.getAttributes();for(let W in at)if(at[W].location>=0){let nt=H[W],Lt=J[W];if(Lt===void 0){if(W==="instanceMatrix"&&N.instanceMatrix)Lt=N.instanceMatrix;if(W==="instanceColor"&&N.instanceColor)Lt=N.instanceColor}if(nt===void 0)return!0;if(nt.attribute!==Lt)return!0;if(Lt&&nt.data!==Lt.data)return!0;z++}if(r.attributesNum!==z)return!0;if(r.index!==I)return!0;return!1}function g(N,F,Z,I){let H={},J=F.attributes,z=0,at=Z.getAttributes();for(let W in at)if(at[W].location>=0){let nt=J[W];if(nt===void 0){if(W==="instanceMatrix"&&N.instanceMatrix)nt=N.instanceMatrix;if(W==="instanceColor"&&N.instanceColor)nt=N.instanceColor}let Lt={};if(Lt.attribute=nt,nt&&nt.data)Lt.data=nt.data;H[W]=Lt,z++}r.attributes=H,r.attributesNum=z,r.index=I}function M(){let N=r.newAttributes;for(let F=0,Z=N.length;F<Z;F++)N[F]=0}function m(N){d(N,0)}function d(N,F){let Z=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;if(Z[N]=1,I[N]===0)t.enableVertexAttribArray(N),I[N]=1;if(H[N]!==F)t.vertexAttribDivisor(N,F),H[N]=F}function E(){let N=r.newAttributes,F=r.enabledAttributes;for(let Z=0,I=F.length;Z<I;Z++)if(F[Z]!==N[Z])t.disableVertexAttribArray(Z),F[Z]=0}function w(N,F,Z,I,H,J,z){if(z===!0)t.vertexAttribIPointer(N,F,Z,H,J);else t.vertexAttribPointer(N,F,Z,I,H,J)}function _(N,F,Z,I){M();let H=I.attributes,J=Z.getAttributes(),z=F.defaultAttributeValues;for(let at in J){let W=J[at];if(W.location>=0){let Q=H[at];if(Q===void 0){if(at==="instanceMatrix"&&N.instanceMatrix)Q=N.instanceMatrix;if(at==="instanceColor"&&N.instanceColor)Q=N.instanceColor}if(Q!==void 0){let nt=Q.normalized,Lt=Q.itemSize,Nt=e.get(Q);if(Nt===void 0)continue;let{buffer:le,type:Yt,bytesPerElement:q}=Nt,lt=Yt===t.INT||Yt===t.UNSIGNED_INT||Q.gpuType===Ca;if(Q.isInterleavedBufferAttribute){let rt=Q.data,Dt=rt.stride,Gt=Q.offset;if(rt.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)d(W.location+wt,rt.meshPerAttribute);if(N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=rt.meshPerAttribute*rt.count}else for(let wt=0;wt<W.locationSize;wt++)m(W.location+wt);t.bindBuffer(t.ARRAY_BUFFER,le);for(let wt=0;wt<W.locationSize;wt++)w(W.location+wt,Lt/W.locationSize,Yt,nt,Dt*q,(Gt+Lt/W.locationSize*wt)*q,lt)}else{if(Q.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)d(W.location+rt,Q.meshPerAttribute);if(N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0)I._maxInstanceCount=Q.meshPerAttribute*Q.count}else for(let rt=0;rt<W.locationSize;rt++)m(W.location+rt);t.bindBuffer(t.ARRAY_BUFFER,le);for(let rt=0;rt<W.locationSize;rt++)w(W.location+rt,Lt/W.locationSize,Yt,nt,Lt*q,Lt/W.locationSize*rt*q,lt)}}else if(z!==void 0){let nt=z[at];if(nt!==void 0)switch(nt.length){case 2:t.vertexAttrib2fv(W.location,nt);break;case 3:t.vertexAttrib3fv(W.location,nt);break;case 4:t.vertexAttrib4fv(W.location,nt);break;default:t.vertexAttrib1fv(W.location,nt)}}}}E()}function T(){S();for(let N in i){let F=i[N];for(let Z in F){let I=F[Z];for(let H in I){let J=I[H];for(let z in J)u(J[z].object),delete J[z];delete I[H]}}delete i[N]}}function R(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let Z in F){let I=F[Z];for(let H in I){let J=I[H];for(let z in J)u(J[z].object),delete J[z];delete I[H]}}delete i[N.id]}function A(N){for(let F in i){let Z=i[F];for(let I in Z){let H=Z[I];if(H[N.id]===void 0)continue;let J=H[N.id];for(let z in J)u(J[z].object),delete J[z];delete H[N.id]}}}function x(N){for(let F in i){let Z=i[F],I=N.isInstancedMesh===!0?N.id:0,H=Z[I];if(H===void 0)continue;for(let J in H){let z=H[J];for(let at in z)u(z[at].object),delete z[at];delete H[J]}if(delete Z[I],Object.keys(Z).length===0)delete i[F]}}function S(){if(O(),a=!0,r===s)return;r=s,c(r.object)}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:O,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:E}}function Xp(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){if(u===0)return;t.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function qp(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){if(A!==fn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(A){let x=A===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(A!==rn&&A!==wn&&!x&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)Bt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&h===!1)Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:_,maxSamples:T,samples:R}}function Yp(t){let e=this,n=null,i=0,s=!1,r=!1,a=new cn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){let{clippingPlanes:g,clipIntersection:M,clipShadows:m}=f,d=t.get(f);if(!s||g===null||g.length===0||r&&!m)if(r)u(null);else c();else{let E=r?0:i,w=E*4,_=d.clippingState||null;l.value=_,_=u(g,h,w,p);for(let T=0;T!==w;++T)_[T]=n[T];d.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){let M=f!==null?f.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let d=p+M*4,E=h.matrixWorldInverse;if(o.getNormalMatrix(E),m===null||m.length<d)m=new Float32Array(d);for(let w=0,_=p;w!==M;++w,_+=4)a.copy(f[w]).applyMatrix4(E,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var Vi=4,Zp=6,Jp=20,$p=256,Ms=new vs,lh=new kt,Zo=null,Jo=0,$o=0,Ko=!1,Kp=new C,mi=new C;class tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=Kp}=s;Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Jo,$o),this._renderer.xr.enabled=Ko,t.scissorTest=!1,ki(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===Oi||t.mapping===ti)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:dn,format:fn,colorSpace:fo,depthBuffer:!1},i=ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=ch(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qp(s)),this._blurMaterial=tm(s,t,e),this._ggxMaterial=jp(s,t,e)}return i}_compileMaterial(t){let e=new it(new ge,t);this._renderer.compile(e,Ms)}_sceneToCubeUV(t,e,n,i,s){let o=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,{autoClear:f,toneMapping:h}=u;if(u.getClearColor(lh),u.toneMapping=sn,u.autoClear=!1,u.state.buffers.depth.getReversed())u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new it(new Se,new Vn({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}));let g=this._backgroundBox,M=g.material,m=!1,d=t.background;if(d){if(d.isColor)M.color.copy(d),t.background=null,m=!0}else M.color.copy(lh),m=!0;for(let E=0;E<6;E++){let w=E%3;if(w===0)o.up.set(0,l[E],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[E],s.y,s.z);else if(w===1)o.up.set(0,0,l[E]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[E],s.z);else o.up.set(0,l[E],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[E]);let _=this._cubeSize;if(ki(i,w*_,E>2?_:0,_,_),u.setRenderTarget(i),m)u.render(g,o);u.render(t,o)}u.toneMapping=h,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Oi||t.mapping===ti;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=uh();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=hh();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;ki(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,Ms)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),f=l*1.25,h=u*f,{_lodMax:p}=this,g=this._sizeLods[n],M=3*g*(n>p-Vi?n-p+Vi:0),m=4*(this._cubeSize-g);o.envMap.value=t.texture,o.roughness.value=h,o.mipInt.value=p-e,ki(s,M,m,3*g,2*g),i.setRenderTarget(s),i.render(a,Ms),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=p-n,ki(t,M,m,3*g,2*g),i.setRenderTarget(t),i.render(a,Ms)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,r),this._blurPass(s,t,n,n,r)}_blurPass(t,e,n,i,s){let r=this._renderer,a=this._blurMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],u=3*c*(i>this._lodMax-Vi?i-this._lodMax+Vi:0),f=4*(this._cubeSize-c);ki(e,u,f,3*c,2*c),r.setRenderTarget(e),r.render(o,Ms)}}function Qp(t){let e=[],n=[],i=t,s=t-Vi+1+Zp;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,g=new Float32Array(p*h*f),M=new Float32Array(p*h*f);for(let d=0;d<f;d++){let E=d%3*2/3-1,w=d>2?0:-1,_=[E,w,0,E+0.6666666666666666,w,0,E+0.6666666666666666,w+1,0,E,w,0,E+0.6666666666666666,w+1,0,E,w+1,0];g.set(_,p*h*d);for(let T=0;T<h;T++){let R=u[T*2]*2-1,A=u[T*2+1]*2-1;if(d===0)mi.set(1,A,R);else if(d===1)mi.set(-R,1,-A);else if(d===2)mi.set(-R,A,1);else if(d===3)mi.set(-1,A,-R);else if(d===4)mi.set(-R,-1,A);else mi.set(R,A,-1);mi.toArray(M,(d*h+T)*p)}}let m=new ge;if(m.setAttribute("position",new qe(g,p)),m.setAttribute("outputDirection",new qe(M,p)),n.push(new it(m,null)),i>Vi)i--}return{lodMeshes:n,sizeLods:e}}function ch(t,e,n){let i=new Ye(t,e,n);return i.texture.mapping=cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ki(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function jp(t,e,n){return new Qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$p,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function tm(t,e,n){return new Qe({name:"SphericalGaussianBlur",defines:{SAMPLES:Jp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function hh(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function uh(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Br(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class il extends Ye{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Mr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Se(5,5,5),s=new Qe({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:un});s.uniforms.tEquirect.value=e;let r=new it(i,s),a=e.minFilter;if(e.minFilter===ei)e.minFilter=ze;return new ko(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function em(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,p=!1){if(h===null||h===void 0)return null;if(p)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ir||p===sr)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let M=new il(g.height);return M.fromEquirectangularTexture(t,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,g=p===ir||p===sr,M=p===Oi||p===ti;if(g||M){let m=n.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d){if(i===null)i=new tl(t);return m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture}else if(m!==void 0)return m.texture;else{let E=h.image;if(g&&E&&E.height>0||M&&E&&l(E)){if(i===null)i=new tl(t);return m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture}else return null}}}return h}function o(h,p){if(p===ir)h.mapping=Oi;else if(p===sr)h.mapping=ti;return h}function l(h){let p=0,g=6;for(let M=0;M<g;M++)if(h[M]!==void 0)p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=e.get(p);if(g!==void 0)e.delete(p),g.dispose()}function u(h){let p=h.target;p.removeEventListener("dispose",u);let g=n.get(p);if(g!==void 0)n.delete(p),g.dispose()}function f(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:f}}function nm(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Qn("WebGLRenderer: "+i+" extension not supported.");return s}}}function im(t,e,n,i){let s={},r=new WeakMap;function a(f){let h=f.target;if(h.index!==null)e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);if(p)e.remove(p),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function o(f,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++,h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,g=f.attributes.position,M=0;if(g===void 0)return;if(p!==null){let E=p.array;M=p.version;for(let w=0,_=E.length;w<_;w+=3){let T=E[w+0],R=E[w+1],A=E[w+2];h.push(T,R,R,A,A,T)}}else{let E=g.array;M=g.version;for(let w=0,_=E.length/3-1;w<_;w+=3){let T=w+0,R=w+1,A=w+2;h.push(T,R,R,A,A,T)}}let m=new(g.count>=65535?yr:xr)(h,1);m.version=M;let d=r.get(f);if(d)e.remove(d);r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;if(p!==null){if(h.version<p.version)c(f)}}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function sm(t,e,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*a),n.update(h,i,1)}function c(f,h,p){if(p===0)return;t.drawElementsInstanced(i,h,r,f*a,p),n.update(h,i,p)}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,p);let M=0;for(let m=0;m<p;m++)M+=h[m];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function rm(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function am(t,e,n){let i=new WeakMap,s=new ve;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let S=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",S)};if(h!==void 0)h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],w=0;if(p===!0)w=1;if(g===!0)w=2;if(M===!0)w=3;let _=o.attributes.position.count*w,T=1;if(_>e.maxTextureSize)T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize;let R=new Float32Array(_*T*4*f),A=new mr(R,_,T,f);A.type=wn,A.needsUpdate=!0;let x=w*4;for(let O=0;O<f;O++){let N=m[O],F=d[O],Z=E[O],I=_*T*4*O;for(let H=0;H<N.count;H++){let J=H*x;if(p===!0)s.fromBufferAttribute(N,H),R[I+J+0]=s.x,R[I+J+1]=s.y,R[I+J+2]=s.z,R[I+J+3]=0;if(g===!0)s.fromBufferAttribute(F,H),R[I+J+4]=s.x,R[I+J+5]=s.y,R[I+J+6]=s.z,R[I+J+7]=0;if(M===!0)s.fromBufferAttribute(Z,H),R[I+J+8]=s.x,R[I+J+9]=s.y,R[I+J+10]=s.z,R[I+J+11]=Z.itemSize===4?s.w:1}}h={count:f,texture:A,size:new dt(_,T)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function om(t,e,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u)e.update(h),r.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let p=c.skeleton;if(r.get(p)!==u)p.update(),r.set(p,u)}return h}function o(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:a,dispose:o}}var lm={[ba]:"LINEAR_TONE_MAPPING",[Ea]:"REINHARD_TONE_MAPPING",[Ta]:"CINEON_TONE_MAPPING",[ls]:"ACES_FILMIC_TONE_MAPPING",[Aa]:"AGX_TONE_MAPPING",[Ra]:"NEUTRAL_TONE_MAPPING",[wa]:"CUSTOM_TONE_MAPPING"};function cm(t,e,n,i,s,r){let a=new Ye(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ge;c.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ne([0,2,0,0,2,0],2));let u=new Co({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new it(c,u),h=new vs(-1,1,1,-1,0,1),p=null,g=null,M=!1,m,d=null,E=[],w=!1;this.setSize=function(_,T){if(a.setSize(_,T),o!==null)o.setSize(_,T);if(l!==null)l.setSize(_,T);for(let R=0;R<E.length;R++){let A=E[R];if(A.setSize)A.setSize(_,T)}},this.setEffects=function(_){E=_,w=E.length>0&&E[0].isRenderPass===!0;let{width:T,height:R}=a;if(E.length>0&&o===null)o=new Ye(T,R,{type:dn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(T,R,{type:dn,depthBuffer:!1,stencilBuffer:!1});for(let A=0;A<E.length;A++){let x=E[A];if(x.setSize)x.setSize(T,R)}},this.begin=function(_,T){if(M)return!1;if(_.toneMapping===sn&&E.length===0)return!1;if(d=T,T!==null){let{width:R,height:A}=T;if(a.width!==R||a.height!==A)this.setSize(R,A)}if(w===!1)_.setRenderTarget(a);return m=_.toneMapping,_.toneMapping=sn,!0},this.hasRenderPass=function(){return w},this.end=function(_,T){_.toneMapping=m,M=!0;let R=a,A=o;for(let x=0;x<E.length;x++){let S=E[x];if(S.enabled===!1)continue;if(S.render(_,A,R,T),S.needsSwap!==!1)R=A,A=A===o?l:o}if(p!==_.outputColorSpace||g!==_.toneMapping){if(p=_.outputColorSpace,g=_.toneMapping,u.defines={},ee.getTransfer(p)===me)u.defines.SRGB_TRANSFER="";let x=lm[g];if(x)u.defines[x]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,_.setRenderTarget(d),_.render(f,h),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){if(a.dispose(),o!==null)o.dispose();if(l!==null)l.dispose();c.dispose(),u.dispose()}}var Ih=new Ue,el=new ci(1,1),Lh=new mr,Nh=new vo,Dh=new Mr,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function Wi(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=dh[s];if(r===void 0)r=new Float32Array(s),dh[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Ae(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Re(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gr(t,e){let n=fh[e];if(n===void 0)n=new Int32Array(e),fh[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function um(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ae(n,e))return;t.uniform2fv(this.addr,e),Re(n,e)}}function dm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Ae(n,e))return;t.uniform3fv(this.addr,e),Re(n,e)}}function fm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ae(n,e))return;t.uniform4fv(this.addr,e),Re(n,e)}}function pm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ae(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Re(n,e)}else{if(Ae(n,i))return;gh.set(i),t.uniformMatrix2fv(this.addr,!1,gh),Re(n,i)}}function mm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ae(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Re(n,e)}else{if(Ae(n,i))return;mh.set(i),t.uniformMatrix3fv(this.addr,!1,mh),Re(n,i)}}function gm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ae(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Re(n,e)}else{if(Ae(n,i))return;ph.set(i),t.uniformMatrix4fv(this.addr,!1,ph),Re(n,i)}}function _m(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function xm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ae(n,e))return;t.uniform2iv(this.addr,e),Re(n,e)}}function ym(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ae(n,e))return;t.uniform3iv(this.addr,e),Re(n,e)}}function vm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ae(n,e))return;t.uniform4iv(this.addr,e),Re(n,e)}}function Mm(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Sm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ae(n,e))return;t.uniform2uiv(this.addr,e),Re(n,e)}}function bm(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ae(n,e))return;t.uniform3uiv(this.addr,e),Re(n,e)}}function Em(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ae(n,e))return;t.uniform4uiv(this.addr,e),Re(n,e)}}function Tm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)el.compareFunction=n.isReversedDepthBuffer()?pr:fr,r=el;else r=Ih;n.setTexture2D(e||r,s)}function wm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Nh,s)}function Am(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Dh,s)}function Rm(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Lh,s)}function Cm(t){switch(t){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return xm;case 35668:case 35672:return ym;case 35669:case 35673:return vm;case 5125:return Mm;case 36294:return Sm;case 36295:return bm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(t,e){t.uniform1fv(this.addr,e)}function Im(t,e){let n=Wi(e,this.size,2);t.uniform2fv(this.addr,n)}function Lm(t,e){let n=Wi(e,this.size,3);t.uniform3fv(this.addr,n)}function Nm(t,e){let n=Wi(e,this.size,4);t.uniform4fv(this.addr,n)}function Dm(t,e){let n=Wi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Um(t,e){let n=Wi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Fm(t,e){let n=Wi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Om(t,e){t.uniform1iv(this.addr,e)}function Bm(t,e){t.uniform2iv(this.addr,e)}function Gm(t,e){t.uniform3iv(this.addr,e)}function Hm(t,e){t.uniform4iv(this.addr,e)}function zm(t,e){t.uniform1uiv(this.addr,e)}function km(t,e){t.uniform2uiv(this.addr,e)}function Vm(t,e){t.uniform3uiv(this.addr,e)}function Wm(t,e){t.uniform4uiv(this.addr,e)}function Xm(t,e,n){let i=this.cache,s=e.length,r=Gr(n,s);if(!Ae(i,r))t.uniform1iv(this.addr,r),Re(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=el;else a=Ih;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function qm(t,e,n){let i=this.cache,s=e.length,r=Gr(n,s);if(!Ae(i,r))t.uniform1iv(this.addr,r),Re(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Nh,r[a])}function Ym(t,e,n){let i=this.cache,s=e.length,r=Gr(n,s);if(!Ae(i,r))t.uniform1iv(this.addr,r),Re(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Dh,r[a])}function Zm(t,e,n){let i=this.cache,s=e.length,r=Gr(n,s);if(!Ae(i,r))t.uniform1iv(this.addr,r),Re(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Lh,r[a])}function Jm(t){switch(t){case 5126:return Pm;case 35664:return Im;case 35665:return Lm;case 35666:return Nm;case 35674:return Dm;case 35675:return Um;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return Gm;case 35669:case 35673:return Hm;case 5125:return zm;case 36294:return km;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return Zm}}class Uh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cm(e.type)}}class Fh{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jm(e.type)}}class Oh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Qo=/(\w+)(\])?(\[|\.)?/g;function _h(t,e){t.seq.push(e),t.map[e.id]=e}function $m(t,e,n){let i=t.name,s=i.length;Qo.lastIndex=0;while(!0){let r=Qo.exec(i),a=Qo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){_h(n,c===void 0?new Uh(o,t,e):new Fh(o,t,e));break}else{let f=n.map[o];if(f===void 0)f=new Oh(o),_h(n,f);n=f}}}class Es{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);$m(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function xh(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Km=37297,Qm=0;function jm(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var yh=new Vt;function tg(t){ee._getMatrix(yh,ee.workingColorSpace,t);let e=`mat3( ${yh.elements.map((n)=>n.toFixed(4))} )`;switch(ee.getTransfer(t)){case po:return[e,"LinearTransferOETF"];case me:return[e,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function vh(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+jm(t.getShaderSource(e),o)}else return r}function eg(t,e){let n=tg(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var ng={[ba]:"Linear",[Ea]:"Reinhard",[Ta]:"Cineon",[ls]:"ACESFilmic",[Aa]:"AgX",[Ra]:"Neutral",[wa]:"Custom"};function ig(t,e){let n=ng[e];if(n===void 0)return Bt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Or=new C;function sg(){ee.getLuminanceCoefficients(Or);let t=Or.x.toFixed(4),e=Or.y.toFixed(4),n=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function rg(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function ag(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function og(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function bs(t){return t!==""}function Mh(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(t){return t.replace(lg,hg)}var cg=new Map;function hg(t,e){let n=$t[e];if(n===void 0){let i=cg.get(e);if(i!==void 0)n=$t[i],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nl(n)}var ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(t){return t.replace(ug,dg)}function dg(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`;return e}var fg={[rs]:"SHADOWMAP_TYPE_PCF",[Di]:"SHADOWMAP_TYPE_VSM"};function pg(t){return fg[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mg={[Oi]:"ENVMAP_TYPE_CUBE",[ti]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE_UV"};function gg(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return mg[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var _g={[ti]:"ENVMAP_MODE_REFRACTION"};function xg(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return _g[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yg={[Tc]:"ENVMAP_BLENDING_MULTIPLY",[wc]:"ENVMAP_BLENDING_MIX",[Ac]:"ENVMAP_BLENDING_ADD"};function vg(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return yg[t.combine]||"ENVMAP_BLENDING_NONE"}function Mg(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Sg(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=pg(n),c=gg(n),u=xg(n),f=vg(n),h=Mg(n),p=rg(n),g=ag(r),M=s.createProgram(),m,d,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(bs).join(`
`),m.length>0)m+=`
`;if(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(bs).join(`
`),d.length>0)d+=`
`}else m=[Eh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),d=[Eh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sn?"#define TONE_MAPPING":"",n.toneMapping!==sn?$t.tonemapping_pars_fragment:"",n.toneMapping!==sn?ig("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,eg("linearToOutputTexel",n.outputColorSpace),sg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bs).join(`
`);if(a=nl(a),a=Mh(a,n),a=Sh(a,n),o=nl(o),o=Mh(o,n),o=Sh(o,n),a=bh(a),o=bh(o),n.isRawShaderMaterial!==!0)E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d;let w=E+m+a,_=E+d+o,T=xh(s,s.VERTEX_SHADER,w),R=xh(s,s.FRAGMENT_SHADER,_);if(s.attachShader(M,T),s.attachShader(M,R),n.index0AttributeName!==void 0)s.bindAttribLocation(M,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(M,0,"position");s.linkProgram(M);function A(N){if(t.debug.checkShaderErrors){let F=s.getProgramInfoLog(M)||"",Z=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(R)||"",H=F.trim(),J=Z.trim(),z=I.trim(),at=!0,W=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,M,T,R);else{let Q=vh(s,T,"vertex"),nt=vh(s,R,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+Q+`
`+nt)}else if(H!=="")Bt("WebGLProgram: Program Info Log:",H);else if(J===""||z==="")W=!1;if(W)N.diagnostics={runnable:at,programLog:H,vertexShader:{log:J,prefix:m},fragmentShader:{log:z,prefix:d}}}s.deleteShader(T),s.deleteShader(R),x=new Es(s,M),S=og(s,M)}let x;this.getUniforms=function(){if(x===void 0)A(this);return x};let S;this.getAttributes=function(){if(S===void 0)A(this);return S};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(O===!1)O=s.getProgramParameter(M,Km);return O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Qm++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=R,this}var bg=0;class Bh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Gh(t),e.set(t,n);return n}}class Gh{constructor(t){this.id=bg++,this.code=t,this.usedTimes=0}}function Eg(t){return t===si||t===ur||t===dr}function Tg(t,e,n,i,s,r){let a=new gr,o=new Bh,l=new Set,c=[],u=new Map,{logarithmicDepthBuffer:f,precision:h}=i,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){if(l.add(x),x===0)return"uv";return`uv${x}`}function M(x,S,O,N,F,Z){let I=N.fog,H=F.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,at=e.get(x.envMap||J,z),W=!!at&&at.mapping===cs?at.image.height:null,Q=p[x.type];if(x.precision!==null){if(h=i.getMaxPrecision(x.precision),h!==x.precision)Bt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead.")}let nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Lt=nt!==void 0?nt.length:0,Nt=0;if(H.morphAttributes.position!==void 0)Nt=1;if(H.morphAttributes.normal!==void 0)Nt=2;if(H.morphAttributes.color!==void 0)Nt=3;let le,Yt,q,lt;if(Q){let _e=_n[Q];le=_e.vertexShader,Yt=_e.fragmentShader}else{le=x.vertexShader,Yt=x.fragmentShader;let _e=o.getVertexShaderStage(x),ae=o.getFragmentShaderStage(x);o.update(x,_e,ae),q=_e.id,lt=ae.id}let rt=t.getRenderTarget(),Dt=t.state.buffers.depth.getReversed(),Gt=F.isInstancedMesh===!0,wt=F.isBatchedMesh===!0,ce=!!x.map,j=!!x.matcap,st=!!at,ot=!!x.aoMap,ct=!!x.lightMap,vt=!!x.bumpMap&&x.wireframe===!1,Pt=!!x.normalMap,Ft=!!x.displacementMap,Wt=!!x.emissiveMap,Xt=!!x.metalnessMap,P=!!x.roughnessMap,ue=x.anisotropy>0,Kt=x.clearcoat>0,Qt=x.dispersion>0,b=x.retroreflectivity>0,y=x.iridescence>0,L=x.sheen>0,k=x.transmission>0,tt=ue&&!!x.anisotropyMap,ht=Kt&&!!x.clearcoatMap,ft=Kt&&!!x.clearcoatNormalMap,X=Kt&&!!x.clearcoatRoughnessMap,K=y&&!!x.iridescenceMap,St=y&&!!x.iridescenceThicknessMap,It=L&&!!x.sheenColorMap,gt=L&&!!x.sheenRoughnessMap,ut=!!x.specularMap,Ot=!!x.specularColorMap,Ht=!!x.specularIntensityMap,se=k&&!!x.transmissionMap,U=k&&!!x.thicknessMap,pt=!!x.gradientMap,Y=!!x.alphaMap,mt=x.alphaTest>0,bt=!!x.alphaHash,et=!!x.extensions,xt=sn;if(x.toneMapped){if(rt===null||rt.isXRRenderTarget===!0)xt=t.toneMapping}let qt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:Yt,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:wt,batchingColor:wt&&F._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&F.instanceColor!==null,instancingMorph:Gt&&F.morphTexture!==null,outputColorSpace:rt===null?t.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ce,matcap:j,envMap:st,envMapMode:st&&at.mapping,envMapCubeUVHeight:W,aoMap:ot,lightMap:ct,bumpMap:vt,normalMap:Pt,displacementMap:Ft,emissiveMap:Wt,normalMapObjectSpace:Pt&&x.normalMapType===Bc,normalMapTangentSpace:Pt&&x.normalMapType===uo,packedNormalMap:Pt&&x.normalMapType===uo&&Eg(x.normalMap.format),metalnessMap:Xt,roughnessMap:P,anisotropy:ue,anisotropyMap:tt,clearcoat:Kt,clearcoatMap:ht,clearcoatNormalMap:ft,clearcoatRoughnessMap:X,dispersion:Qt,retroreflection:b,iridescence:y,iridescenceMap:K,iridescenceThicknessMap:St,sheen:L,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:ut,specularColorMap:Ot,specularIntensityMap:Ht,transmission:k,transmissionMap:se,thicknessMap:U,gradientMap:pt,opaque:x.transparent===!1&&x.blending===as&&x.alphaToCoverage===!1,alphaMap:Y,alphaTest:mt,alphaHash:bt,combine:x.combine,mapUv:ce&&g(x.map.channel),aoMapUv:ot&&g(x.aoMap.channel),lightMapUv:ct&&g(x.lightMap.channel),bumpMapUv:vt&&g(x.bumpMap.channel),normalMapUv:Pt&&g(x.normalMap.channel),displacementMapUv:Ft&&g(x.displacementMap.channel),emissiveMapUv:Wt&&g(x.emissiveMap.channel),metalnessMapUv:Xt&&g(x.metalnessMap.channel),roughnessMapUv:P&&g(x.roughnessMap.channel),anisotropyMapUv:tt&&g(x.anisotropyMap.channel),clearcoatMapUv:ht&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:St&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(x.sheenRoughnessMap.channel),specularMapUv:ut&&g(x.specularMap.channel),specularColorMapUv:Ot&&g(x.specularColorMap.channel),specularIntensityMapUv:Ht&&g(x.specularIntensityMap.channel),transmissionMapUv:se&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:Y&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Pt||ue),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(ce||Y),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&Pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Dt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Nt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:ce&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:Wt&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fe,flipSided:x.side===He,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:et&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&x.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function m(x){let S=[];if(x.shaderID)S.push(x.shaderID);else S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID);if(x.defines!==void 0)for(let O in x.defines)S.push(O),S.push(x.defines[O]);if(x.isRawShaderMaterial===!1)d(S,x),E(S,x),S.push(t.outputColorSpace);return S.push(x.customProgramCacheKey),S.join()}function d(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function E(x,S){if(a.disableAll(),S.instancing)a.enable(0);if(S.instancingColor)a.enable(1);if(S.instancingMorph)a.enable(2);if(S.matcap)a.enable(3);if(S.envMap)a.enable(4);if(S.normalMapObjectSpace)a.enable(5);if(S.normalMapTangentSpace)a.enable(6);if(S.clearcoat)a.enable(7);if(S.iridescence)a.enable(8);if(S.alphaTest)a.enable(9);if(S.vertexColors)a.enable(10);if(S.vertexAlphas)a.enable(11);if(S.vertexUv1s)a.enable(12);if(S.vertexUv2s)a.enable(13);if(S.vertexUv3s)a.enable(14);if(S.vertexTangents)a.enable(15);if(S.anisotropy)a.enable(16);if(S.alphaHash)a.enable(17);if(S.batching)a.enable(18);if(S.dispersion)a.enable(19);if(S.retroreflection)a.enable(24);if(S.batchingColor)a.enable(20);if(S.gradientMap)a.enable(21);if(S.packedNormalMap)a.enable(22);if(S.vertexNormals)a.enable(23);if(x.push(a.mask),a.disableAll(),S.fog)a.enable(0);if(S.useFog)a.enable(1);if(S.flatShading)a.enable(2);if(S.logarithmicDepthBuffer)a.enable(3);if(S.reversedDepthBuffer)a.enable(4);if(S.skinning)a.enable(5);if(S.morphTargets)a.enable(6);if(S.morphNormals)a.enable(7);if(S.morphColors)a.enable(8);if(S.premultipliedAlpha)a.enable(9);if(S.shadowMapEnabled)a.enable(10);if(S.doubleSided)a.enable(11);if(S.flipSided)a.enable(12);if(S.useDepthPacking)a.enable(13);if(S.dithering)a.enable(14);if(S.transmission)a.enable(15);if(S.sheen)a.enable(16);if(S.opaque)a.enable(17);if(S.pointsUvs)a.enable(18);if(S.decodeVideoTexture)a.enable(19);if(S.decodeVideoTextureEmissive)a.enable(20);if(S.alphaToCoverage)a.enable(21);if(S.numLightProbeGrids>0)a.enable(22);if(S.hasPositionAttribute)a.enable(23);x.push(a.mask)}function w(x){let S=p[x.type],O;if(S){let N=_n[S];O=nh.clone(N.uniforms)}else O=x.uniforms;return O}function _(x,S){let O=u.get(S);if(O!==void 0)++O.usedTimes;else O=new Sg(t,S,x,s),c.push(O),u.set(S,O);return O}function T(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function A(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:A}}function wg(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Ag(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Th(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function wh(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let p=0;if(h.isInstancedMesh)p+=2;if(h.isSkinnedMesh)p+=1;return p}function o(h,p,g,M,m,d){let E=t[e];if(E===void 0)E={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:d},t[e]=E;else E.id=h.id,E.object=h,E.geometry=p,E.material=g,E.materialVariant=a(h),E.groupOrder=M,E.renderOrder=h.renderOrder,E.z=m,E.group=d;return e++,E}function l(h,p,g,M,m,d,E){if(E.reversedDepth===!0)m=-m;let w=o(h,p,g,M,m,d);if(g.transmission>0)i.push(w);else if(g.transparent===!0)s.push(w);else n.push(w)}function c(h,p,g,M,m,d){let E=o(h,p,g,M,m,d);if(g.transmission>0)i.unshift(E);else if(g.transparent===!0)s.unshift(E);else n.unshift(E)}function u(h,p){if(n.length>1)n.sort(h||Ag);if(i.length>1)i.sort(p||Th);if(s.length>1)s.sort(p||Th)}function f(){for(let h=e,p=t.length;h<p;h++){let g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Rg(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new wh,t.set(i,[a]);else if(s>=r.length)a=new wh,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Cg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new C,color:new kt};break;case"SpotLight":n={position:new C,direction:new C,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new C,color:new kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new C,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":n={color:new kt,position:new C,halfWidth:new C,halfHeight:new C};break}return t[e.id]=n,n}}}function Pg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Ig=0;function Lg(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ng(t){let e=new Cg,n=Pg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new pe,a=new pe;function o(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,g=0,M=0,m=0,d=0,E=0,w=0,_=0,T=0,R=0,A=0,x=0,S=0,O=0;c.sort(Lg);for(let F=0,Z=c.length;F<Z;F++){let I=c[F],{color:H,intensity:J,distance:z}=I,at=null;if(I.shadow&&I.shadow.map)if(I.shadow.map.texture.format===si)at=I.shadow.map.texture;else at=I.shadow.map.depthTexture||I.shadow.map.texture;if(I.isAmbientLight)u+=H.r*J,f+=H.g*J,h+=H.b*J;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],J);O++}else if(I.isSunLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,nt=n.get(I);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=nt,i.sunShadowMap[g]=at;let Lt=Q.getViewportCount();for(let Nt=0;Nt<Lt;Nt++)i.sunShadowMatrix[M+Nt]=Q.getMatrix(Nt),i.sunShadowCascade[M+Nt]=Q._cascadeData[Nt];M+=Lt,g++}i.sun[p]=W,p++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,nt=n.get(I);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=at,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=W,m++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(H).multiplyScalar(J),W.distance=z,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[E]=W;let Q=I.shadow;if(I.map){if(i.spotLightMap[x]=I.map,x++,Q.updateMatrices(I),I.castShadow)S++}if(i.spotLightMatrix[E]=Q.matrix,I.castShadow){let nt=n.get(I);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,i.spotShadow[E]=nt,i.spotShadowMap[E]=at,A++}E++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(H).multiplyScalar(J),W.halfWidth.set(I.width*0.5,0,0),W.halfHeight.set(0,I.height*0.5,0),i.rectArea[w]=W,w++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Q=I.shadow,nt=n.get(I);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,i.pointShadow[d]=nt,i.pointShadowMap[d]=at,i.pointShadowMatrix[d]=I.shadow.matrix,R++}i.point[d]=W,d++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(J),W.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[_]=W,_++}}if(w>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2;else i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let N=i.hash;if(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==d||N.spotLength!==E||N.rectAreaLength!==w||N.hemiLength!==_||N.numSunShadows!==g||N.numDirectionalShadows!==T||N.numPointShadows!==R||N.numSpotShadows!==A||N.numSpotMaps!==x||N.numLightProbes!==O)i.sun.length=p,i.directional.length=m,i.spot.length=E,i.rectArea.length=w,i.point.length=d,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-S,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=O,N.sunLength=p,N.directionalLength=m,N.pointLength=d,N.spotLength=E,N.rectAreaLength=w,N.hemiLength=_,N.numSunShadows=g,N.numDirectionalShadows=T,N.numPointShadows=R,N.numSpotShadows=A,N.numSpotMaps=x,N.numLightProbes=O,i.version=Ig++}function l(c,u){let f=0,h=0,p=0,g=0,M=0,m=0,d=u.matrixWorldInverse;for(let E=0,w=c.length;E<w;E++){let _=c[E];if(_.isSunLight){let T=i.sun[f];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(d),f++}else if(_.isDirectionalLight){let T=i.directional[h];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(_.isSpotLight){let T=i.spot[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(_.isRectAreaLight){let T=i.rectArea[M];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(_.width*0.5,0,0),T.halfHeight.set(0,_.height*0.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){let T=i.point[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:i}}function Ah(t){let e=new Ng(t),n=[],i=[],s=[];function r(h){f.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Dg(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Ah(t),e.set(s,[o]);else if(r>=a.length)o=new Ah(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`,Og=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Bg=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Rh=new pe,Ss=new C,jo=new C;function Gg(t,e,n){let i=new gs,s=new dt,r=new dt,a=new ve,o=new Po,l=new Io,c={},u=n.maxTextureSize,f={[Ui]:He,[He]:Ui,[Fe]:Fe},h=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Ug,fragmentShader:Fg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new qe(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new it(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let d=this.type;this.render=function(R,A,x){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(R.length===0)return;if(this.type===nr)Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rs;let S=t.getRenderTarget(),O=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),F=t.state;if(F.setBlending(un),F.buffers.depth.getReversed()===!0)F.buffers.color.setClear(0,0,0,0);else F.buffers.color.setClear(1,1,1,1);F.buffers.depth.setTest(!0),F.setScissorTest(!1);let Z=d!==this.type;if(Z)A.traverse(function(I){if(I.material)if(Array.isArray(I.material))I.material.forEach((H)=>H.needsUpdate=!0);else I.material.needsUpdate=!0});for(let I=0,H=R.length;I<H;I++){let J=R[I],z=J.shadow;if(z===void 0){Bt("WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let at=z.getFrameExtents();if(s.multiply(at),r.copy(z.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/at.x),s.x=r.x*at.x,z.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/at.y),s.y=r.y*at.y,z.mapSize.y=r.y}let W=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||Z===!0){if(z.map!==null){if(z.map.depthTexture!==null)z.map.depthTexture.dispose(),z.map.depthTexture=null;z.map.dispose()}if(this.type===Di){if(J.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ye(s.x,s.y,{format:si,type:dn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),z.map.texture.name=J.name+".shadowMap",z.map.depthTexture=new ci(s.x,s.y,wn),z.map.depthTexture.name=J.name+".shadowMapDepth",z.map.depthTexture.format=ni,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zn,z.map.depthTexture.magFilter=zn}else{if(J.isPointLight)z.map=new il(s.x),z.map.depthTexture=new So(s.x,kn);else z.map=new Ye(s.x,s.y),z.map.depthTexture=new ci(s.x,s.y,kn);if(z.map.depthTexture.name=J.name+".shadowMap",z.map.depthTexture.format=ni,this.type===rs)z.map.depthTexture.compareFunction=W?pr:fr,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze;else z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zn,z.map.depthTexture.magFilter=zn}z.camera.updateProjectionMatrix()}if(z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y))z.map.setSize(s.x,s.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();if(J.isPointLight!==!0)z.updateMatrices(J,x);for(let nt=0;nt<Q;nt++){let Lt=z.getCamera(nt);if(J.isPointLight){let{camera:Nt,matrix:le}=z,Yt=J.distance||Nt.far;if(Yt!==Nt.far)Nt.far=Yt,Nt.updateProjectionMatrix();Ss.setFromMatrixPosition(J.matrixWorld),Nt.position.copy(Ss),jo.copy(Nt.position),jo.add(Og[nt]),Nt.up.copy(Bg[nt]),Nt.lookAt(jo),Nt.updateMatrixWorld(),le.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Rh.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Rh,Nt.coordinateSystem,Nt.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,nt),t.clear();else{if(nt===0)t.setRenderTarget(z.map),t.clear();let Nt=z.getViewport(nt);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),F.viewport(a)}i=z.getFrustum(nt),_(A,x,Lt,J,this.type)}if(z.isPointLightShadow!==!0&&this.type===Di)E(z,x);z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(S,O,N)};function E(R,A){let x=e.update(M);if(h.defines.VSM_SAMPLES!==R.blurSamples)h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0;if(R.mapPass===null)R.mapPass=new Ye(s.x,s.y,{format:si,type:dn});else if(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)R.mapPass.setSize(R.map.width,R.map.height);h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,x,h,M,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,x,p,M,null)}function w(R,A,x,S){let O=null,N=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)O=N;else if(O=x.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=O.uuid,Z=A.uuid,I=c[F];if(I===void 0)I={},c[F]=I;let H=I[Z];if(H===void 0)H=O.clone(),I[Z]=H,A.addEventListener("dispose",T);O=H}if(O.visible=A.visible,O.wireframe=A.wireframe,S===Di)O.side=A.shadowSide!==null?A.shadowSide:A.side;else O.side=A.shadowSide!==null?A.shadowSide:f[A.side];if(O.alphaMap=A.alphaMap,O.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,O.map=A.map,O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.displacementMap=A.displacementMap,O.displacementScale=A.displacementScale,O.displacementBias=A.displacementBias,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,x.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let F=t.properties.get(O);F.light=x}return O}function _(R,A,x,S,O){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)){if((R.castShadow||R.receiveShadow&&O===Di)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);let Z=e.update(R),I=R.material;if(Array.isArray(I)){let H=Z.groups;for(let J=0,z=H.length;J<z;J++){let at=H[J],W=I[at.materialIndex];if(W&&W.visible){let Q=w(R,W,S,O);R.onBeforeShadow(t,R,A,x,Z,Q,at),t.renderBufferDirect(x,null,Z,Q,R,at),R.onAfterShadow(t,R,A,x,Z,Q,at)}}}else if(I.visible){let H=w(R,I,S,O);R.onBeforeShadow(t,R,A,x,Z,H,null),t.renderBufferDirect(x,null,Z,H,R,null),R.onAfterShadow(t,R,A,x,Z,H,null)}}}let F=R.children;for(let Z=0,I=F.length;Z<I;Z++)_(F[Z],A,x,S,O)}function T(R){R.target.removeEventListener("dispose",T);for(let x in c){let S=c[x],O=R.target.uuid;if(O in S)S[O].dispose(),delete S[O]}}}function Hg(t,e){function n(){let U=!1,pt=new ve,Y=null,mt=new ve(0,0,0,0);return{setMask:function(bt){if(Y!==bt&&!U)t.colorMask(bt,bt,bt,bt),Y=bt},setLocked:function(bt){U=bt},setClear:function(bt,et,xt,qt,_e){if(_e===!0)bt*=qt,et*=qt,xt*=qt;if(pt.set(bt,et,xt,qt),mt.equals(pt)===!1)t.clearColor(bt,et,xt,qt),mt.copy(pt)},reset:function(){U=!1,Y=null,mt.set(-1,0,0,0)}}}function i(){let U=!1,pt=!1,Y=null,mt=null,bt=null;return{setReversed:function(et){if(pt!==et){let xt=e.get("EXT_clip_control");if(et)xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT);else xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT);pt=et;let qt=bt;bt=null,this.setClear(qt)}},getReversed:function(){return pt},setTest:function(et){if(et)rt(t.DEPTH_TEST);else Dt(t.DEPTH_TEST)},setMask:function(et){if(Y!==et&&!U)t.depthMask(et),Y=et},setFunc:function(et){if(pt)et=Jc[et];if(mt!==et){switch(et){case xc:t.depthFunc(t.NEVER);break;case yc:t.depthFunc(t.ALWAYS);break;case vc:t.depthFunc(t.LESS);break;case Sa:t.depthFunc(t.LEQUAL);break;case Mc:t.depthFunc(t.EQUAL);break;case Sc:t.depthFunc(t.GEQUAL);break;case bc:t.depthFunc(t.GREATER);break;case Ec:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}mt=et}},setLocked:function(et){U=et},setClear:function(et){if(bt!==et){if(bt=et,pt)et=1-et;t.clearDepth(et)}},reset:function(){U=!1,Y=null,mt=null,bt=null,pt=!1}}}function s(){let U=!1,pt=null,Y=null,mt=null,bt=null,et=null,xt=null,qt=null,_e=null;return{setTest:function(ae){if(!U)if(ae)rt(t.STENCIL_TEST);else Dt(t.STENCIL_TEST)},setMask:function(ae){if(pt!==ae&&!U)t.stencilMask(ae),pt=ae},setFunc:function(ae,an,xn){if(Y!==ae||mt!==an||bt!==xn)t.stencilFunc(ae,an,xn),Y=ae,mt=an,bt=xn},setOp:function(ae,an,xn){if(et!==ae||xt!==an||qt!==xn)t.stencilOp(ae,an,xn),et=ae,xt=an,qt=xn},setLocked:function(ae){U=ae},setClear:function(ae){if(_e!==ae)t.clearStencil(ae),_e=ae},reset:function(){U=!1,pt=null,Y=null,mt=null,bt=null,et=null,xt=null,qt=null,_e=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,g=[],M=null,m=!1,d=null,E=null,w=null,_=null,T=null,R=null,A=null,x=new kt(0,0,0),S=0,O=!1,N=null,F=null,Z=null,I=null,H=null,J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,at=0,W=t.getParameter(t.VERSION);if(W.indexOf("WebGL")!==-1)at=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=at>=1;else if(W.indexOf("OpenGL ES")!==-1)at=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=at>=2;let Q=null,nt={},Lt=t.getParameter(t.SCISSOR_BOX),Nt=t.getParameter(t.VIEWPORT),le=new ve().fromArray(Lt),Yt=new ve().fromArray(Nt);function q(U,pt,Y,mt){let bt=new Uint8Array(4),et=t.createTexture();t.bindTexture(U,et),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xt=0;xt<Y;xt++)if(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)t.texImage3D(pt,0,t.RGBA,1,1,mt,0,t.RGBA,t.UNSIGNED_BYTE,bt);else t.texImage2D(pt+xt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,bt);return et}let lt={};lt[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),lt[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),lt[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(t.DEPTH_TEST),a.setFunc(Sa),vt(!1),Pt(ya),rt(t.CULL_FACE),ot(un);function rt(U){if(u[U]!==!0)t.enable(U),u[U]=!0}function Dt(U){if(u[U]!==!1)t.disable(U),u[U]=!1}function Gt(U,pt){if(h[U]!==pt){if(t.bindFramebuffer(U,pt),h[U]=pt,U===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=pt;if(U===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=pt;return!0}return!1}function wt(U,pt){let Y=g,mt=!1;if(U){if(Y=p.get(pt),Y===void 0)Y=[],p.set(pt,Y);let bt=U.textures;if(Y.length!==bt.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let et=0,xt=bt.length;et<xt;et++)Y[et]=t.COLOR_ATTACHMENT0+et;Y.length=bt.length,mt=!0}}else if(Y[0]!==t.BACK)Y[0]=t.BACK,mt=!0;if(mt)t.drawBuffers(Y)}function ce(U){if(M!==U)return t.useProgram(U),M=U,!0;return!1}let j={[Fi]:t.FUNC_ADD,[jl]:t.FUNC_SUBTRACT,[tc]:t.FUNC_REVERSE_SUBTRACT};j[ec]=t.MIN,j[nc]=t.MAX;let st={[ic]:t.ZERO,[sc]:t.ONE,[rc]:t.SRC_COLOR,[oc]:t.SRC_ALPHA,[fc]:t.SRC_ALPHA_SATURATE,[uc]:t.DST_COLOR,[cc]:t.DST_ALPHA,[ac]:t.ONE_MINUS_SRC_COLOR,[lc]:t.ONE_MINUS_SRC_ALPHA,[dc]:t.ONE_MINUS_DST_COLOR,[hc]:t.ONE_MINUS_DST_ALPHA,[pc]:t.CONSTANT_COLOR,[mc]:t.ONE_MINUS_CONSTANT_COLOR,[gc]:t.CONSTANT_ALPHA,[_c]:t.ONE_MINUS_CONSTANT_ALPHA};function ot(U,pt,Y,mt,bt,et,xt,qt,_e,ae){if(U===un){if(m===!0)Dt(t.BLEND),m=!1;return}if(m===!1)rt(t.BLEND),m=!0;if(U!==Ql){if(U!==d||ae!==O){if(E!==Fi||T!==Fi)t.blendEquation(t.FUNC_ADD),E=Fi,T=Fi;if(ae)switch(U){case as:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case os:t.blendFunc(t.ONE,t.ONE);break;case va:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ma:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:zt("WebGLState: Invalid blending: ",U);break}else switch(U){case as:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case va:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ma:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",U);break}w=null,_=null,R=null,A=null,x.set(0,0,0),S=0,d=U,O=ae}return}if(bt=bt||pt,et=et||Y,xt=xt||mt,pt!==E||bt!==T)t.blendEquationSeparate(j[pt],j[bt]),E=pt,T=bt;if(Y!==w||mt!==_||et!==R||xt!==A)t.blendFuncSeparate(st[Y],st[mt],st[et],st[xt]),w=Y,_=mt,R=et,A=xt;if(qt.equals(x)===!1||_e!==S)t.blendColor(qt.r,qt.g,qt.b,_e),x.copy(qt),S=_e;d=U,O=!1}function ct(U,pt){U.side===Fe?Dt(t.CULL_FACE):rt(t.CULL_FACE);let Y=U.side===He;if(pt)Y=!Y;vt(Y),U.blending===as&&U.transparent===!1?ot(un):ot(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let mt=U.stencilWrite;if(o.setTest(mt),mt)o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass);Wt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(t.SAMPLE_ALPHA_TO_COVERAGE):Dt(t.SAMPLE_ALPHA_TO_COVERAGE)}function vt(U){if(N!==U){if(U)t.frontFace(t.CW);else t.frontFace(t.CCW);N=U}}function Pt(U){if(U!==$l){if(rt(t.CULL_FACE),U!==F)if(U===ya)t.cullFace(t.BACK);else if(U===Kl)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Dt(t.CULL_FACE);F=U}function Ft(U){if(U!==Z){if(z)t.lineWidth(U);Z=U}}function Wt(U,pt,Y){if(U){if(rt(t.POLYGON_OFFSET_FILL),I!==pt||H!==Y){if(I=pt,H=Y,a.getReversed())pt=-pt;t.polygonOffset(pt,Y)}}else Dt(t.POLYGON_OFFSET_FILL)}function Xt(U){if(U)rt(t.SCISSOR_TEST);else Dt(t.SCISSOR_TEST)}function P(U){if(U===void 0)U=t.TEXTURE0+J-1;if(Q!==U)t.activeTexture(U),Q=U}function ue(U,pt,Y){if(Y===void 0)if(Q===null)Y=t.TEXTURE0+J-1;else Y=Q;let mt=nt[Y];if(mt===void 0)mt={type:void 0,texture:void 0},nt[Y]=mt;if(mt.type!==U||mt.texture!==pt){if(Q!==Y)t.activeTexture(Y),Q=Y;t.bindTexture(U,pt||lt[U]),mt.type=U,mt.texture=pt}}function Kt(){let U=nt[Q];if(U!==void 0&&U.type!==void 0)t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0}function Qt(){try{t.compressedTexImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function y(){try{t.texSubImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function L(){try{t.texSubImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function tt(){try{t.compressedTexSubImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function ht(){try{t.texStorage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function ft(){try{t.texStorage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function X(){try{t.texImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function K(){try{t.texImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function St(U){if(f[U]!==void 0)return f[U];else return t.getParameter(U)}function It(U,pt){if(f[U]!==pt)t.pixelStorei(U,pt),f[U]=pt}function gt(U){if(le.equals(U)===!1)t.scissor(U.x,U.y,U.z,U.w),le.copy(U)}function ut(U){if(Yt.equals(U)===!1)t.viewport(U.x,U.y,U.z,U.w),Yt.copy(U)}function Ot(U,pt){let Y=c.get(pt);if(Y===void 0)Y=new WeakMap,c.set(pt,Y);let mt=Y.get(U);if(mt===void 0)mt=t.getUniformBlockIndex(pt,U.name),Y.set(U,mt)}function Ht(U,pt){let mt=c.get(pt).get(U);if(l.get(pt)!==mt)t.uniformBlockBinding(pt,mt,U.__bindingPointIndex),l.set(pt,mt)}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},Q=null,nt={},h={},p=new WeakMap,g=[],M=null,m=!1,d=null,E=null,w=null,_=null,T=null,R=null,A=null,x=new kt(0,0,0),S=0,O=!1,N=null,F=null,Z=null,I=null,H=null,le.set(0,0,t.canvas.width,t.canvas.height),Yt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Dt,bindFramebuffer:Gt,drawBuffers:wt,useProgram:ce,setBlending:ot,setMaterial:ct,setFlipSided:vt,setCullFace:Pt,setLineWidth:Ft,setPolygonOffset:Wt,setScissorTest:Xt,activeTexture:P,bindTexture:ue,unbindTexture:Kt,compressedTexImage2D:Qt,compressedTexImage3D:b,texImage2D:X,texImage3D:K,pixelStorei:It,getParameter:St,updateUBOMapping:Ot,uniformBlockBinding:Ht,texStorage2D:ht,texStorage3D:ft,texSubImage2D:y,texSubImage3D:L,compressedTexSubImage2D:k,compressedTexSubImage3D:tt,scissor:gt,viewport:ut,reset:se}}function zg(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap,f=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function M(b,y){return g?new OffscreenCanvas(b,y):ts("canvas")}function m(b,y,L){let k=1,tt=Qt(b);if(tt.width>L||tt.height>L)k=L/Math.max(tt.width,tt.height);if(k<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ht=Math.floor(k*tt.width),ft=Math.floor(k*tt.height);if(h===void 0)h=M(ht,ft);let X=y?M(ht,ft):h;return X.width=ht,X.height=ft,X.getContext("2d").drawImage(b,0,0,ht,ft),Bt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ht+"x"+ft+")."),X}else{if("data"in b)Bt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+").");return b}return b}function d(b){return b.generateMipmaps}function E(b){t.generateMipmap(b)}function w(b){if(b.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(b.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function _(b,y,L,k,tt,ht=!1){if(b!==null){if(t[b]!==void 0)return t[b];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ft;if(k){if(ft=e.get("EXT_texture_norm16"),!ft)Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let X=y;if(y===t.RED){if(L===t.FLOAT)X=t.R32F;if(L===t.HALF_FLOAT)X=t.R16F;if(L===t.UNSIGNED_BYTE)X=t.R8;if(L===t.UNSIGNED_SHORT&&ft)X=ft.R16_EXT;if(L===t.SHORT&&ft)X=ft.R16_SNORM_EXT}if(y===t.RED_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.R8UI;if(L===t.UNSIGNED_SHORT)X=t.R16UI;if(L===t.UNSIGNED_INT)X=t.R32UI;if(L===t.BYTE)X=t.R8I;if(L===t.SHORT)X=t.R16I;if(L===t.INT)X=t.R32I}if(y===t.RG){if(L===t.FLOAT)X=t.RG32F;if(L===t.HALF_FLOAT)X=t.RG16F;if(L===t.UNSIGNED_BYTE)X=t.RG8;if(L===t.UNSIGNED_SHORT&&ft)X=ft.RG16_EXT;if(L===t.SHORT&&ft)X=ft.RG16_SNORM_EXT}if(y===t.RG_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RG8UI;if(L===t.UNSIGNED_SHORT)X=t.RG16UI;if(L===t.UNSIGNED_INT)X=t.RG32UI;if(L===t.BYTE)X=t.RG8I;if(L===t.SHORT)X=t.RG16I;if(L===t.INT)X=t.RG32I}if(y===t.RGB_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RGB8UI;if(L===t.UNSIGNED_SHORT)X=t.RGB16UI;if(L===t.UNSIGNED_INT)X=t.RGB32UI;if(L===t.BYTE)X=t.RGB8I;if(L===t.SHORT)X=t.RGB16I;if(L===t.INT)X=t.RGB32I}if(y===t.RGBA_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RGBA8UI;if(L===t.UNSIGNED_SHORT)X=t.RGBA16UI;if(L===t.UNSIGNED_INT)X=t.RGBA32UI;if(L===t.BYTE)X=t.RGBA8I;if(L===t.SHORT)X=t.RGBA16I;if(L===t.INT)X=t.RGBA32I}if(y===t.RGB){if(L===t.UNSIGNED_SHORT&&ft)X=ft.RGB16_EXT;if(L===t.SHORT&&ft)X=ft.RGB16_SNORM_EXT;if(L===t.UNSIGNED_INT_5_9_9_9_REV)X=t.RGB9_E5;if(L===t.UNSIGNED_INT_10F_11F_11F_REV)X=t.R11F_G11F_B10F}if(y===t.RGBA){let K=ht?po:ee.getTransfer(tt);if(L===t.FLOAT)X=t.RGBA32F;if(L===t.HALF_FLOAT)X=t.RGBA16F;if(L===t.UNSIGNED_BYTE)X=K===me?t.SRGB8_ALPHA8:t.RGBA8;if(L===t.UNSIGNED_SHORT&&ft)X=ft.RGBA16_EXT;if(L===t.SHORT&&ft)X=ft.RGBA16_SNORM_EXT;if(L===t.UNSIGNED_SHORT_4_4_4_4)X=t.RGBA4;if(L===t.UNSIGNED_SHORT_5_5_5_1)X=t.RGB5_A1}if(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)e.get("EXT_color_buffer_float");return X}function T(b,y){let L;if(b){if(y===null||y===kn||y===Bi)L=t.DEPTH24_STENCIL8;else if(y===wn)L=t.DEPTH32F_STENCIL8;else if(y===us)L=t.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(y===null||y===kn||y===Bi)L=t.DEPTH_COMPONENT24;else if(y===wn)L=t.DEPTH_COMPONENT32F;else if(y===us)L=t.DEPTH_COMPONENT16;return L}function R(b,y){if(d(b)===!0||b.isFramebufferTexture&&b.minFilter!==zn&&b.minFilter!==ze)return Math.log2(Math.max(y.width,y.height))+1;else if(b.mipmaps!==void 0&&b.mipmaps.length>0)return b.mipmaps.length;else if(b.isCompressedTexture&&Array.isArray(b.image))return y.mipmaps.length;else return 1}function A(b){let y=b.target;if(y.removeEventListener("dispose",A),S(y),y.isVideoTexture)u.delete(y);if(y.isHTMLTexture)f.delete(y)}function x(b){let y=b.target;y.removeEventListener("dispose",x),N(y)}function S(b){let y=i.get(b);if(y.__webglInit===void 0)return;let L=b.source,k=p.get(L);if(k){let tt=k[y.__cacheKey];if(tt.usedTimes--,tt.usedTimes===0)O(b);if(Object.keys(k).length===0)p.delete(L)}i.remove(b)}function O(b){let y=i.get(b);t.deleteTexture(y.__webglTexture);let L=b.source,k=p.get(L);delete k[y.__cacheKey],a.memory.textures--}function N(b){let y=i.get(b);if(b.depthTexture)b.depthTexture.dispose(),i.remove(b.depthTexture);if(b.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(y.__webglFramebuffer[k]))for(let tt=0;tt<y.__webglFramebuffer[k].length;tt++)t.deleteFramebuffer(y.__webglFramebuffer[k][tt]);else t.deleteFramebuffer(y.__webglFramebuffer[k]);if(y.__webglDepthbuffer)t.deleteRenderbuffer(y.__webglDepthbuffer[k])}else{if(Array.isArray(y.__webglFramebuffer))for(let k=0;k<y.__webglFramebuffer.length;k++)t.deleteFramebuffer(y.__webglFramebuffer[k]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer)t.deleteRenderbuffer(y.__webglDepthbuffer);if(y.__webglMultisampledFramebuffer)t.deleteFramebuffer(y.__webglMultisampledFramebuffer);if(y.__webglColorRenderbuffer){for(let k=0;k<y.__webglColorRenderbuffer.length;k++)if(y.__webglColorRenderbuffer[k])t.deleteRenderbuffer(y.__webglColorRenderbuffer[k])}if(y.__webglDepthRenderbuffer)t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=b.textures;for(let k=0,tt=L.length;k<tt;k++){let ht=i.get(L[k]);if(ht.__webglTexture)t.deleteTexture(ht.__webglTexture),a.memory.textures--;i.remove(L[k])}i.remove(b)}let F=0;function Z(){F=0}function I(){return F}function H(b){F=b}function J(){let b=F;if(b>=s.maxTextures)Bt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures);return F+=1,b}function z(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function at(b,y){let L=i.get(b);if(b.isVideoTexture)ue(b);if(b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&L.__version!==b.version){let k=b.image;if(k===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(L,b,y);return}}else if(b.isExternalTexture)L.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+y)}function W(b,y){let L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){Dt(L,b,y);return}else if(b.isExternalTexture)L.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+y)}function Q(b,y){let L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){Dt(L,b,y);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+y)}function nt(b,y){let L=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&L.__version!==b.version){Gt(L,b,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+y)}let Lt={[Rc]:t.REPEAT,[rr]:t.CLAMP_TO_EDGE,[Cc]:t.MIRRORED_REPEAT},Nt={[zn]:t.NEAREST,[Pc]:t.NEAREST_MIPMAP_NEAREST,[hs]:t.NEAREST_MIPMAP_LINEAR,[ze]:t.LINEAR,[ar]:t.LINEAR_MIPMAP_NEAREST,[ei]:t.LINEAR_MIPMAP_LINEAR},le={[Hc]:t.NEVER,[Xc]:t.ALWAYS,[zc]:t.LESS,[fr]:t.LEQUAL,[kc]:t.EQUAL,[pr]:t.GEQUAL,[Vc]:t.GREATER,[Wc]:t.NOTEQUAL};function Yt(b,y){if(y.type===wn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ze||y.magFilter===ar||y.magFilter===hs||y.magFilter===ei||y.minFilter===ze||y.minFilter===ar||y.minFilter===hs||y.minFilter===ei))Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(b,t.TEXTURE_WRAP_S,Lt[y.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Lt[y.wrapT]),b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)t.texParameteri(b,t.TEXTURE_WRAP_R,Lt[y.wrapR]);if(t.texParameteri(b,t.TEXTURE_MAG_FILTER,Nt[y.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Nt[y.minFilter]),y.compareFunction)t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,le[y.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zn)return;if(y.minFilter!==hs&&y.minFilter!==ei)return;if(y.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function q(b,y){let L=!1;if(b.__webglInit===void 0)b.__webglInit=!0,y.addEventListener("dispose",A);let k=y.source,tt=p.get(k);if(tt===void 0)tt={},p.set(k,tt);let ht=z(y);if(ht!==b.__cacheKey){if(tt[ht]===void 0)tt[ht]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,L=!0;tt[ht].usedTimes++;let ft=tt[b.__cacheKey];if(ft!==void 0){if(tt[b.__cacheKey].usedTimes--,ft.usedTimes===0)O(y)}b.__cacheKey=ht,b.__webglTexture=tt[ht].texture}return L}function lt(b,y,L){return Math.floor(Math.floor(b/L)/y)}function rt(b,y,L,k){let ht=b.updateRanges;if(ht.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,L,k,y.data);else{ht.sort((It,gt)=>It.start-gt.start);let ft=0;for(let It=1;It<ht.length;It++){let gt=ht[ft],ut=ht[It],Ot=gt.start+gt.count,Ht=lt(ut.start,y.width,4),se=lt(gt.start,y.width,4);if(ut.start<=Ot+1&&Ht===se&&lt(ut.start+ut.count-1,y.width,4)===Ht)gt.count=Math.max(gt.count,ut.start+ut.count-gt.start);else++ft,ht[ft]=ut}ht.length=ft+1;let X=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),St=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let It=0,gt=ht.length;It<gt;It++){let ut=ht[It],Ot=Math.floor(ut.start/4),Ht=Math.ceil(ut.count/4),se=Ot%y.width,U=Math.floor(Ot/y.width),pt=Ht,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,se,U,pt,1,L,k,y.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,X),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,St)}}function Dt(b,y,L){let k=t.TEXTURE_2D;if(y.isDataArrayTexture||y.isCompressedArrayTexture)k=t.TEXTURE_2D_ARRAY;if(y.isData3DTexture)k=t.TEXTURE_3D;let tt=q(b,y),ht=y.source;n.bindTexture(k,b.__webglTexture,t.TEXTURE0+L);let ft=i.get(ht);if(ht.version!==ft.__version||tt===!0){if(n.activeTexture(t.TEXTURE0+L),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Y=ee.getPrimaries(ee.workingColorSpace),mt=y.colorSpace===ri?null:ee.getPrimaries(y.colorSpace),bt=y.colorSpace===ri||Y===mt?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let K=m(y.image,!1,s.maxTextureSize);K=Kt(y,K);let St=r.convert(y.format,y.colorSpace),It=r.convert(y.type),gt=_(y.internalFormat,St,It,y.normalized,y.colorSpace,y.isVideoTexture);Yt(k,y);let ut,Ot=y.mipmaps,Ht=y.isVideoTexture!==!0,se=ft.__version===void 0||tt===!0,U=ht.dataReady,pt=R(y,K);if(y.isDepthTexture){if(gt=T(y.format===ii,y.type),se)if(Ht)n.texStorage2D(t.TEXTURE_2D,1,gt,K.width,K.height);else n.texImage2D(t.TEXTURE_2D,0,gt,K.width,K.height,0,St,It,null)}else if(y.isDataTexture)if(Ot.length>0){if(Ht&&se)n.texStorage2D(t.TEXTURE_2D,pt,gt,Ot[0].width,Ot[0].height);for(let Y=0,mt=Ot.length;Y<mt;Y++)if(ut=Ot[Y],Ht){if(U)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ut.width,ut.height,St,It,ut.data)}else n.texImage2D(t.TEXTURE_2D,Y,gt,ut.width,ut.height,0,St,It,ut.data);y.generateMipmaps=!1}else if(Ht){if(se)n.texStorage2D(t.TEXTURE_2D,pt,gt,K.width,K.height);if(U)rt(y,K,St,It)}else n.texImage2D(t.TEXTURE_2D,0,gt,K.width,K.height,0,St,It,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){if(Ht&&se)n.texStorage3D(t.TEXTURE_2D_ARRAY,pt,gt,Ot[0].width,Ot[0].height,K.depth);for(let Y=0,mt=Ot.length;Y<mt;Y++)if(ut=Ot[Y],y.format!==fn)if(St!==null)if(Ht){if(U)if(y.layerUpdates.size>0){let bt=Yo(ut.width,ut.height,y.format,y.type);for(let et of y.layerUpdates){let xt=ut.data.subarray(et*bt/ut.data.BYTES_PER_ELEMENT,(et+1)*bt/ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,et,ut.width,ut.height,1,St,xt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,K.depth,St,ut.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,gt,ut.width,ut.height,K.depth,0,ut.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ht){if(U)n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,K.depth,St,It,ut.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,Y,gt,ut.width,ut.height,K.depth,0,St,It,ut.data);if(y.layerUpdates.size>0)y.clearLayerUpdates()}else{if(Ht&&se)n.texStorage2D(t.TEXTURE_2D,pt,gt,Ot[0].width,Ot[0].height);for(let Y=0,mt=Ot.length;Y<mt;Y++)if(ut=Ot[Y],y.format!==fn)if(St!==null)if(Ht){if(U)n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ut.width,ut.height,St,ut.data)}else n.compressedTexImage2D(t.TEXTURE_2D,Y,gt,ut.width,ut.height,0,ut.data);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Ht){if(U)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ut.width,ut.height,St,It,ut.data)}else n.texImage2D(t.TEXTURE_2D,Y,gt,ut.width,ut.height,0,St,It,ut.data)}else if(y.isDataArrayTexture)if(Ht){if(se)n.texStorage3D(t.TEXTURE_2D_ARRAY,pt,gt,K.width,K.height,K.depth);if(U)if(y.layerUpdates.size>0){let Y=Yo(K.width,K.height,y.format,y.type);for(let mt of y.layerUpdates){let bt=K.data.subarray(mt*Y/K.data.BYTES_PER_ELEMENT,(mt+1)*Y/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,mt,K.width,K.height,1,St,It,bt)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,St,It,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,gt,K.width,K.height,K.depth,0,St,It,K.data);else if(y.isData3DTexture)if(Ht){if(se)n.texStorage3D(t.TEXTURE_3D,pt,gt,K.width,K.height,K.depth);if(U)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,St,It,K.data)}else n.texImage3D(t.TEXTURE_3D,0,gt,K.width,K.height,K.depth,0,St,It,K.data);else if(y.isFramebufferTexture){if(se)if(Ht)n.texStorage2D(t.TEXTURE_2D,pt,gt,K.width,K.height);else{let Y=K.width,mt=K.height;for(let bt=0;bt<pt;bt++)n.texImage2D(t.TEXTURE_2D,bt,gt,Y,mt,0,St,It,null),Y>>=1,mt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){let Y=t.canvas;if(!Y.hasAttribute("layoutsubtree"))Y.setAttribute("layoutsubtree","true");if(K.parentNode!==Y){Y.appendChild(K),f.add(y),Y.onpaint=(mt)=>{let bt=mt.changedElements;for(let et of f)if(bt.includes(et.image))et.needsUpdate=!0},Y.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,K);else{let{RGBA:bt,RGBA:et,UNSIGNED_BYTE:xt}=t;t.texElementImage2D(t.TEXTURE_2D,0,bt,et,xt,K)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Ht&&se){let Y=Qt(Ot[0]);n.texStorage2D(t.TEXTURE_2D,pt,gt,Y.width,Y.height)}for(let Y=0,mt=Ot.length;Y<mt;Y++)if(ut=Ot[Y],Ht){if(U)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,St,It,ut)}else n.texImage2D(t.TEXTURE_2D,Y,gt,St,It,ut);y.generateMipmaps=!1}else if(Ht){if(se){let Y=Qt(K);n.texStorage2D(t.TEXTURE_2D,pt,gt,Y.width,Y.height)}if(U)n.texSubImage2D(t.TEXTURE_2D,0,0,0,St,It,K)}else n.texImage2D(t.TEXTURE_2D,0,gt,St,It,K);if(d(y))E(k);if(ft.__version=ht.version,y.onUpdate)y.onUpdate(y)}b.__version=y.version}function Gt(b,y,L){if(y.image.length!==6)return;let k=q(b,y),tt=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+L);let ht=i.get(tt);if(tt.version!==ht.__version||k===!0){n.activeTexture(t.TEXTURE0+L);let ft=ee.getPrimaries(ee.workingColorSpace),X=y.colorSpace===ri?null:ee.getPrimaries(y.colorSpace),K=y.colorSpace===ri||ft===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let St=y.isCompressedTexture||y.image[0].isCompressedTexture,It=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let et=0;et<6;et++){if(!St&&!It)gt[et]=m(y.image[et],!0,s.maxCubemapSize);else gt[et]=It?y.image[et].image:y.image[et];gt[et]=Kt(y,gt[et])}let ut=gt[0],Ot=r.convert(y.format,y.colorSpace),Ht=r.convert(y.type),se=_(y.internalFormat,Ot,Ht,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,pt=ht.__version===void 0||k===!0,Y=tt.dataReady,mt=R(y,ut);Yt(t.TEXTURE_CUBE_MAP,y);let bt;if(St){if(U&&pt)n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,se,ut.width,ut.height);for(let et=0;et<6;et++){bt=gt[et].mipmaps;for(let xt=0;xt<bt.length;xt++){let qt=bt[xt];if(y.format!==fn)if(Ot!==null)if(U){if(Y)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,qt.width,qt.height,Ot,qt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,se,qt.width,qt.height,0,qt.data);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(U){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,qt.width,qt.height,Ot,Ht,qt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,se,qt.width,qt.height,0,Ot,Ht,qt.data)}}}else{if(bt=y.mipmaps,U&&pt){if(bt.length>0)mt++;let et=Qt(gt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,se,et.width,et.height)}for(let et=0;et<6;et++)if(It){if(U){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,gt[et].width,gt[et].height,Ot,Ht,gt[et].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,se,gt[et].width,gt[et].height,0,Ot,Ht,gt[et].data);for(let xt=0;xt<bt.length;xt++){let _e=bt[xt].image[et].image;if(U){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,_e.width,_e.height,Ot,Ht,_e.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,se,_e.width,_e.height,0,Ot,Ht,_e.data)}}else{if(U){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ot,Ht,gt[et])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,se,Ot,Ht,gt[et]);for(let xt=0;xt<bt.length;xt++){let qt=bt[xt];if(U){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,Ot,Ht,qt.image[et])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,se,Ot,Ht,qt.image[et])}}}if(d(y))E(t.TEXTURE_CUBE_MAP);if(ht.__version=tt.version,y.onUpdate)y.onUpdate(y)}b.__version=y.version}function wt(b,y,L,k,tt,ht){let ft=r.convert(L.format,L.colorSpace),X=r.convert(L.type),K=_(L.internalFormat,ft,X,L.normalized,L.colorSpace),St=i.get(y),It=i.get(L);if(It.__renderTarget=y,!St.__hasExternalTextures){let gt=Math.max(1,y.width>>ht),ut=Math.max(1,y.height>>ht);if(tt===t.TEXTURE_3D||tt===t.TEXTURE_2D_ARRAY)n.texImage3D(tt,ht,K,gt,ut,y.depth,0,ft,X,null);else n.texImage2D(tt,ht,K,gt,ut,0,ft,X,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,b),P(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,tt,It.__webglTexture,0,Xt(y));else if(tt===t.TEXTURE_2D||tt>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,k,tt,It.__webglTexture,ht);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(b,y,L){if(t.bindRenderbuffer(t.RENDERBUFFER,b),y.depthBuffer){let k=y.depthTexture,tt=k&&k.isDepthTexture?k.type:null,ht=T(y.stencilBuffer,tt),ft=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(P(y))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xt(y),ht,y.width,y.height);else if(L)t.renderbufferStorageMultisample(t.RENDERBUFFER,Xt(y),ht,y.width,y.height);else t.renderbufferStorage(t.RENDERBUFFER,ht,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ft,t.RENDERBUFFER,b)}else{let k=y.textures;for(let tt=0;tt<k.length;tt++){let ht=k[tt],ft=r.convert(ht.format,ht.colorSpace),X=r.convert(ht.type),K=_(ht.internalFormat,ft,X,ht.normalized,ht.colorSpace);if(P(y))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xt(y),K,y.width,y.height);else if(L)t.renderbufferStorageMultisample(t.RENDERBUFFER,Xt(y),K,y.width,y.height);else t.renderbufferStorage(t.RENDERBUFFER,K,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function j(b,y,L){let k=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(y.depthTexture);if(tt.__renderTarget=y,!tt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0;if(k){if(tt.__webglInit===void 0)tt.__webglInit=!0,y.depthTexture.addEventListener("dispose",A);if(tt.__webglTexture===void 0){tt.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,tt.__webglTexture),Yt(t.TEXTURE_CUBE_MAP,y.depthTexture);let St=r.convert(y.depthTexture.format),It=r.convert(y.depthTexture.type),gt;if(y.depthTexture.format===ni)gt=t.DEPTH_COMPONENT24;else if(y.depthTexture.format===ii)gt=t.DEPTH24_STENCIL8;for(let ut=0;ut<6;ut++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,gt,y.width,y.height,0,St,It,null)}}else at(y.depthTexture,0);let ht=tt.__webglTexture,ft=Xt(y),X=k?t.TEXTURE_CUBE_MAP_POSITIVE_X+L:t.TEXTURE_2D,K=y.depthTexture.format===ii?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===ni)if(P(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,X,ht,0,ft);else t.framebufferTexture2D(t.FRAMEBUFFER,K,X,ht,0);else if(y.depthTexture.format===ii)if(P(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,X,ht,0,ft);else t.framebufferTexture2D(t.FRAMEBUFFER,K,X,ht,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(b){let y=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){let k=b.depthTexture;if(y.__depthDisposeCallback)y.__depthDisposeCallback();if(k){let tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,k.removeEventListener("dispose",tt)};k.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=k}if(b.depthTexture&&!y.__autoAllocateDepthBuffer)if(L)for(let k=0;k<6;k++)j(y.__webglFramebuffer[k],b,k);else{let k=b.texture.mipmaps;if(k&&k.length>0)j(y.__webglFramebuffer[0],b,0);else j(y.__webglFramebuffer,b,0)}else if(L){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]===void 0)y.__webglDepthbuffer[k]=t.createRenderbuffer(),ce(y.__webglDepthbuffer[k],b,!1);else{let tt=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,ht),t.framebufferRenderbuffer(t.FRAMEBUFFER,tt,t.RENDERBUFFER,ht)}}else{let k=b.texture.mipmaps;if(k&&k.length>0)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer);if(y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),ce(y.__webglDepthbuffer,b,!1);else{let tt=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ht),t.framebufferRenderbuffer(t.FRAMEBUFFER,tt,t.RENDERBUFFER,ht)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ot(b,y,L){let k=i.get(b);if(y!==void 0)wt(k.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(L!==void 0)st(b)}function ct(b){let y=b.texture,L=i.get(b),k=i.get(y);b.addEventListener("dispose",x);let tt=b.textures,ht=b.isWebGLCubeRenderTarget===!0,ft=tt.length>1;if(!ft){if(k.__webglTexture===void 0)k.__webglTexture=t.createTexture();k.__version=y.version,a.memory.textures++}if(ht){L.__webglFramebuffer=[];for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[X]=[];for(let K=0;K<y.mipmaps.length;K++)L.__webglFramebuffer[X][K]=t.createFramebuffer()}else L.__webglFramebuffer[X]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let X=0;X<y.mipmaps.length;X++)L.__webglFramebuffer[X]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(ft)for(let X=0,K=tt.length;X<K;X++){let St=i.get(tt[X]);if(St.__webglTexture===void 0)St.__webglTexture=t.createTexture(),a.memory.textures++}if(b.samples>0&&P(b)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let X=0;X<tt.length;X++){let K=tt[X];L.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[X]);let St=r.convert(K.format,K.colorSpace),It=r.convert(K.type),gt=_(K.internalFormat,St,It,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),ut=Xt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ut,gt,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,L.__webglColorRenderbuffer[X])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer)L.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(L.__webglDepthRenderbuffer,b,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ht){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Yt(t.TEXTURE_CUBE_MAP,y);for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)wt(L.__webglFramebuffer[X][K],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,K);else wt(L.__webglFramebuffer[X],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);if(d(y))E(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ft){for(let X=0,K=tt.length;X<K;X++){let St=tt[X],It=i.get(St),gt=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)gt=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(gt,It.__webglTexture),Yt(gt,St),wt(L.__webglFramebuffer,b,St,t.COLOR_ATTACHMENT0+X,gt,0),d(St))E(gt)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)X=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(X,k.__webglTexture),Yt(X,y),y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)wt(L.__webglFramebuffer[K],b,y,t.COLOR_ATTACHMENT0,X,K);else wt(L.__webglFramebuffer,b,y,t.COLOR_ATTACHMENT0,X,0);if(d(y))E(X);n.unbindTexture()}if(b.depthBuffer)st(b)}function vt(b){let y=b.textures;for(let L=0,k=y.length;L<k;L++){let tt=y[L];if(d(tt)){let ht=w(b),ft=i.get(tt).__webglTexture;n.bindTexture(ht,ft),E(ht),n.unbindTexture()}}}let Pt=[],Ft=[];function Wt(b){if(b.samples>0){if(P(b)===!1){let{textures:y,width:L,height:k}=b,tt=t.COLOR_BUFFER_BIT,ht=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ft=i.get(b),X=y.length>1;if(X)for(let St=0;St<y.length;St++)n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let K=b.texture.mipmaps;if(K&&K.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let St=0;St<y.length;St++){if(b.resolveDepthBuffer){if(b.depthBuffer)tt|=t.DEPTH_BUFFER_BIT;if(b.stencilBuffer&&b.resolveStencilBuffer)tt|=t.STENCIL_BUFFER_BIT}if(X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ft.__webglColorRenderbuffer[St]);let It=i.get(y[St]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,It,0)}if(t.blitFramebuffer(0,0,L,k,0,0,L,k,tt,t.NEAREST),l===!0){if(Pt.length=0,Ft.length=0,Pt.push(t.COLOR_ATTACHMENT0+St),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1)Pt.push(ht),Ft.push(ht),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ft);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pt)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let St=0;St<y.length;St++){n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.RENDERBUFFER,ft.__webglColorRenderbuffer[St]);let It=i.get(y[St]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ft.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+St,t.TEXTURE_2D,It,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Xt(b){return Math.min(s.maxSamples,b.samples)}function P(b){let y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ue(b){let y=a.render.frame;if(u.get(b)!==y)u.set(b,y),b.update()}function Kt(b,y){let{colorSpace:L,format:k,type:tt}=b;if(b.isCompressedTexture===!0||b.isVideoTexture===!0)return y;if(L!==fo&&L!==ri)if(ee.getTransfer(L)===me){if(k!==fn||tt!==rn)Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else zt("WebGLTextures: Unsupported texture color space:",L);return y}function Qt(b){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement)c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height;else if(typeof VideoFrame<"u"&&b instanceof VideoFrame)c.width=b.displayWidth,c.height=b.displayHeight;else c.width=b.width,c.height=b.height;return c}this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.getTextureUnits=I,this.setTextureUnits=H,this.setTexture2D=at,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=nt,this.rebindTextures=ot,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=P,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kg(t,e){function n(i,s=ri){let r,a=ee.getTransfer(s);if(i===rn)return t.UNSIGNED_BYTE;if(i===Pa)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ia)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Nc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Dc)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ic)return t.BYTE;if(i===Lc)return t.SHORT;if(i===us)return t.UNSIGNED_SHORT;if(i===Ca)return t.INT;if(i===kn)return t.UNSIGNED_INT;if(i===wn)return t.FLOAT;if(i===dn)return t.HALF_FLOAT;if(i===Uc)return t.ALPHA;if(i===Fc)return t.RGB;if(i===fn)return t.RGBA;if(i===ni)return t.DEPTH_COMPONENT;if(i===ii)return t.DEPTH_STENCIL;if(i===Oc)return t.RED;if(i===La)return t.RED_INTEGER;if(i===si)return t.RG;if(i===Na)return t.RG_INTEGER;if(i===Da)return t.RGBA_INTEGER;if(i===or||i===lr||i===cr||i===hr)if(a===me)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===Fa||i===Oa||i===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ga||i===Ha||i===za||i===ka||i===Va||i===ur||i===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ga||i===Ha)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===za)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ka)return r.COMPRESSED_R11_EAC;if(i===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ur)return r.COMPRESSED_RG11_EAC;if(i===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===$a||i===Ka||i===Qa||i===ja||i===to||i===eo||i===no||i===io||i===so)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ya)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Za)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ja)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ka)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ja)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===to)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===no)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===so)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ro||i===ao||i===oo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ro)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lo||i===co||i===dr||i===ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Bi)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
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

}`;class Hh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Sr(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new Qe({vertexShader:Vg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new ke(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zh extends An{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,f=null,h=null,p=null,g=typeof XRWebGLBinding<"u",M=new Hh,m={},d=e.getContextAttributes(),E=null,w=null,_=[],T=[],R=new dt,A=null,x=null,S=new De;S.viewport=new ve;let O=new De;O.viewport=new ve;let N=[S,O],F=new Vo,Z=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let lt=_[q];if(lt===void 0)lt=new fs,_[q]=lt;return lt.getTargetRaySpace()},this.getControllerGrip=function(q){let lt=_[q];if(lt===void 0)lt=new fs,_[q]=lt;return lt.getGripSpace()},this.getHand=function(q){let lt=_[q];if(lt===void 0)lt=new fs,_[q]=lt;return lt.getHandSpace()};function H(q){let lt=T.indexOf(q.inputSource);if(lt===-1)return;let rt=_[lt];if(rt!==void 0)rt.update(q.inputSource,q.frame,l||r),rt.dispatchEvent({type:q.type,data:q.inputSource})}function J(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",z);for(let q=0;q<_.length;q++){let lt=T[q];if(lt===null)continue;T[q]=null,_[q].disconnect(lt)}Z=null,I=null,M.reset();for(let q in m)delete m[q];if(t.setRenderTarget(E),h=null,f=null,u=null,i=null,w=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),x!==null){let q=x.camera;q.fov=x.fov,q.zoom=x.zoom,q.updateProjectionMatrix(),x=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){if(s=q,n.isPresenting===!0)Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){if(a=q,n.isPresenting===!0)Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){if(u===null&&g)u=new XRWebGLBinding(i,e);return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",J),i.addEventListener("inputsourceschange",z),d.xrCompatible!==!0)await e.makeXRCompatible();if(A=t.getPixelRatio(),t.getSize(R),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let rt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new Ye(h.framebufferWidth,h.framebufferHeight,{format:fn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let rt=null,Dt=null,Gt=null;if(d.depth)Gt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=d.stencil?ii:ni,Dt=d.stencil?Bi:kn;let wt={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(wt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Ye(f.textureWidth,f.textureHeight,{format:fn,type:rn,depthTexture:new ci(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(q){for(let lt=0;lt<q.removed.length;lt++){let rt=q.removed[lt],Dt=T.indexOf(rt);if(Dt>=0)T[Dt]=null,_[Dt].disconnect(rt)}for(let lt=0;lt<q.added.length;lt++){let rt=q.added[lt],Dt=T.indexOf(rt);if(Dt===-1){for(let wt=0;wt<_.length;wt++)if(wt>=T.length){T.push(rt),Dt=wt;break}else if(T[wt]===null){T[wt]=rt,Dt=wt;break}if(Dt===-1)break}let Gt=_[Dt];if(Gt)Gt.connect(rt)}}let at=new C,W=new C;function Q(q,lt,rt){at.setFromMatrixPosition(lt.matrixWorld),W.setFromMatrixPosition(rt.matrixWorld);let Dt=at.distanceTo(W),Gt=lt.projectionMatrix.elements,wt=rt.projectionMatrix.elements,ce=Gt[14]/(Gt[10]-1),j=Gt[14]/(Gt[10]+1),st=(Gt[9]+1)/Gt[5],ot=(Gt[9]-1)/Gt[5],ct=(Gt[8]-1)/Gt[0],vt=(wt[8]+1)/wt[0],Pt=ce*ct,Ft=ce*vt,Wt=Dt/(-ct+vt),Xt=Wt*-ct;if(lt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xt),q.translateZ(Wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Gt[10]===-1)q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let P=ce+Wt,ue=j+Wt,Kt=Pt-Xt,Qt=Ft+(Dt-Xt),b=st*j/ue*P,y=ot*j/ue*P;q.projectionMatrix.makePerspective(Kt,Qt,b,y,P,ue),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,lt){if(lt===null)q.matrixWorld.copy(q.matrix);else q.matrixWorld.multiplyMatrices(lt.matrixWorld,q.matrix);q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let{near:lt,far:rt}=q;if(M.texture!==null){if(M.depthNear>0)lt=M.depthNear;if(M.depthFar>0)rt=M.depthFar}if(F.near=O.near=S.near=lt,F.far=O.far=S.far=rt,Z!==F.near||I!==F.far)i.updateRenderState({depthNear:F.near,depthFar:F.far}),Z=F.near,I=F.far;F.layers.mask=q.layers.mask|6,S.layers.mask=F.layers.mask&-5,O.layers.mask=F.layers.mask&-3;let Dt=q.parent,Gt=F.cameras;nt(F,Dt);for(let wt=0;wt<Gt.length;wt++)nt(Gt[wt],Dt);if(Gt.length===2)Q(F,S,O);else F.projectionMatrix.copy(S.projectionMatrix);if(x===null&&q.isPerspectiveCamera)x={camera:q,fov:q.fov,zoom:q.zoom};Lt(q,F,Dt)};function Lt(q,lt,rt){if(rt===null)q.matrix.copy(lt.matrixWorld);else q.matrix.copy(rt.matrixWorld),q.matrix.invert(),q.matrix.multiply(lt.matrixWorld);if(q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(lt.projectionMatrix),q.projectionMatrixInverse.copy(lt.projectionMatrixInverse),q.isPerspectiveCamera)q.fov=es*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1}this.getCamera=function(){return F},this.getFoveation=function(){if(f===null&&h===null)return;return o},this.setFoveation=function(q){if(o=q,f!==null)f.fixedFoveation=q;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=q},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(F)},this.getCameraTexture=function(q){return m[q]};let Nt=null;function le(q,lt){if(c=lt.getViewerPose(l||r),p=lt,c!==null){let rt=c.views;if(h!==null)t.setRenderTargetFramebuffer(w,h.framebuffer),t.setRenderTarget(w);let Dt=!1;if(rt.length!==F.cameras.length)F.cameras.length=0,Dt=!0;for(let j=0;j<rt.length;j++){let st=rt[j],ot=null;if(h!==null)ot=h.getViewport(st);else{let vt=u.getViewSubImage(f,st);if(ot=vt.viewport,j===0)t.setRenderTargetTextures(w,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(w)}let ct=N[j];if(ct===void 0)ct=new De,ct.layers.enable(j),ct.viewport=new ve,N[j]=ct;if(ct.matrix.fromArray(st.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(st.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(ot.x,ot.y,ot.width,ot.height),j===0)F.matrix.copy(ct.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);if(Dt===!0)F.cameras.push(ct)}let Gt=i.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let j=u.getDepthInformation(rt[0]);if(j&&j.isValid&&j.texture)M.init(j,i.renderState)}if(Gt&&Gt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let j=0;j<rt.length;j++){let st=rt[j].camera;if(st){let ot=m[st];if(!ot)ot=new Sr,m[st]=ot;let ct=u.getCameraImage(st);ot.sourceTexture=ct}}}}for(let rt=0;rt<_.length;rt++){let Dt=T[rt],Gt=_[rt];if(Dt!==null&&Gt!==void 0)Gt.update(Dt,lt,l||r)}if(Nt)Nt(q,lt);if(lt.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:lt});p=null}let Yt=new Ch;Yt.setAnimationLoop(le),this.setAnimationLoop=function(q){Nt=q},this.dispose=function(){}}}var Xg=new pe,kh=new Vt;kh.set(-1,0,0,0,1,0,0,0,1);function qg(t,e){function n(m,d){if(m.matrixAutoUpdate===!0)m.updateMatrix();d.value.copy(m.matrix)}function i(m,d){if(d.color.getRGB(m.fogColor.value,Ro(t)),d.isFog)m.fogNear.value=d.near,m.fogFar.value=d.far;else if(d.isFogExp2)m.fogDensity.value=d.density}function s(m,d,E,w,_){if(d.isNodeMaterial)d.uniformsNeedUpdate=!1;else if(d.isMeshBasicMaterial)r(m,d);else if(d.isMeshLambertMaterial){if(r(m,d),d.envMap)m.envMapIntensity.value=d.envMapIntensity}else if(d.isMeshToonMaterial)r(m,d),f(m,d);else if(d.isMeshPhongMaterial){if(r(m,d),u(m,d),d.envMap)m.envMapIntensity.value=d.envMapIntensity}else if(d.isMeshStandardMaterial){if(r(m,d),h(m,d),d.isMeshPhysicalMaterial)p(m,d,_)}else if(d.isMeshMatcapMaterial)r(m,d),g(m,d);else if(d.isMeshDepthMaterial)r(m,d);else if(d.isMeshDistanceMaterial)r(m,d),M(m,d);else if(d.isMeshNormalMaterial)r(m,d);else if(d.isLineBasicMaterial){if(a(m,d),d.isLineDashedMaterial)o(m,d)}else if(d.isPointsMaterial)l(m,d,E,w);else if(d.isSpriteMaterial)c(m,d);else if(d.isShadowMaterial)m.color.value.copy(d.color),m.opacity.value=d.opacity;else if(d.isShaderMaterial)d.uniformsNeedUpdate=!1}function r(m,d){if(m.opacity.value=d.opacity,d.color)m.diffuse.value.copy(d.color);if(d.emissive)m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity);if(d.map)m.map.value=d.map,n(d.map,m.mapTransform);if(d.alphaMap)m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform);if(d.bumpMap){if(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===He)m.bumpScale.value*=-1}if(d.normalMap){if(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===He)m.normalScale.value.negate()}if(d.displacementMap)m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias;if(d.emissiveMap)m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform);if(d.specularMap)m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform);if(d.alphaTest>0)m.alphaTest.value=d.alphaTest;let E=e.get(d),{envMap:w,envMapRotation:_}=E;if(w){if(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(kh);m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio}if(d.lightMap)m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform);if(d.aoMap)m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform)}function a(m,d){if(m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map)m.map.value=d.map,n(d.map,m.mapTransform)}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,w){if(m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=w*0.5,d.map)m.map.value=d.map,n(d.map,m.uvTransform);if(d.alphaMap)m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform);if(d.alphaTest>0)m.alphaTest.value=d.alphaTest}function c(m,d){if(m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map)m.map.value=d.map,n(d.map,m.mapTransform);if(d.alphaMap)m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform);if(d.alphaTest>0)m.alphaTest.value=d.alphaTest}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,0.0001)}function f(m,d){if(d.gradientMap)m.gradientMap.value=d.gradientMap}function h(m,d){if(m.metalness.value=d.metalness,d.metalnessMap)m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=d.roughness,d.roughnessMap)m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform);if(d.envMap)m.envMapIntensity.value=d.envMapIntensity}function p(m,d,E){if(m.ior.value=d.ior,d.sheen>0){if(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap)m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform);if(d.sheenRoughnessMap)m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(d.clearcoat>0){if(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap)m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform);if(d.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(d.clearcoatNormalMap){if(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===He)m.clearcoatNormalScale.value.negate()}}if(d.dispersion>0)m.dispersion.value=d.dispersion;if(d.retroreflectivity>0)m.retroreflectivity.value=d.retroreflectivity;if(d.iridescence>0){if(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap)m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform);if(d.iridescenceThicknessMap)m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(d.transmission>0){if(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap)m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=d.thickness,d.thicknessMap)m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)}if(d.anisotropy>0){if(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap)m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap)m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform);if(d.specularIntensityMap)m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform)}function g(m,d){if(d.matcap)m.matcap.value=d.matcap}function M(m,d){let E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yg(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){let R=T.program;i.uniformBlockBinding(_,R)}function c(_,T){let R=s[_.id];if(R===void 0)m(_),R=u(_),s[_.id]=R,_.addEventListener("dispose",E);let A=T.program;i.updateUBOMapping(_,A);let x=e.render.frame;if(r[_.id]!==x)h(_),r[_.id]=x}function u(_){let T=f();_.__bindingPointIndex=T;let R=t.createBuffer(),{__size:A,usage:x}=_;return t.bindBuffer(t.UNIFORM_BUFFER,R),t.bufferData(t.UNIFORM_BUFFER,A,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,R),R}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let T=s[_.id],{uniforms:R,__cache:A}=_;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let x=0,S=R.length;x<S;x++){let O=R[x];if(Array.isArray(O))for(let N=0,F=O.length;N<F;N++)p(O[N],x,N,A);else p(O,x,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,T,R,A){if(M(_,T,R,A)===!0){let{__offset:x,value:S}=_;if(Array.isArray(S)){let O=0;for(let N=0;N<S.length;N++){let F=S[N],Z=d(F);if(g(F,_.__data,O),typeof F!=="number"&&typeof F!=="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F))O+=Z.storage/Float32Array.BYTES_PER_ELEMENT}}else g(S,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,_.__data)}}function g(_,T,R){if(typeof _==="number"||typeof _==="boolean")T[0]=_;else if(_.isMatrix3)T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0;else if(ArrayBuffer.isView(_))T.set(new _.constructor(_.buffer,_.byteOffset,T.length));else _.toArray(T,R)}function M(_,T,R,A){let x=_.value,S=T+"_"+R;if(A[S]===void 0){if(typeof x==="number"||typeof x==="boolean")A[S]=x;else if(ArrayBuffer.isView(x))A[S]=x.slice();else A[S]=x.clone();return!0}else{let O=A[S];if(typeof x==="number"||typeof x==="boolean"){if(O!==x)return A[S]=x,!0}else if(ArrayBuffer.isView(x))return!0;else if(O.equals(x)===!1)return O.copy(x),!0}return!1}function m(_){let T=_.uniforms,R=0,A=16;for(let S=0,O=T.length;S<O;S++){let N=Array.isArray(T[S])?T[S]:[T[S]];for(let F=0,Z=N.length;F<Z;F++){let I=N[F],H=Array.isArray(I.value)?I.value:[I.value];for(let J=0,z=H.length;J<z;J++){let at=H[J],W=d(at),Q=R%A,nt=Q%W.boundary,Lt=Q+nt;if(R+=nt,Lt!==0&&A-Lt<W.storage)R+=A-Lt;I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=R,R+=W.storage}}}let x=R%A;if(x>0)R+=A-x;return _.__size=R,_.__cache={},this}function d(_){let T={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")T.boundary=4,T.storage=4;else if(_.isVector2)T.boundary=8,T.storage=8;else if(_.isVector3||_.isColor)T.boundary=16,T.storage=12;else if(_.isVector4)T.boundary=16,T.storage=16;else if(_.isMatrix3)T.boundary=48,T.storage=48;else if(_.isMatrix4)T.boundary=64,T.storage=64;else if(_.isTexture)Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(_))T.boundary=16,T.storage=_.byteLength;else Bt("WebGLRenderer: Unsupported uniform value type.",_);return T}function E(_){let T=_.target;T.removeEventListener("dispose",E);let R=a.indexOf(T.__bindingPointIndex);a.splice(R,1),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(let _ in s)t.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Zg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gn=null;function Jg(){if(gn===null)gn=new Mo(Zg,16,16,si,dn),gn.name="DFG_LUT",gn.minFilter=ze,gn.magFilter=ze,gn.wrapS=rr,gn.wrapT=rr,gn.generateMipmaps=!1,gn.needsUpdate=!0;return gn}class sl{constructor(t={}){let{canvas:e=qc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=rn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let g=h,M=new Set([Da,Na,La]),m=new Set([rn,kn,us,Bi,Pa,Ia]),d=new Uint32Array(4),E=new Int32Array(4),w=new C,_=null,T=null,R=[],A=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,O=!1,N=null,F=null,Z=null,I=null;this._outputColorSpace=Gc;let H=0,J=0,z=null,at=-1,W=null,Q=new ve,nt=new ve,Lt=null,Nt=new kt(0),le=0,{width:Yt,height:q}=e,lt=1,rt=null,Dt=null,Gt=new ve(0,0,Yt,q),wt=new ve(0,0,Yt,q),ce=!1,j=new gs,st=!1,ot=!1,ct=new pe,vt=new C,Pt=new ve,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Xt(){return z===null?lt:1}let P=n;function ue(v,D){return e.getContext(v,D)}let Kt,Qt,b,y,L,k,tt,ht,ft,X,K,St,It,gt,ut,Ot,Ht,se,U,pt,Y,mt,bt;try{let v={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${Jl}`);if(e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",ae,!1),P===null){if(P=ue("webgl2",v),P===null)if(ue("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(v){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),zt("WebGLRenderer: "+v.message),v}function et(){if(Kt=new nm(P),Kt.init(),Y=new kg(P,Kt),Qt=new qp(P,Kt,t,Y),b=new Hg(P,Kt),Qt.reversedDepthBuffer&&f)b.buffers.depth.setReversed(!0);F=P.createFramebuffer(),Z=P.createFramebuffer(),I=P.createFramebuffer(),y=new rm(P),L=new wg,k=new zg(P,Kt,b,L,Qt,Y,y),tt=new em(S),ht=new ad(P),mt=new Wp(P,ht),ft=new im(P,ht,y,mt),X=new om(P,ft,ht,mt,y),se=new am(P,Qt,k),ut=new Yp(L),K=new Tg(S,tt,Kt,Qt,mt,ut),St=new qg(S,L),It=new Rg,gt=new Dg(Kt),Ht=new Vp(S,tt,b,X,p,o),Ot=new Gg(S,X,Qt),bt=new Yg(P,y,Qt,b),U=new Xp(P,Kt,y),pt=new sm(P,Kt,y),y.programs=K.programs,S.capabilities=Qt,S.extensions=Kt,S.properties=L,S.renderLists=It,S.shadowMap=Ot,S.state=b,S.info=y}if(g!==rn)x=new cm(g,e.width,e.height,a,i,s);let xt=new zh(S,P);this.xr=xt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let v=Kt.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=Kt.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(v){if(v===void 0)return;lt=v,this.setSize(Yt,q,!1)},this.getSize=function(v){return v.set(Yt,q)},this.setSize=function(v,D,V=!0){if(xt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Yt=v,q=D,e.width=Math.floor(v*lt),e.height=Math.floor(D*lt),V===!0)e.style.width=v+"px",e.style.height=D+"px";if(x!==null)x.setSize(e.width,e.height);this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Yt*lt,q*lt).floor()},this.setDrawingBufferSize=function(v,D,V){Yt=v,q=D,lt=V,e.width=Math.floor(v*V),e.height=Math.floor(D*V),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(g===rn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Q)},this.getViewport=function(v){return v.copy(Gt)},this.setViewport=function(v,D,V,B){if(v.isVector4)Gt.set(v.x,v.y,v.z,v.w);else Gt.set(v,D,V,B);b.viewport(Q.copy(Gt).multiplyScalar(lt).round())},this.getScissor=function(v){return v.copy(wt)},this.setScissor=function(v,D,V,B){if(v.isVector4)wt.set(v.x,v.y,v.z,v.w);else wt.set(v,D,V,B);b.scissor(nt.copy(wt).multiplyScalar(lt).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(v){b.setScissorTest(ce=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){Dt=v},this.getClearColor=function(v){return v.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,V=!0){let B=0;if(v){let G=!1;if(z!==null){let Mt=z.texture.format;G=M.has(Mt)}if(G){let Mt=z.texture.type,Tt=m.has(Mt),yt=Ht.getClearColor(),At=Ht.getClearAlpha(),{r:Ct,g:Zt,b:jt}=yt;if(Tt)d[0]=Ct,d[1]=Zt,d[2]=jt,d[3]=At,P.clearBufferuiv(P.COLOR,0,d);else E[0]=Ct,E[1]=Zt,E[2]=jt,E[3]=At,P.clearBufferiv(P.COLOR,0,E)}else B|=P.COLOR_BUFFER_BIT}if(D)B|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(V)B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(B!==0)P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),N=v},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),Ht.dispose(),It.dispose(),gt.dispose(),L.dispose(),tt.dispose(),X.dispose(),mt.dispose(),bt.dispose(),K.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",cl),xt.removeEventListener("sessionend",hl),Yn.stop()};function qt(v){v.preventDefault(),_o("WebGLRenderer: Context Lost."),O=!0}function _e(){_o("WebGLRenderer: Context Restored."),O=!1;let v=y.autoReset,D=Ot.enabled,V=Ot.autoUpdate,B=Ot.needsUpdate,G=Ot.type;et(),y.autoReset=v,Ot.enabled=D,Ot.autoUpdate=V,Ot.needsUpdate=B,Ot.type=G}function ae(v){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function an(v){let D=v.target;D.removeEventListener("dispose",an),xn(D)}function xn(v){qh(v),L.remove(v)}function qh(v){let D=L.get(v).programs;if(D!==void 0){if(D.forEach(function(V){K.releaseProgram(V)}),v.isShaderMaterial)K.releaseShaderCache(v)}}this.renderBufferDirect=function(v,D,V,B,G,Mt){if(D===null)D=Ft;let Tt=G.isMesh&&G.matrixWorld.determinantAffine()<0,yt=Jh(v,D,V,B,G);b.setMaterial(B,Tt);let At=V.index,Ct=1;if(B.wireframe===!0){if(At=ft.getWireframeAttribute(V),At===void 0)return;Ct=2}let Zt=V.drawRange,jt=V.attributes.position,Rt=Zt.start*Ct,oe=(Zt.start+Zt.count)*Ct;if(Mt!==null)Rt=Math.max(Rt,Mt.start*Ct),oe=Math.min(oe,(Mt.start+Mt.count)*Ct);if(At!==null)Rt=Math.max(Rt,0),oe=Math.min(oe,At.count);else if(jt!==void 0&&jt!==null)Rt=Math.max(Rt,0),oe=Math.min(oe,jt.count);let Te=oe-Rt;if(Te<0||Te===1/0)return;mt.setup(G,B,yt,V,At);let ye,fe=U;if(At!==null)ye=ht.get(At),fe=pt,fe.setIndex(ye);if(G.isMesh)if(B.wireframe===!0)b.setLineWidth(B.wireframeLinewidth*Xt()),fe.setMode(P.LINES);else fe.setMode(P.TRIANGLES);else if(G.isLine){let Ie=B.linewidth;if(Ie===void 0)Ie=1;if(b.setLineWidth(Ie*Xt()),G.isLineSegments)fe.setMode(P.LINES);else if(G.isLineLoop)fe.setMode(P.LINE_LOOP);else fe.setMode(P.LINE_STRIP)}else if(G.isPoints)fe.setMode(P.POINTS);else if(G.isSprite)fe.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(!Kt.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ie,_multiDrawCounts:Et,_multiDrawCount:Be}=G,ie=At?ht.get(At).bytesPerElement:1,Ze=L.get(B).currentProgram.getUniforms();for(let on=0;on<Be;on++)Ze.setValue(P,"_gl_DrawID",on),fe.render(Ie[on]/ie,Et[on])}else fe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)fe.renderInstances(Rt,Te,G.count);else if(V.isInstancedBufferGeometry){let Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Et=Math.min(V.instanceCount,Ie);fe.renderInstances(Rt,Te,Et)}else fe.render(Rt,Te)};function ll(v,D,V,B){if(N!==null&&v.isNodeMaterial)N.setObject(B,v);if(st===!0)ut.setState(v,V,!1);if(v.transparent===!0&&v.side===Fe&&v.forceSinglePass===!1)v.side=He,v.needsUpdate=!0,ws(v,D,B),v.side=Ui,v.needsUpdate=!0,ws(v,D,B),v.side=Fe;else ws(v,D,B)}this.compile=function(v,D,V=null){if(V===null)V=v;if(N!==null)N.renderStart(v,D,V);if(T=gt.get(V),T.init(D),A.push(T),V.traverseVisible(function(G){if(G.isLight&&G.layers.test(D.layers)){if(T.pushLight(G),G.castShadow)T.pushShadow(G)}}),v!==V)v.traverseVisible(function(G){if(G.isLight&&G.layers.test(D.layers)){if(T.pushLight(G),G.castShadow)T.pushShadow(G)}});if(T.setupLights(),N!==null)N.updateLights(T.state.lightsArray);if(ot=this.localClippingEnabled,st=ut.init(this.clippingPlanes,ot),st===!0)ut.setGlobalState(this.clippingPlanes,D);if(N!==null)Ot.render(T.state.shadowsArray,V,D);let B=new Set;if(v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){let yt=Mt[Tt];ll(yt,V,D,G),B.add(yt)}else ll(Mt,V,D,G),B.add(Mt)}),T=A.pop(),N!==null)N.renderEnd();return B},this.compileAsync=function(v,D,V=null){let B=this.compile(v,D,V);return new Promise((G)=>{function Mt(){if(B.forEach(function(Tt){let At=L.get(Tt).currentProgram;if(At===void 0||At.isReady())B.delete(Tt)}),B.size===0){G(v);return}setTimeout(Mt,10)}if(Kt.get("KHR_parallel_shader_compile")!==null)Mt();else setTimeout(Mt,10)})};let zr=null;function Yh(v){if(zr)zr(v)}function cl(){Yn.stop()}function hl(){Yn.start()}let Yn=new Ch;if(Yn.setAnimationLoop(Yh),typeof self<"u")Yn.setContext(self);this.setAnimationLoop=function(v){zr=v,xt.setAnimationLoop(v),v===null?Yn.stop():Yn.start()},xt.addEventListener("sessionstart",cl),xt.addEventListener("sessionend",hl),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(N!==null)N.renderStart(v,D);let V=xt.enabled===!0&&xt.isPresenting===!0,B=x!==null&&(z===null||V)&&x.begin(S,z);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(D.parent===null&&D.matrixWorldAutoUpdate===!0)D.updateMatrixWorld();if(xt.enabled===!0&&xt.isPresenting===!0&&(x===null||x.isCompositing()===!1)){if(xt.cameraAutoUpdate===!0)xt.updateCamera(D);D=xt.getCamera()}if(v.isScene===!0)v.onBeforeRender(S,v,D,z);if(T=gt.get(v,A.length),T.init(D),T.state.textureUnits=k.getTextureUnits(),A.push(T),ct.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),j.setFromProjectionMatrix(ct,go,D.reversedDepth),ot=this.localClippingEnabled,st=ut.init(this.clippingPlanes,ot),_=It.get(v,R.length),_.init(),R.push(_),xt.enabled===!0&&xt.isPresenting===!0){let Tt=S.xr.getDepthSensingMesh();if(Tt!==null)kr(Tt,D,-1/0,S.sortObjects)}if(kr(v,D,0,S.sortObjects),_.finish(),N!==null)N.updateLights(T.state.lightsArray);if(S.sortObjects===!0)_.sort(rt,Dt);if(Wt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Wt)Ht.addToRenderList(_,v);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(st===!0)ut.beginShadows();let G=T.state.shadowsArray;if(Ot.render(G,v,D),st===!0)ut.endShadows();if((B&&x.hasRenderPass())===!1){let Tt=_.opaque,yt=_.transmissive;if(T.setupLights(),D.isArrayCamera){let At=D.cameras;if(yt.length>0)for(let Ct=0,Zt=At.length;Ct<Zt;Ct++){let jt=At[Ct];dl(Tt,yt,v,jt)}if(Wt)Ht.render(v);for(let Ct=0,Zt=At.length;Ct<Zt;Ct++){let jt=At[Ct];ul(_,v,jt,jt.viewport)}}else{if(yt.length>0)dl(Tt,yt,v,D);if(Wt)Ht.render(v);ul(_,v,D)}}if(z!==null&&J===0)k.updateMultisampleRenderTarget(z),k.updateRenderTargetMipmap(z);if(B)x.end(S);if(v.isScene===!0)v.onAfterRender(S,v,D);if(mt.resetDefaultState(),at=-1,W=null,A.pop(),A.length>0){if(T=A[A.length-1],k.setTextureUnits(T.state.textureUnits),st===!0)ut.setGlobalState(S.clippingPlanes,T.state.camera)}else T=null;if(R.pop(),R.length>0)_=R[R.length-1];else _=null;if(N!==null)N.renderEnd()};function kr(v,D,V,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(D)}else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight){if(T.pushLight(v),v.castShadow)T.pushShadow(v)}else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(j)){if(B)Pt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ct);let Tt=X.update(v),yt=v.material;if(yt.visible)_.push(v,Tt,yt,V,Pt.z,null,D)}}else if(v.isMesh||v.isLine||v.isPoints){if(!v.frustumCulled||v.intersectsFrustum(j)){let Tt=X.update(v),yt=v.material;if(B){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();Pt.copy(v.boundingSphere.center)}else{if(Tt.boundingSphere===null)Tt.computeBoundingSphere();Pt.copy(Tt.boundingSphere.center)}Pt.applyMatrix4(v.matrixWorld).applyMatrix4(ct)}if(Array.isArray(yt)){let At=Tt.groups;for(let Ct=0,Zt=At.length;Ct<Zt;Ct++){let jt=At[Ct],Rt=yt[jt.materialIndex];if(Rt&&Rt.visible)_.push(v,Tt,Rt,V,Pt.z,jt,D)}}else if(yt.visible)_.push(v,Tt,yt,V,Pt.z,null,D)}}}let Mt=v.children;for(let Tt=0,yt=Mt.length;Tt<yt;Tt++)kr(Mt[Tt],D,V,B)}function ul(v,D,V,B){let{opaque:G,transmissive:Mt,transparent:Tt}=v;if(T.setupLightsView(V),st===!0)ut.setGlobalState(S.clippingPlanes,V);if(B)b.viewport(Q.copy(B));if(G.length>0)Ts(G,D,V);if(Mt.length>0)Ts(Mt,D,V);if(Tt.length>0)Ts(Tt,D,V);b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function dl(v,D,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Rt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new Ye(1,1,{generateMipmaps:!0,type:Rt?dn:rn,minFilter:ei,samples:Math.max(4,Qt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let Mt=T.state.transmissionRenderTarget[B.id],Tt=B.viewport||Q;Mt.setSize(Tt.z*S.transmissionResolutionScale,Tt.w*S.transmissionResolutionScale);let yt=S.getRenderTarget(),At=S.getActiveCubeFace(),Ct=S.getActiveMipmapLevel();if(S.setRenderTarget(Mt),S.getClearColor(Nt),le=S.getClearAlpha(),le<1)S.setClearColor(16777215,0.5);if(S.clear(),Wt)Ht.render(V);let Zt=S.toneMapping;S.toneMapping=sn;let jt=B.viewport;if(B.viewport!==void 0)B.viewport=void 0;if(T.setupLightsView(B),st===!0)ut.setGlobalState(S.clippingPlanes,B);if(Ts(v,V,B),k.updateMultisampleRenderTarget(Mt),k.updateRenderTargetMipmap(Mt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let oe=0,Te=D.length;oe<Te;oe++){let ye=D[oe],{object:fe,geometry:Ie,material:Et,group:Be}=ye;if(Et.side===Fe&&fe.layers.test(B.layers)){let ie=Et.side;Et.side=He,Et.needsUpdate=!0,fl(fe,V,B,Ie,Et,Be),Et.side=ie,Et.needsUpdate=!0,Rt=!0}}if(Rt===!0)k.updateMultisampleRenderTarget(Mt),k.updateRenderTargetMipmap(Mt)}if(S.setRenderTarget(yt,At,Ct),S.setClearColor(Nt,le),jt!==void 0)B.viewport=jt;S.toneMapping=Zt}function Ts(v,D,V){let B=D.isScene===!0?D.overrideMaterial:null;for(let G=0,Mt=v.length;G<Mt;G++){let Tt=v[G],{object:yt,geometry:At,group:Ct}=Tt,Zt=Tt.material;if(Zt.allowOverride===!0&&B!==null)Zt=B;if(yt.layers.test(V.layers))fl(yt,D,V,At,Zt,Ct)}}function fl(v,D,V,B,G,Mt){if(N!==null&&G.isNodeMaterial)N.setObject(v,G);if(v.onBeforeRender(S,D,V,B,G,Mt),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(S,D,V,B,v,Mt),G.transparent===!0&&G.side===Fe&&G.forceSinglePass===!1)G.side=He,G.needsUpdate=!0,S.renderBufferDirect(V,D,B,G,v,Mt),G.side=Ui,G.needsUpdate=!0,S.renderBufferDirect(V,D,B,G,v,Mt),G.side=Fe;else S.renderBufferDirect(V,D,B,G,v,Mt);v.onAfterRender(S,D,V,B,G,Mt)}function ws(v,D,V){if(D.isScene!==!0)D=Ft;let B=L.get(v),G=T.state.lights,Mt=T.state.shadowsArray,Tt=G.state.version,yt=K.getParameters(v,G.state,Mt,D,V,T.state.lightProbeGridArray),At=K.getProgramCacheKey(yt),Ct=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Zt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(B.envMap=tt.get(v.envMap||B.environment,Zt),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Ct===void 0)v.addEventListener("dispose",an),Ct=new Map,B.programs=Ct;let jt=Ct.get(At);if(jt!==void 0){if(B.currentProgram===jt&&B.lightsStateVersion===Tt)return ml(v,yt),jt}else{if(yt.uniforms=K.getUniforms(v),N!==null&&v.isNodeMaterial)N.build(v,V,yt);v.onBeforeCompile(yt,S),jt=K.acquireProgram(yt,At),Ct.set(At,jt),B.uniforms=yt.uniforms}let Rt=B.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)Rt.clippingPlanes=ut.uniform;if(ml(v,yt),B.needsLights=Kh(v),B.lightsStateVersion=Tt,B.needsLights)Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.sunLights.value=G.state.sun,Rt.sunLightShadows.value=G.state.sunShadow,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.sunShadowMatrix.value=G.state.sunShadowMatrix,Rt.sunShadowCascade.value=G.state.sunShadowCascade,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix;return B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=jt,B.uniformsList=null,jt}function pl(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Es.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function ml(v,D){let V=L.get(v);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Zh(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;w.setFromMatrixPosition(D.matrixWorld);for(let V=0,B=v.length;V<B;V++){let G=v[V];if(G.texture!==null&&G.boundingBox.containsPoint(w))return G}return null}function Jh(v,D,V,B,G){if(D.isScene!==!0)D=Ft;k.resetTextureUnits();let Mt=D.fog,Tt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,yt=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ee.workingColorSpace,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ct=tt.get(B.envMap||Tt,At),Zt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,jt=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Rt=!!V.morphAttributes.position,oe=!!V.morphAttributes.normal,Te=!!V.morphAttributes.color,ye=sn;if(B.toneMapped){if(z===null||z.isXRRenderTarget===!0)ye=S.toneMapping}let fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ie=fe!==void 0?fe.length:0,Et=L.get(B),Be=T.state.lights;if(st===!0){if(ot===!0||v!==W){let xe=v===W&&B.id===at;ut.setState(B,v,xe)}}let ie=!1;if(B.version===Et.__version){if(Et.needsLights&&Et.lightsStateVersion!==Be.state.version)ie=!0;else if(Et.outputColorSpace!==yt)ie=!0;else if(G.isBatchedMesh&&Et.batching===!1)ie=!0;else if(!G.isBatchedMesh&&Et.batching===!0)ie=!0;else if(G.isBatchedMesh&&Et.batchingColor===!0&&G._colorsTexture===null)ie=!0;else if(G.isBatchedMesh&&Et.batchingColor===!1&&G._colorsTexture!==null)ie=!0;else if(G.isInstancedMesh&&Et.instancing===!1)ie=!0;else if(!G.isInstancedMesh&&Et.instancing===!0)ie=!0;else if(G.isSkinnedMesh&&Et.skinning===!1)ie=!0;else if(!G.isSkinnedMesh&&Et.skinning===!0)ie=!0;else if(G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null)ie=!0;else if(G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null)ie=!0;else if(G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null)ie=!0;else if(G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null)ie=!0;else if(Et.envMap!==Ct)ie=!0;else if(B.fog===!0&&Et.fog!==Mt)ie=!0;else if(Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==ut.numPlanes||Et.numIntersection!==ut.numIntersection))ie=!0;else if(Et.vertexAlphas!==Zt)ie=!0;else if(Et.vertexTangents!==jt)ie=!0;else if(Et.morphTargets!==Rt)ie=!0;else if(Et.morphNormals!==oe)ie=!0;else if(Et.morphColors!==Te)ie=!0;else if(Et.toneMapping!==ye)ie=!0;else if(Et.morphTargetsCount!==Ie)ie=!0;else if(!!Et.lightProbeGrid!==T.state.lightProbeGridArray.length>0)ie=!0}else ie=!0,Et.__version=B.version;let Ze=Et.currentProgram;if(ie===!0){if(Ze=ws(B,D,G),N&&B.isNodeMaterial)N.onUpdateProgram(B,Ze,Et)}let on=!1,Nn=!1,gi=!1,de=Ze.getUniforms(),Ee=Et.uniforms;if(b.useProgram(Ze.program))on=!0,Nn=!0,gi=!0;if(B.id!==at)at=B.id,Nn=!0;if(Et.needsLights){let xe=Zh(T.state.lightProbeGridArray,G);if(Et.lightProbeGrid!==xe)Et.lightProbeGrid=xe,Nn=!0}if(on||W!==v){if(b.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();de.setValue(P,"projectionMatrix",v.projectionMatrix),de.setValue(P,"viewMatrix",v.matrixWorldInverse);let Un=de.map.cameraPosition;if(Un!==void 0)Un.setValue(P,vt.setFromMatrixPosition(v.matrixWorld));if(Qt.logarithmicDepthBuffer)de.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)de.setValue(P,"isOrthographic",v.isOrthographicCamera===!0);if(W!==v)W=v,Nn=!0,gi=!0}if(Et.needsLights){if(Be.state.sunShadowMap.length>0)de.setValue(P,"sunShadowMap",Be.state.sunShadowMap,k);if(Be.state.directionalShadowMap.length>0)de.setValue(P,"directionalShadowMap",Be.state.directionalShadowMap,k);if(Be.state.spotShadowMap.length>0)de.setValue(P,"spotShadowMap",Be.state.spotShadowMap,k);if(Be.state.pointShadowMap.length>0)de.setValue(P,"pointShadowMap",Be.state.pointShadowMap,k)}if(G.isSkinnedMesh){de.setOptional(P,G,"bindMatrix"),de.setOptional(P,G,"bindMatrixInverse");let xe=G.skeleton;if(xe){if(xe.boneTexture===null)xe.computeBoneTexture();de.setValue(P,"boneTexture",xe.boneTexture,k)}}if(G.isBatchedMesh){if(de.setOptional(P,G,"batchingTexture"),de.setValue(P,"batchingTexture",G._matricesTexture,k),de.setOptional(P,G,"batchingIdTexture"),de.setValue(P,"batchingIdTexture",G._indirectTexture,k),de.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null)de.setValue(P,"batchingColorTexture",G._colorsTexture,k)}let Dn=V.morphAttributes;if(Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)se.update(G,V,Ze);if(Nn||Et.receiveShadow!==G.receiveShadow)Et.receiveShadow=G.receiveShadow,de.setValue(P,"receiveShadow",G.receiveShadow);if((B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null)Ee.envMapIntensity.value=D.environmentIntensity;if(Ee.dfgLUT!==void 0)Ee.dfgLUT.value=Jg();if(Nn){if(de.setValue(P,"toneMappingExposure",S.toneMappingExposure),Et.needsLights)$h(Ee,gi);if(Mt&&B.fog===!0)St.refreshFogUniforms(Ee,Mt);if(St.refreshMaterialUniforms(Ee,B,lt,q,T.state.transmissionRenderTarget[v.id]),Et.needsLights&&Et.lightProbeGrid){let xe=Et.lightProbeGrid;Ee.probesSH.value=xe.texture,Ee.probesMin.value.copy(xe.boundingBox.min),Ee.probesMax.value.copy(xe.boundingBox.max),Ee.probesResolution.value.copy(xe.resolution)}Es.upload(P,pl(Et),Ee,k)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0)Es.upload(P,pl(Et),Ee,k),B.uniformsNeedUpdate=!1;if(B.isSpriteMaterial)de.setValue(P,"center",G.center);if(de.setValue(P,"modelViewMatrix",G.modelViewMatrix),de.setValue(P,"normalMatrix",G.normalMatrix),de.setValue(P,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){let xe=B.uniformsGroups;for(let Un=0,_i=xe.length;Un<_i;Un++){let _l=xe[Un];bt.update(_l,Ze),bt.bind(_l,Ze)}}return Ze}function $h(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function Kh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(v,D,V){let B=L.get(v);if(B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1)B.__useRenderToTexture=!1;L.get(v.texture).__webglTexture=D,L.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let V=L.get(v);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,V=0){z=v,H=D,J=V;let B=null,G=!1,Mt=!1;if(v){let yt=L.get(v);if(yt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(P.FRAMEBUFFER,yt.__webglFramebuffer),Q.copy(v.viewport),nt.copy(v.scissor),Lt=v.scissorTest,b.viewport(Q),b.scissor(nt),b.setScissorTest(Lt),at=-1;return}else if(yt.__webglFramebuffer===void 0)k.setupRenderTarget(v);else if(yt.__hasExternalTextures)k.rebindTextures(v,L.get(v.texture).__webglTexture,L.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Zt=v.depthTexture;if(yt.__boundDepthTexture!==Zt){if(Zt!==null&&L.has(Zt)&&(v.width!==Zt.image.width||v.height!==Zt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(v)}}let At=v.texture;if(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)Mt=!0;let Ct=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Ct[D]))B=Ct[D][V];else B=Ct[D];G=!0}else if(v.samples>0&&k.useMultisampledRTT(v)===!1)B=L.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Ct))B=Ct[V];else B=Ct;Q.copy(v.viewport),nt.copy(v.scissor),Lt=v.scissorTest}else Q.copy(Gt).multiplyScalar(lt).floor(),nt.copy(wt).multiplyScalar(lt).floor(),Lt=ce;if(V!==0)B=F;if(b.bindFramebuffer(P.FRAMEBUFFER,B))b.drawBuffers(v,B);if(b.viewport(Q),b.scissor(nt),b.setScissorTest(Lt),G){let yt=L.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,yt.__webglTexture,V)}else if(Mt){let yt=D;for(let At=0;At<v.textures.length;At++){let Ct=L.get(v.textures[At]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+At,Ct.__webglTexture,V,yt)}}else if(v!==null&&V!==0){let yt=L.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yt.__webglTexture,V)}at=-1};function gl(v){let D=L.get(v);if(D.__readFormat!==v.format||D.__readType!==v.type)D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=Qt.textureFormatReadable(v.format),D.__typeReadable=Qt.textureTypeReadable(v.type);return D}if(this.readRenderTargetPixels=function(v,D,V,B,G,Mt,Tt,yt=0){if(!(v&&v.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Tt!==void 0)At=At[Tt];if(At){b.bindFramebuffer(P.FRAMEBUFFER,At);try{let Ct=v.textures[yt],{format:Zt,type:jt}=Ct;if(v.textures.length>1)P.readBuffer(P.COLOR_ATTACHMENT0+yt);let Rt=gl(Ct);if(Rt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(D>=0&&D<=v.width-B&&(V>=0&&V<=v.height-G))P.readPixels(D,V,B,G,Y.convert(Zt),Y.convert(jt),Mt)}finally{let Ct=z!==null?L.get(z).__webglFramebuffer:null;b.bindFramebuffer(P.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(v,D,V,B,G,Mt,Tt,yt=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Tt!==void 0)At=At[Tt];if(At)if(D>=0&&D<=v.width-B&&(V>=0&&V<=v.height-G)){b.bindFramebuffer(P.FRAMEBUFFER,At);let Ct=v.textures[yt],{format:Zt,type:jt}=Ct;if(v.textures.length>1)P.readBuffer(P.COLOR_ATTACHMENT0+yt);let Rt=gl(Ct);if(Rt.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,oe),P.bufferData(P.PIXEL_PACK_BUFFER,Mt.byteLength,P.STREAM_READ),P.readPixels(D,V,B,G,Y.convert(Zt),Y.convert(jt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Te=z!==null?L.get(z).__webglFramebuffer:null;b.bindFramebuffer(P.FRAMEBUFFER,Te);let ye=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Zc(P,ye,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,oe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Mt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(oe),P.deleteSync(ye),Mt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,V=0){let B=Math.pow(2,-V),G=Math.floor(v.image.width*B),Mt=Math.floor(v.image.height*B),Tt=D!==null?D.x:0,yt=D!==null?D.y:0;k.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,Tt,yt,G,Mt),b.unbindTexture()},this.copyTextureToTexture=function(v,D,V=null,B=null,G=0,Mt=0){let Tt,yt,At,Ct,Zt,jt,Rt,oe,Te,ye=v.isCompressedTexture?v.mipmaps[Mt]:v.image;if(V!==null)Tt=V.max.x-V.min.x,yt=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,Ct=V.min.x,Zt=V.min.y,jt=V.isBox3?V.min.z:0;else{let Ee=Math.pow(2,-G);if(Tt=Math.floor(ye.width*Ee),yt=Math.floor(ye.height*Ee),v.isDataArrayTexture)At=ye.depth;else if(v.isData3DTexture)At=Math.floor(ye.depth*Ee);else At=1;Ct=0,Zt=0,jt=0}if(B!==null)Rt=B.x,oe=B.y,Te=B.z;else Rt=0,oe=0,Te=0;let fe=Y.convert(D.format),Ie=Y.convert(D.type),Et;if(D.isData3DTexture)k.setTexture3D(D,0),Et=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)k.setTexture2DArray(D,0),Et=P.TEXTURE_2D_ARRAY;else k.setTexture2D(D,0),Et=P.TEXTURE_2D;b.activeTexture(P.TEXTURE0),b.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let Be=b.getParameter(P.UNPACK_ROW_LENGTH),ie=b.getParameter(P.UNPACK_IMAGE_HEIGHT),Ze=b.getParameter(P.UNPACK_SKIP_PIXELS),on=b.getParameter(P.UNPACK_SKIP_ROWS),Nn=b.getParameter(P.UNPACK_SKIP_IMAGES);b.pixelStorei(P.UNPACK_ROW_LENGTH,ye.width),b.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ye.height),b.pixelStorei(P.UNPACK_SKIP_PIXELS,Ct),b.pixelStorei(P.UNPACK_SKIP_ROWS,Zt),b.pixelStorei(P.UNPACK_SKIP_IMAGES,jt);let gi=v.isDataArrayTexture||v.isData3DTexture,de=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let Ee=L.get(v),Dn=L.get(D),xe=L.get(Ee.__renderTarget),Un=L.get(Dn.__renderTarget);b.bindFramebuffer(P.READ_FRAMEBUFFER,xe.__webglFramebuffer),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let _i=0;_i<At;_i++){if(gi)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,L.get(v).__webglTexture,G,jt+_i),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,L.get(D).__webglTexture,Mt,Te+_i);P.blitFramebuffer(Ct,Zt,Tt,yt,Rt,oe,Tt,yt,P.DEPTH_BUFFER_BIT,P.NEAREST)}b.bindFramebuffer(P.READ_FRAMEBUFFER,null),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||L.has(v)){let Ee=L.get(v),Dn=L.get(D);b.bindFramebuffer(P.READ_FRAMEBUFFER,Z),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,I);for(let xe=0;xe<At;xe++){if(gi)P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ee.__webglTexture,G,jt+xe);else P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ee.__webglTexture,G);if(de)P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dn.__webglTexture,Mt,Te+xe);else P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Dn.__webglTexture,Mt);if(G!==0)P.blitFramebuffer(Ct,Zt,Tt,yt,Rt,oe,Tt,yt,P.COLOR_BUFFER_BIT,P.NEAREST);else if(de)P.copyTexSubImage3D(Et,Mt,Rt,oe,Te+xe,Ct,Zt,Tt,yt);else P.copyTexSubImage2D(Et,Mt,Rt,oe,Ct,Zt,Tt,yt)}b.bindFramebuffer(P.READ_FRAMEBUFFER,null),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(de)if(v.isDataTexture||v.isData3DTexture)P.texSubImage3D(Et,Mt,Rt,oe,Te,Tt,yt,At,fe,Ie,ye.data);else if(D.isCompressedArrayTexture)P.compressedTexSubImage3D(Et,Mt,Rt,oe,Te,Tt,yt,At,fe,ye.data);else P.texSubImage3D(Et,Mt,Rt,oe,Te,Tt,yt,At,fe,Ie,ye);else if(v.isDataTexture)P.texSubImage2D(P.TEXTURE_2D,Mt,Rt,oe,Tt,yt,fe,Ie,ye.data);else if(v.isCompressedTexture)P.compressedTexSubImage2D(P.TEXTURE_2D,Mt,Rt,oe,ye.width,ye.height,fe,ye.data);else P.texSubImage2D(P.TEXTURE_2D,Mt,Rt,oe,Tt,yt,fe,Ie,ye);if(b.pixelStorei(P.UNPACK_ROW_LENGTH,Be),b.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ie),b.pixelStorei(P.UNPACK_SKIP_PIXELS,Ze),b.pixelStorei(P.UNPACK_SKIP_ROWS,on),b.pixelStorei(P.UNPACK_SKIP_IMAGES,Nn),Mt===0&&D.generateMipmaps)P.generateMipmap(Et);b.unbindTexture()},this.initRenderTarget=function(v){if(L.get(v).__webglFramebuffer===void 0)k.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)k.setTextureCube(v,0);else if(v.isData3DTexture)k.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)k.setTexture2DArray(v,0);else k.setTexture2D(v,0);b.unbindTexture()},this.resetState=function(){H=0,J=0,z=null,b.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return go}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class rl{constructor(){this.group=new Ut,this.wheelRadius=0.42,this.wheelBase=1.25,this.bbHeight=0.32,this.crankLength=0.19,this.pedalSpread=0.22,this.wheelAngle=0,this.crankAngle=0,this.steerAngle=0,this.speed=0,this.wheelieAngle=0,this.createMaterials(),this.buildBicycle()}createMaterials(){this.frameMat=new Jt({color:1616281,roughness:0.2,metalness:0.6,envMapIntensity:1.2}),this.chromeMat=new Jt({color:16777215,roughness:0.1,metalness:0.95}),this.leatherMat=new Jt({color:6042391,roughness:0.6,metalness:0.1}),this.rubberMat=new Jt({color:2039586,roughness:0.85,metalness:0.05}),this.brassMat=new Jt({color:15120384,roughness:0.25,metalness:0.9}),this.wickerMat=new Jt({color:13935475,roughness:0.8,metalness:0.05}),this.fishMat=new Jt({color:11066076,roughness:0.2,metalness:0.8}),this.glassMat=new Jt({color:16775904,roughness:0.1,metalness:0.1,emissive:16770688,emissiveIntensity:0.6,transparent:!0,opacity:0.9})}buildBicycle(){this.bikeBody=new Ut,this.group.add(this.bikeBody),this.bbPos=new C(0,this.bbHeight,0),this.rearAxlePos=new C(-this.wheelBase*0.52,this.wheelRadius,0),this.frontAxlePos=new C(this.wheelBase*0.48,this.wheelRadius,0),this.headTubeBottom=new C(this.wheelBase*0.4,this.wheelRadius+0.38,0),this.headTubeTop=new C(this.wheelBase*0.36,this.wheelRadius+0.56,0),this.seatClusterPos=new C(-this.wheelBase*0.14,this.bbHeight+0.46,0),this.buildFrame(),this.buildWheels(),this.buildForkAndHandlebars(),this.buildDrivetrain(),this.buildSaddle(),this.buildBasketAndFish(),this.buildFendersAndRack()}buildFrame(){let t=new Ut,e=(s,r,a,o=this.frameMat)=>{let l=new C().subVectors(r,s),c=l.length(),u=new re(a,a,c,16),f=new it(u,o);return f.castShadow=!0,f.receiveShadow=!0,f.position.copy(s).addScaledVector(l,0.5),f.quaternion.setFromUnitVectors(new C(0,1,0),l.clone().normalize()),t.add(f),f},n=new re(0.032,0.032,0.12,16),i=new it(n,this.chromeMat);i.rotation.x=Math.PI/2,i.position.copy(this.bbPos),t.add(i),e(this.bbPos,this.seatClusterPos,0.022),e(this.bbPos,this.headTubeBottom,0.024),e(this.headTubeBottom,this.headTubeTop,0.026),[-0.018,0.018].forEach((s)=>{let r=this.seatClusterPos.clone().add(new C(0,-0.04,s)),a=new C((this.seatClusterPos.x+this.headTubeTop.x)*0.5,this.headTubeTop.y-0.06,s*1.5),o=this.headTubeTop.clone().add(new C(0,-0.05,s)),l=new Xn(r,a,o),c=new Ln(l,20,0.014,12,!1),u=new it(c,this.frameMat);u.castShadow=!0,t.add(u)}),[-0.055,0.055].forEach((s)=>{let r=this.bbPos.clone().add(new C(0,0,s*0.7)),a=this.rearAxlePos.clone().add(new C(0,0,s));e(r,a,0.015)}),[-0.055,0.055].forEach((s)=>{let r=this.seatClusterPos.clone().add(new C(0,-0.03,s*0.5)),a=this.rearAxlePos.clone().add(new C(0,0,s));e(r,a,0.014)}),this.bikeBody.add(t)}createSpokedWheel(){let t=new Ut,e=new mn(this.wheelRadius-0.035,0.035,18,48),n=new it(e,this.rubberMat);n.castShadow=!0,t.add(n);let i=new mn(this.wheelRadius-0.045,0.016,12,48),s=new it(i,this.chromeMat);t.add(s);let r=new re(0.024,0.024,0.08,16),a=new it(r,this.chromeMat);a.rotation.x=Math.PI/2,t.add(a);let o=28,l=new re(0.0018,0.0018,this.wheelRadius-0.05,4);for(let c=0;c<o;c++){let u=c/o*Math.PI*2,f=c%2===0,h=new it(l,this.chromeMat),p=f?0.025:-0.025,g=new C(Math.cos(u)*(this.wheelRadius-0.045),Math.sin(u)*(this.wheelRadius-0.045),0),M=new C(Math.cos(u+0.3)*0.02,Math.sin(u+0.3)*0.02,p),m=new C().subVectors(g,M);h.position.copy(M).addScaledVector(m,0.5),h.quaternion.setFromUnitVectors(new C(0,1,0),m.clone().normalize()),t.add(h)}return t}buildWheels(){this.rearWheelGroup=new Ut,this.rearWheelGroup.position.copy(this.rearAxlePos),this.rearWheelMesh=this.createSpokedWheel(),this.rearWheelGroup.add(this.rearWheelMesh),this.bikeBody.add(this.rearWheelGroup);let t=new re(0.045,0.045,0.006,18),e=new it(t,this.chromeMat);e.rotation.x=Math.PI/2,e.position.set(0,0,0.035),this.rearWheelMesh.add(e)}buildForkAndHandlebars(){this.steerGroup=new Ut,this.steerGroup.position.copy(this.headTubeBottom);let t=new C().subVectors(this.frontAxlePos,this.headTubeBottom);this.forkAngle=Math.atan2(t.x,-t.y);let e=0.38,n=new re(0.018,0.018,e,16),i=new it(n,this.chromeMat);i.position.set(0,e*0.5,0),this.steerGroup.add(i);let s=new Se(0.05,0.03,0.12),r=new it(s,this.frameMat);r.position.set(0,0,0),this.steerGroup.add(r);let a=t.length();[-0.05,0.05].forEach((E)=>{let w=new re(0.016,0.012,a,12),_=new it(w,this.frameMat);_.castShadow=!0,_.position.set(t.x*0.5,t.y*0.5,E),_.rotation.z=-this.forkAngle,this.steerGroup.add(_)}),this.frontWheelGroup=new Ut,this.frontWheelGroup.position.set(t.x,t.y,0),this.frontWheelMesh=this.createSpokedWheel(),this.frontWheelGroup.add(this.frontWheelMesh),this.steerGroup.add(this.frontWheelGroup);let o=new re(0.016,0.016,0.16,12),l=new it(o,this.chromeMat);l.position.set(0.02,e+0.04,0),l.rotation.z=-0.2,this.steerGroup.add(l);let c=new hi([new C(-0.06,e+0.12,-0.28),new C(-0.02,e+0.13,-0.18),new C(0.02,e+0.12,0),new C(-0.02,e+0.13,0.18),new C(-0.06,e+0.12,0.28)]),u=new Ln(c,24,0.012,12,!1),f=new it(u,this.chromeMat);f.castShadow=!0,this.steerGroup.add(f),[-0.24,0.24].forEach((E)=>{let w=new re(0.016,0.016,0.09,12),_=new it(w,this.leatherMat);_.position.set(-0.04,e+0.12,E),_.rotation.z=Math.PI/2,_.rotation.y=E>0?0.3:-0.3,this.steerGroup.add(_)}),this.bellMesh=new Ut;let h=new it(new Ve(0.024,16,12,0,Math.PI*2,0,Math.PI*0.6),this.brassMat),p=new it(new re(0.018,0.022,0.01,16),this.chromeMat),g=new it(new Se(0.006,0.012,0.025),this.chromeMat);g.position.set(-0.015,0.01,-0.018),this.bellMesh.add(h,p,g),this.bellMesh.position.set(-0.02,e+0.14,-0.16),this.steerGroup.add(this.bellMesh),this.headlightGroup=new Ut,this.headlightGroup.position.set(0.08,0.08,0);let M=new Pe(0.045,0.1,16),m=new it(M,this.chromeMat);m.rotation.z=-Math.PI/2,this.headlightGroup.add(m);let d=new it(new Pn(0.045,16),this.glassMat);d.position.set(0.05,0,0),d.rotation.y=Math.PI/2,this.headlightGroup.add(d),this.headlight=new Lr(16775904,2.8,18,Math.PI*0.22,0.4,1.2),this.headlight.position.set(0.08,0,0),this.headlight.target.position.set(6,-1.2,0),this.headlight.castShadow=!0,this.headlight.shadow.mapSize.width=512,this.headlight.shadow.mapSize.height=512,this.headlightGroup.add(this.headlight),this.headlightGroup.add(this.headlight.target),this.steerGroup.add(this.headlightGroup),this.leftGripTarget=new C(-0.04,e+0.12,-0.23),this.rightGripTarget=new C(-0.04,e+0.12,0.23),this.bikeBody.add(this.steerGroup)}buildDrivetrain(){this.crankGroup=new Ut,this.crankGroup.position.copy(this.bbPos);let t=new re(0.095,0.095,0.005,24),e=new it(t,this.chromeMat);e.rotation.x=Math.PI/2,e.position.set(0,0,0.045),this.crankGroup.add(e);for(let h=0;h<5;h++){let p=new Se(0.015,0.08,0.008),g=new it(p,this.chromeMat);g.position.set(0,0,0.046),g.rotation.z=h/5*Math.PI*2,this.crankGroup.add(g)}this.rightCrankArm=new Ut;let n=new Se(0.018,this.crankLength,0.012),i=new it(n,this.chromeMat);i.position.set(0,-this.crankLength*0.5,0.065),this.rightCrankArm.add(i),this.rightPedal=new Ut,this.rightPedal.position.set(0,-this.crankLength,0.11);let s=new Se(0.065,0.02,0.09),r=new it(s,this.rubberMat);r.castShadow=!0,this.rightPedal.add(r),this.rightCrankArm.add(this.rightPedal),this.leftCrankArm=new Ut;let a=new Se(0.018,this.crankLength,0.012),o=new it(a,this.chromeMat);o.position.set(0,this.crankLength*0.5,-0.065),this.leftCrankArm.add(o),this.leftPedal=new Ut,this.leftPedal.position.set(0,this.crankLength,-0.11);let l=new it(s,this.rubberMat);l.castShadow=!0,this.leftPedal.add(l),this.leftCrankArm.add(this.leftPedal),this.crankGroup.add(this.rightCrankArm),this.crankGroup.add(this.leftCrankArm),this.bikeBody.add(this.crankGroup);let c=new In;c.moveTo(0,0.1),c.lineTo(-0.48,0.05),c.lineTo(-0.48,-0.05),c.lineTo(0,-0.1),c.closePath();let u=new Hi(c,{depth:0.012,bevelEnabled:!1}),f=new it(u,this.frameMat);f.position.copy(this.bbPos).add(new C(0,0,0.048)),this.bikeBody.add(f)}buildSaddle(){this.saddleGroup=new Ut,this.saddleGroup.position.copy(this.seatClusterPos).add(new C(0,0.1,0));let t=new re(0.015,0.015,0.14,12),e=new it(t,this.chromeMat);e.position.set(0,-0.06,0),this.saddleGroup.add(e);let n=new In;n.moveTo(-0.12,-0.09),n.quadraticCurveTo(-0.16,0,-0.12,0.09),n.quadraticCurveTo(-0.04,0.1,0.04,0.035),n.quadraticCurveTo(0.14,0.02,0.16,0),n.quadraticCurveTo(0.14,-0.02,0.04,-0.035),n.quadraticCurveTo(-0.04,-0.1,-0.12,-0.09);let i=new Hi(n,{depth:0.04,bevelEnabled:!0,bevelSegments:4,steps:1,bevelSize:0.015,bevelThickness:0.015}),s=new it(i,this.leatherMat);s.rotation.x=Math.PI/2,s.rotation.z=Math.PI,s.position.set(0.02,0.02,0.02),s.castShadow=!0,this.saddleGroup.add(s),[-0.045,0.045].forEach((r)=>{let a=new re(0.016,0.016,0.06,12),o=new it(a,this.chromeMat);o.position.set(-0.08,-0.02,r),this.saddleGroup.add(o)}),this.bikeBody.add(this.saddleGroup),this.saddleSeatingPoint=new C(this.seatClusterPos.x,this.seatClusterPos.y+0.15,0)}buildBasketAndFish(){this.basketGroup=new Ut,this.basketGroup.position.set(0.16,0.38,0);let t=new Se(0.18,0.16,0.28),e=new it(t,this.wickerMat);e.castShadow=!0,this.basketGroup.add(e);let n=new Se(0.19,0.02,0.29),i=new it(n,this.wickerMat);i.position.y=0.08,this.basketGroup.add(i),this.fishGroup=new Ut,this.fishGroup.position.set(0,0.05,0),this.fishGroup.rotation.y=0.4,this.fishGroup.rotation.z=0.2;let s=new Pe(0.045,0.18,12),r=new it(s,this.fishMat);r.rotation.z=Math.PI/2,this.fishGroup.add(r),this.fishTail=new it(new Pe(0.035,0.08,8),this.fishMat),this.fishTail.position.set(-0.11,0,0),this.fishTail.rotation.z=-Math.PI/2,this.fishGroup.add(this.fishTail);let a=new Vn({color:1118481}),o=new it(new Se(0.02,0.015,0.07),a);o.position.set(0.05,0.015,0),this.fishGroup.add(o),this.basketGroup.add(this.fishGroup),this.steerGroup.add(this.basketGroup)}buildFendersAndRack(){let e=new pn(0,0,this.wheelRadius+0.025,this.wheelRadius+0.025,Math.PI*0.12,Math.PI*0.72,!1,0).getPoints(24),n=new ge().setFromPoints(e),i=new li(n,new Wn({color:16777215,linewidth:3}));this.frontWheelGroup.add(i);let r=new pn(0,0,this.wheelRadius+0.025,this.wheelRadius+0.025,Math.PI*0.45,Math.PI*1.15,!1,0).getPoints(24),a=new ge().setFromPoints(r),o=new li(a,new Wn({color:16777215,linewidth:3}));this.rearWheelGroup.add(o);let l=new Ut;l.position.set(this.seatClusterPos.x-0.22,this.wheelRadius+0.18,0);let c=new it(new Se(0.36,0.015,0.16),this.chromeMat);l.add(c);let u=new re(0.05,0.05,0.2,16),f=new Jt({color:16739179,roughness:0.8}),h=new it(u,f);h.rotation.x=Math.PI/2,h.position.set(0,0.055,0),l.add(h),this.bikeBody.add(l)}update(t,e,n,i=!1){this.speed=e;let s=this.speed/this.wheelRadius;this.wheelAngle+=s*t,this.rearWheelMesh.rotation.z=-this.wheelAngle,this.frontWheelMesh.rotation.z=-this.wheelAngle;let r=s/2.4;this.crankAngle+=r*t,this.crankGroup.rotation.z=-this.crankAngle,this.rightPedal.rotation.z=this.crankAngle,this.leftPedal.rotation.z=this.crankAngle;let a=n*0.35;this.steerAngle+=(a-this.steerAngle)*Math.min(t*12,1),this.steerGroup.rotation.y=this.steerAngle;let o=-this.steerAngle*Math.min(this.speed*0.14,0.28);this.bikeBody.rotation.z=o;let l=i?0.42:0;if(this.wheelieAngle+=(l-this.wheelieAngle)*Math.min(t*8,1),this.bikeBody.position.y=Math.sin(this.wheelieAngle)*0.35,this.bikeBody.rotation.z+=this.wheelieAngle*0.9,this.speed>0.5){let c=Math.sin(Date.now()*0.02)*0.003*Math.min(this.speed*0.2,1);this.bikeBody.position.y+=c}if(this.fishTail)this.fishTail.rotation.y=Math.sin(Date.now()*0.012*(1+this.speed*0.2))*0.4}getPedalWorldPositions(){let t=new C,e=new C;return this.leftPedal.getWorldPosition(t),this.rightPedal.getWorldPosition(e),{left:t,right:e}}getHandlebarGripWorldPositions(){let t=this.leftGripTarget.clone(),e=this.rightGripTarget.clone();return this.steerGroup.localToWorld(t),this.steerGroup.localToWorld(e),{left:t,right:e}}}class al{constructor(t){this.bicycle=t,this.group=new Ut,this.thighLen=0.32,this.shinLen=0.3,this.hipOffsetZ=0.11,this.pouchY=0,this.pouchVel=0,this.blinkTimer=0,this.isBlinking=!1,this.blinkProgress=0,this.honkAmount=0,this.headBobPhase=0,this.cadenceSway=0,this.createMaterials(),this.buildPelican()}createMaterials(){this.featherWhiteMat=new Jt({color:16251132,roughness:0.85,metalness:0.05}),this.featherDarkMat=new Jt({color:3817546,roughness:0.9,metalness:0.05}),this.billMat=new Jt({color:16359487,roughness:0.35,metalness:0.15}),this.billTipMat=new Jt({color:14174747,roughness:0.3,metalness:0.2}),this.pouchMat=new Jt({color:16233063,roughness:0.5,metalness:0.05,side:Fe}),this.legMat=new Jt({color:15885337,roughness:0.6,metalness:0.1}),this.eyeWhiteMat=new Jt({color:16777215,roughness:0.1,metalness:0.1}),this.irisMat=new Jt({color:1914199,roughness:0.2,metalness:0.1}),this.pupilMat=new Vn({color:0}),this.goggleStrapMat=new Jt({color:4007444,roughness:0.8}),this.goggleRimMat=new Jt({color:13145662,roughness:0.3,metalness:0.85}),this.goggleLensMat=new Jt({color:9494767,roughness:0.1,metalness:0.4,transparent:!0,opacity:0.85})}buildPelican(){this.root=new Ut,this.root.position.copy(this.bicycle.saddleSeatingPoint),this.group.add(this.root),this.pelvis=new Ut,this.root.add(this.pelvis),this.buildTorso(),this.buildTail(),this.buildNeckAndHead(),this.buildWings(),this.buildLegs()}buildTorso(){this.torso=new Ut,this.pelvis.add(this.torso);let t=new Ve(0.24,24,18);t.scale(1.2,0.95,0.85);let e=new it(t,this.featherWhiteMat);e.castShadow=!0,e.receiveShadow=!0,e.rotation.z=-0.22,e.position.set(0.08,0.16,0),this.torso.add(e);let n=new Ve(0.18,16,12);n.scale(1,1.2,0.75);let i=new it(n,this.featherWhiteMat);i.position.set(0.18,0.18,0),i.rotation.z=-0.3,this.torso.add(i)}buildTail(){this.tail=new Ut,this.tail.position.set(-0.2,0.14,0);for(let t=-3;t<=3;t++){let e=new Pe(0.038,0.22,6);e.scale(1,1,0.3);let n=new it(e,this.featherDarkMat);n.rotation.z=Math.PI*0.65,n.rotation.y=t*0.14,n.position.set(-0.06,t*0.012,t/3*0.09),n.castShadow=!0,this.tail.add(n)}this.torso.add(this.tail)}buildNeckAndHead(){this.neckBase=new Ut,this.neckBase.position.set(0.24,0.24,0),this.torso.add(this.neckBase);let t=new re(0.085,0.11,0.18,16),e=new it(t,this.featherWhiteMat);e.position.set(0.04,0.09,0),e.rotation.z=-0.45,e.castShadow=!0,this.neckBase.add(e),this.neckMid=new Ut,this.neckMid.position.set(0.1,0.18,0),this.neckBase.add(this.neckMid);let n=new re(0.075,0.085,0.18,16),i=new it(n,this.featherWhiteMat);i.position.set(0.02,0.09,0),i.rotation.z=0.35,i.castShadow=!0,this.neckMid.add(i),this.headGroup=new Ut,this.headGroup.position.set(0.04,0.19,0),this.neckMid.add(this.headGroup);let s=new Ve(0.12,20,16);s.scale(1.15,0.95,0.88);let r=new it(s,this.featherWhiteMat);r.castShadow=!0,this.headGroup.add(r);for(let a=0;a<4;a++){let o=new Pe(0.025,0.14-a*0.02,6),l=new it(o,this.featherWhiteMat);l.rotation.z=Math.PI*0.65+a*0.12,l.position.set(-0.1,0.04-a*0.02,(a-1.5)*0.02),this.headGroup.add(l)}this.buildEyes(),this.buildBeakAndPouch(),this.buildGoggles()}buildEyes(){this.eyes=[],[-0.075,0.075].forEach((t)=>{let e=new Ut;e.position.set(0.065,0.04,t);let n=new Ve(0.038,16,12),i=new it(n,this.eyeWhiteMat);e.add(i);let s=new Pn(0.022,16),r=new it(s,this.irisMat);r.position.set(0.036,0,0),r.rotation.y=Math.PI/2,e.add(r);let a=new Pn(0.012,16),o=new it(a,this.pupilMat);o.position.set(0.037,0,0),o.rotation.y=Math.PI/2,e.add(o);let l=new Ve(0.04,16,8,0,Math.PI*2,0,Math.PI*0.5),c=new it(l,this.featherWhiteMat);c.rotation.z=Math.PI,c.position.set(0,0.015,0),c.scale.set(1.05,0.05,1.05),e.add(c),this.eyes.push({group:e,eyelid:c,iris:r,pupil:o}),this.headGroup.add(e)})}buildBeakAndPouch(){this.beakGroup=new Ut,this.beakGroup.position.set(0.11,-0.01,0),this.headGroup.add(this.beakGroup);let t=new Pe(0.055,0.54,16);t.scale(1,1,0.45);let e=new it(t,this.billMat);e.rotation.z=-Math.PI/2,e.position.set(0.27,0.015,0),e.castShadow=!0,this.beakGroup.add(e);let n=new Pe(0.028,0.08,12),i=new it(n,this.billTipMat);i.rotation.z=-Math.PI*0.82,i.position.set(0.53,-0.01,0),this.beakGroup.add(i),this.lowerBeakGroup=new Ut,this.lowerBeakGroup.position.set(0.02,-0.02,0),this.beakGroup.add(this.lowerBeakGroup),[-0.038,0.038].forEach((r)=>{let a=new re(0.012,0.008,0.5,8),o=new it(a,this.billMat);o.rotation.z=-Math.PI/2,o.position.set(0.25,-0.01,r),this.lowerBeakGroup.add(o)});let s=new Ve(0.18,20,16);s.scale(1.8,0.95,0.45),this.pouchMesh=new it(s,this.pouchMat),this.pouchMesh.position.set(0.24,-0.09,0),this.pouchMesh.castShadow=!0,this.lowerBeakGroup.add(this.pouchMesh)}buildGoggles(){this.gogglesGroup=new Ut,this.gogglesGroup.position.set(0.04,0.09,0);let e=new pn(0,0,0.12,0.09,0,Math.PI*2,!1,0).getPoints(24),n=new ge().setFromPoints(e),i=new li(n,new Wn({color:4007444,linewidth:4}));i.rotation.x=Math.PI/2,this.gogglesGroup.add(i),[-0.05,0.05].forEach((s)=>{let r=new mn(0.032,0.007,10,20),a=new it(r,this.goggleRimMat);a.position.set(0.08,0.03,s),a.rotation.y=Math.PI/2,this.gogglesGroup.add(a);let o=new Pn(0.03,16),l=new it(o,this.goggleLensMat);l.position.set(0.082,0.03,s),l.rotation.y=Math.PI/2,this.gogglesGroup.add(l)}),this.headGroup.add(this.gogglesGroup)}buildWings(){this.leftWing=new Ut,this.rightWing=new Ut,this.leftWing.position.set(0.12,0.22,-0.16),this.rightWing.position.set(0.12,0.22,0.16);let t=(e,n)=>{let i=n?1:-1,s=new re(0.045,0.06,0.28,12);s.scale(1,1,0.5);let r=new it(s,this.featherWhiteMat);r.position.set(0.06,-0.1,i*0.04),r.rotation.z=-0.55,r.rotation.x=i*0.3,e.add(r);let a=new re(0.035,0.045,0.32,12);a.scale(1,1,0.4);let o=new it(a,this.featherWhiteMat);o.position.set(0.24,-0.16,i*0.08),o.rotation.z=-1.25,e.add(o);let l=new Se(0.06,0.04,0.12),c=new it(l,this.featherDarkMat);c.position.set(0.38,-0.14,i*0.1),c.rotation.y=i*0.25,e.add(c)};t(this.leftWing,!1),t(this.rightWing,!0),this.torso.add(this.leftWing),this.torso.add(this.rightWing)}buildLegs(){this.leftLeg=this.createLeg(!1),this.rightLeg=this.createLeg(!0),this.pelvis.add(this.leftLeg.root),this.pelvis.add(this.rightLeg.root)}createLeg(t){let e=t?1:-1,n=new Ut;n.position.set(0.02,0.04,e*this.hipOffsetZ);let i=new Ut;n.add(i);let s=new re(0.032,0.028,this.thighLen,12),r=new it(s,this.featherWhiteMat);r.position.set(0,-this.thighLen*0.5,0),r.castShadow=!0,i.add(r);let a=new Ut;a.position.set(0,-this.thighLen,0),i.add(a);let o=new it(new Ve(0.03,10,8),this.legMat);a.add(o);let l=new Ut;a.add(l);let c=new re(0.024,0.02,this.shinLen,12),u=new it(c,this.legMat);u.position.set(0,-this.shinLen*0.5,0),u.castShadow=!0,l.add(u);let f=new Ut;f.position.set(0,-this.shinLen,0),l.add(f);let h=new it(new Ve(0.022,10,8),this.legMat);f.add(h);let p=new Ut,g=new Se(0.12,0.012,0.022),M=new it(g,this.legMat);M.position.set(0.06,0,0),p.add(M);let m=new it(g,this.legMat);m.position.set(0.055,0,-0.035),m.rotation.y=-0.35,p.add(m);let d=new it(g,this.legMat);d.position.set(0.055,0,0.035),d.rotation.y=0.35,p.add(d);let E=new In;E.moveTo(0,0),E.lineTo(0.11,-0.05),E.lineTo(0.12,0),E.lineTo(0.11,0.05),E.closePath();let w=new ys(E),_=new it(w,this.legMat);return _.rotation.x=Math.PI/2,_.position.set(0,-0.002,0),p.add(_),f.add(p),{root:n,thighGroup:i,kneeGroup:a,shinGroup:l,footGroup:f,isRight:t}}solveLegIK(t,e){let n=new C;t.root.getWorldPosition(n);let i=new C().subVectors(e,n),s=i.length(),r=(this.thighLen+this.shinLen)*0.995,a=Math.abs(this.thighLen-this.shinLen)*1.05;s=Math.max(a,Math.min(s,r));let o=(this.thighLen*this.thighLen+s*s-this.shinLen*this.shinLen)/(2*this.thighLen*s),l=Math.acos(Math.max(-1,Math.min(1,o))),c=(this.thighLen*this.thighLen+this.shinLen*this.shinLen-s*s)/(2*this.thighLen*this.shinLen),u=Math.PI-Math.acos(Math.max(-1,Math.min(1,c))),f=i.clone().normalize(),h=Math.atan2(f.x,-f.y),p=Math.atan2(f.z,Math.sqrt(f.x*f.x+f.y*f.y));t.thighGroup.rotation.set(0,0,0),t.thighGroup.rotation.z=h-l,t.thighGroup.rotation.x=p*(t.isRight?0.4:-0.4),t.kneeGroup.rotation.set(0,0,0),t.kneeGroup.rotation.z=u,t.footGroup.rotation.set(0,0,0),t.footGroup.rotation.z=-(t.thighGroup.rotation.z+t.kneeGroup.rotation.z)}honk(){this.honkAmount=1}update(t,e,n=!1){let i=this.bicycle.crankAngle,s=Math.sin(i)*0.07;this.cadenceSway+=(s-this.cadenceSway)*Math.min(t*10,1),this.pelvis.rotation.z=this.cadenceSway,this.pelvis.rotation.x=Math.sin(i*0.5)*0.03,this.headBobPhase+=t*Math.max(e*3.5,2);let r=Math.cos(this.headBobPhase)*0.03,a=Math.sin(this.headBobPhase*2)*0.02;this.headGroup.position.x=0.04+r,this.headGroup.position.y=0.19+a,this.headGroup.rotation.z=-this.pelvis.rotation.z*0.6;let o=60,l=7.5,c=(Math.random()-0.5)*e*0.15,u=this.honkAmount*-0.06+c,f=-o*(this.pouchY-u)-l*this.pouchVel;if(this.pouchVel+=f*t,this.pouchY+=this.pouchVel*t,this.pouchMesh.position.y=-0.09+this.pouchY,this.pouchMesh.scale.set(1.8+this.honkAmount*0.4,0.95+Math.abs(this.pouchY)*2+this.honkAmount*0.5,0.45+this.honkAmount*0.3),this.honkAmount>0.01)this.honkAmount-=t*3.2,this.lowerBeakGroup.rotation.z=-this.honkAmount*0.45;else this.lowerBeakGroup.rotation.z=0,this.honkAmount=0;if(this.blinkTimer+=t,!this.isBlinking&&this.blinkTimer>3.5+Math.random()*3)this.isBlinking=!0,this.blinkTimer=0,this.blinkProgress=0;if(this.isBlinking){this.blinkProgress+=t*12;let p=Math.sin(this.blinkProgress)*0.95;if(this.eyes.forEach((g)=>{g.eyelid.scale.y=0.05+p*0.95}),this.blinkProgress>=Math.PI)this.isBlinking=!1,this.eyes.forEach((g)=>{g.eyelid.scale.y=0.05})}if(n)this.leftWing.rotation.z=Math.PI*0.25,this.rightWing.rotation.z=Math.PI*0.25,this.leftWing.rotation.y=-0.4,this.rightWing.rotation.y=0.4;else this.leftWing.rotation.set(0,0,0),this.rightWing.rotation.set(0,0,0);let h=this.bicycle.getPedalWorldPositions();this.solveLegIK(this.leftLeg,h.left),this.solveLegIK(this.rightLeg,h.right)}}class ol{constructor(t){this.scene=t,this.time=0,this.roadSegments=[],this.roadSegmentLength=40,this.totalSegments=5,this.roadWidth=7,this.seagulls=[],this.palmTrees=[],this.streetLamps=[],this.clouds=[],this.particles=null,this.currentTimeOfDay="sunset",this.createMaterials(),this.buildWorld()}createMaterials(){this.asphaltMat=new Jt({color:2829634,roughness:0.9,metalness:0.1}),this.markingYellowMat=new Jt({color:16765286,roughness:0.4,metalness:0.05}),this.markingWhiteMat=new Jt({color:16316922,roughness:0.4,metalness:0.05}),this.concreteMat=new Jt({color:9279918,roughness:0.8,metalness:0.1}),this.sandMat=new Jt({color:16032353,roughness:0.95,metalness:0.02}),this.grassMat=new Jt({color:2792847,roughness:0.85,metalness:0.05}),this.oceanMat=new Jt({color:30646,roughness:0.15,metalness:0.85,transparent:!0,opacity:0.92,flatShading:!0}),this.trunkMat=new Jt({color:7294519,roughness:0.9,metalness:0.05}),this.leafMat=new Jt({color:3715072,roughness:0.6,metalness:0.1,side:Fe}),this.woodMat=new Jt({color:10910802,roughness:0.8,metalness:0.05}),this.ironMat=new Jt({color:1710628,roughness:0.4,metalness:0.8}),this.lampGlowMat=new Jt({color:16775904,roughness:0.1,emissive:16763904,emissiveIntensity:0.8}),this.cloudMat=new Jt({color:16777215,roughness:0.95,metalness:0.02,flatShading:!0})}buildWorld(){this.worldGroup=new Ut,this.scene.add(this.worldGroup),this.buildInfiniteRoad(),this.buildOcean(),this.buildClouds(),this.buildSeagulls(),this.buildAtmosphericParticles(),this.setupLighting()}setupLighting(){this.ambientLight=new Dr(16772829,0.6),this.scene.add(this.ambientLight),this.sunLight=new Nr(16775917,1.8),this.sunLight.position.set(40,50,-30),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=150,this.sunLight.shadow.camera.left=-25,this.sunLight.shadow.camera.right=25,this.sunLight.shadow.camera.top=25,this.sunLight.shadow.camera.bottom=-25,this.sunLight.shadow.bias=-0.0005,this.scene.add(this.sunLight),this.hemiLight=new Cr(8900331,16032353,0.5),this.scene.add(this.hemiLight),this.scene.fog=new ps(16771286,0.012),this.setTimeOfDay(this.currentTimeOfDay)}setTimeOfDay(t){switch(this.currentTimeOfDay=t,t){case"day":this.scene.background=new kt(7389695),this.scene.fog.color=new kt(10213631),this.scene.fog.density=0.008,this.ambientLight.color.setHex(16777215),this.ambientLight.intensity=0.7,this.sunLight.color.setHex(16775917),this.sunLight.intensity=2,this.sunLight.position.set(20,60,-20),this.hemiLight.color.setHex(7389695),this.hemiLight.groundColor.setHex(16032353),this.oceanMat.color.setHex(30646),this.setLampsEmissive(0);break;case"sunset":this.scene.background=new kt(16612884),this.scene.fog.color=new kt(16485156),this.scene.fog.density=0.011,this.ambientLight.color.setHex(16772829),this.ambientLight.intensity=0.6,this.sunLight.color.setHex(16739125),this.sunLight.intensity=2.4,this.sunLight.position.set(-50,18,-40),this.hemiLight.color.setHex(16219904),this.hemiLight.groundColor.setHex(14034984),this.oceanMat.color.setHex(24435),this.setLampsEmissive(0.6);break;case"cyberpunk":this.scene.background=new kt(1245222),this.scene.fog.color=new kt(2359366),this.scene.fog.density=0.014,this.ambientLight.color.setHex(10309341),this.ambientLight.intensity=0.45,this.sunLight.color.setHex(16711807),this.sunLight.intensity=1.6,this.sunLight.position.set(-30,25,20),this.hemiLight.color.setHex(62932),this.hemiLight.groundColor.setHex(8072383),this.oceanMat.color.setHex(1048619),this.setLampsEmissive(1.5,62932);break;case"night":this.scene.background=new kt(329748),this.scene.fog.color=new kt(659752),this.scene.fog.density=0.012,this.ambientLight.color.setHex(1844545),this.ambientLight.intensity=0.25,this.sunLight.color.setHex(9284036),this.sunLight.intensity=0.7,this.sunLight.position.set(30,45,-30),this.hemiLight.color.setHex(730437),this.hemiLight.groundColor.setHex(71207),this.oceanMat.color.setHex(197726),this.setLampsEmissive(1.8,16765286);break}}setLampsEmissive(t,e=16763904){this.lampGlowMat.emissiveIntensity=t,this.lampGlowMat.emissive.setHex(e)}createRoadSegment(t){let e=new Ut;e.position.x=t;let n=this.roadSegmentLength,i=new ke(n,this.roadWidth),s=new it(i,this.asphaltMat);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,e.add(s);let r=8,a=n/(r*2);for(let M=0;M<r;M++){let m=new ke(a,0.16),d=new it(m,this.markingYellowMat);d.rotation.x=-Math.PI/2,d.position.set(-n*0.5+(M*2+1)*a,0.002,0),e.add(d)}[-this.roadWidth*0.45,this.roadWidth*0.45].forEach((M)=>{let m=new ke(n,0.14),d=new it(m,this.markingWhiteMat);d.rotation.x=-Math.PI/2,d.position.set(0,0.002,M),e.add(d)});let o=new ke(n,18),l=new it(o,this.grassMat);l.rotation.x=-Math.PI/2,l.position.set(0,0.05,this.roadWidth*0.5+11.5),l.receiveShadow=!0,e.add(l);let c=6,u=n/c;for(let M=0;M<c;M++){let m=-n*0.5+M*u,d=new Se(0.14,0.95,0.14),E=new it(d,this.woodMat);E.position.set(m,0.47,-this.roadWidth*0.5-0.12),E.castShadow=!0,e.add(E)}[0.45,0.85].forEach((M)=>{let m=new Se(n,0.08,0.1),d=new it(m,this.woodMat);d.position.set(0,M,-this.roadWidth*0.5-0.12),d.castShadow=!0,e.add(d)});let f=new ke(n,16),h=new it(f,this.sandMat);h.rotation.x=-Math.PI/2+0.04,h.position.set(0,-0.2,-this.roadWidth*0.5-8),h.receiveShadow=!0,e.add(h);let p=this.createPalmTree();p.position.set(8,0.14,this.roadWidth*0.5+3.8),e.add(p);let g=this.createStreetLamp();if(g.position.set(-12,0.14,this.roadWidth*0.5+2.6),e.add(g),Math.random()>0.4){let M=this.createBeachUmbrella();M.position.set((Math.random()-0.5)*20,-0.4,-this.roadWidth*0.5-9.5-Math.random()*4),e.add(M)}return e}buildInfiniteRoad(){for(let t=0;t<this.totalSegments;t++){let e=(t-2)*this.roadSegmentLength,n=this.createRoadSegment(e);this.worldGroup.add(n),this.roadSegments.push(n)}}createPalmTree(){let t=new Ut,e=new hi([new C(0,0,0),new C(0.2,2,0.1),new C(0.5,4.2,0.2),new C(0.7,5.8,0.1)]),n=new Ln(e,16,0.18,10,!1),i=new it(n,this.trunkMat);i.castShadow=!0,t.add(i);let s=new C(0.7,5.8,0.1),r=9;for(let a=0;a<r;a++){let o=a/r*Math.PI*2,l=new Ut;l.position.copy(s),l.rotation.y=o;let c=new Xn(new C(0,0,0),new C(1.4,0.6,0),new C(2.6,-0.8,0)),u=new Ln(c,12,0.035,6,!1),f=new it(u,this.leafMat);f.castShadow=!0,l.add(f);let h=new ke(2.4,0.6,8,2),p=new it(h,this.leafMat);p.position.set(1.4,-0.1,0),p.rotation.x=Math.PI/2,p.rotation.z=-0.3,l.add(p),t.add(l)}return t}createStreetLamp(){let t=new Ut,e=new re(0.18,0.24,0.45,12),n=new it(e,this.ironMat);t.add(n);let i=new re(0.06,0.08,4.2,12),s=new it(i,this.ironMat);s.position.y=2.3,t.add(s);let r=new mn(0.5,0.04,8,16,Math.PI*0.6),a=new it(r,this.ironMat);a.position.set(-0.35,4.4,0),a.rotation.z=-Math.PI*0.3,t.add(a);let o=new re(0.16,0.1,0.42,6),l=new it(o,this.lampGlowMat);l.position.set(-0.65,4.3,0),t.add(l);let c=new Pe(0.24,0.16,6),u=new it(c,this.ironMat);return u.position.set(-0.65,4.55,0),t.add(u),t}createBeachUmbrella(){let t=new Ut,e=new re(0.03,0.03,2.4,8),n=new it(e,this.woodMat);n.position.y=1.2,n.rotation.z=0.15,t.add(n);let i=new Pe(1.4,0.5,12,1,!0),s=new Jt({color:15681391,roughness:0.6,side:Fe}),r=new it(i,s);return r.position.set(0.18,2.3,0),r.rotation.z=0.15,r.castShadow=!0,t.add(r),t}buildOcean(){this.oceanGeom=new ke(350,220,64,48),this.oceanMesh=new it(this.oceanGeom,this.oceanMat),this.oceanMesh.rotation.x=-Math.PI/2,this.oceanMesh.position.set(0,-0.65,-118),this.worldGroup.add(this.oceanMesh),this.oceanPosAttr=this.oceanGeom.attributes.position,this.oceanInitY=new Float32Array(this.oceanPosAttr.count);for(let t=0;t<this.oceanPosAttr.count;t++)this.oceanInitY[t]=this.oceanPosAttr.getY(t)}buildClouds(){this.cloudGroup=new Ut,this.worldGroup.add(this.cloudGroup);for(let t=0;t<18;t++){let e=this.createCloud();e.position.set((Math.random()-0.5)*300,28+Math.random()*22,-50-Math.random()*120),this.clouds.push({mesh:e,speed:1.2+Math.random()*1.5}),this.cloudGroup.add(e)}}createCloud(){let t=new Ut,e=5+Math.floor(Math.random()*4);for(let n=0;n<e;n++){let i=3.5+Math.random()*4.5,s=new xs(i,1),r=new it(s,this.cloudMat);r.position.set((n-e*0.5)*3.5,(Math.random()-0.5)*1.8,(Math.random()-0.5)*2.2),t.add(r)}return t}buildSeagulls(){this.seagullGroup=new Ut,this.worldGroup.add(this.seagullGroup);for(let t=0;t<6;t++){let e=this.createSeagull();e.mesh.position.set(15+Math.random()*30,10+Math.random()*14,-15-Math.random()*25),this.seagulls.push(e),this.seagullGroup.add(e.mesh)}}createSeagull(){let t=new Ut,e=new Pe(0.12,0.6,6);e.scale(1,1,0.4);let n=new it(e,this.markingWhiteMat);n.rotation.z=Math.PI/2,t.add(n);let i=new Pe(0.04,0.18,5),s=new it(i,this.markingYellowMat);s.rotation.z=-Math.PI/2,s.position.set(0.36,0,0),t.add(s);let r=new ke(0.8,0.28,4,1),a=new Jt({color:16316922,side:Fe,roughness:0.8}),o=new it(r,a);o.position.set(0,0.05,-0.42),t.add(o);let l=new it(r,a);return l.position.set(0,0.05,0.42),t.add(l),{mesh:t,leftWing:o,rightWing:l,flapSpeed:4.5+Math.random()*3,flapOffset:Math.random()*Math.PI*2,flySpeed:5+Math.random()*3,circleRadius:18+Math.random()*15,angle:Math.random()*Math.PI*2}}buildAtmosphericParticles(){let e=new ge,n=new Float32Array(1050),i=new Float32Array(350);for(let r=0;r<350;r++)n[r*3+0]=(Math.random()-0.5)*80,n[r*3+1]=Math.random()*12,n[r*3+2]=(Math.random()-0.5)*30,i[r]=Math.random()*0.18+0.08;e.setAttribute("position",new qe(n,3));let s=new _s({color:16775904,size:0.15,transparent:!0,opacity:0.65,blending:os});this.particles=new vr(e,s),this.worldGroup.add(this.particles)}update(t,e){this.time+=t;let n=e*t,i=this.totalSegments*this.roadSegmentLength*0.5;this.roadSegments.forEach((a)=>{if(a.position.x-=n,a.position.x<-i)a.position.x+=this.totalSegments*this.roadSegmentLength});let s=this.oceanPosAttr,r=this.time*1.8;for(let a=0;a<s.count;a++){let o=s.getX(a),l=s.getY(a),c=Math.sin(o*0.08+r)*0.45+Math.cos(l*0.06+r*0.8)*0.35+Math.sin((o+l)*0.04+r*1.4)*0.2;s.setZ(a,c)}if(s.needsUpdate=!0,this.oceanGeom.computeVertexNormals(),this.seagulls.forEach((a)=>{a.angle+=t*0.18,a.mesh.position.x=Math.cos(a.angle)*a.circleRadius+10,a.mesh.position.z=Math.sin(a.angle)*a.circleRadius-25,a.mesh.rotation.y=-a.angle+Math.PI/2;let o=Math.sin(this.time*a.flapSpeed+a.flapOffset)*0.6;a.leftWing.rotation.x=o,a.rightWing.rotation.x=-o}),this.clouds.forEach((a)=>{if(a.mesh.position.x-=a.speed*t,a.mesh.position.x<-160)a.mesh.position.x=160}),this.particles){let a=this.particles.geometry.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o)-(e+2)*t;if(l<-40)l=40;a.setX(o,l);let c=a.getY(o)+Math.sin(this.time*2+o)*0.005;a.setY(o,Math.max(0.2,Math.min(c,14)))}a.needsUpdate=!0}}}class Vh{constructor(){this.ctx=null,this.isMuted=!0,this.bgmPlaying=!1,this.bgmTimer=null,this.windNode=null,this.windGain=null,this.windFilter=null,this.oceanGain=null,this.initialized=!1}init(){if(this.initialized)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=0.8,this.masterGain.connect(this.ctx.destination),this.setupWind(),this.setupOcean(),this.initialized=!0}resume(){if(!this.initialized)this.init();if(this.ctx&&this.ctx.state==="suspended")this.ctx.resume();this.isMuted=!1}mute(t=!0){if(this.isMuted=t,this.masterGain)this.masterGain.gain.setTargetAtTime(t?0:0.8,this.ctx.currentTime,0.05)}toggleMute(){return this.resume(),this.mute(!this.isMuted),!this.isMuted}playBell(){if(!this.initialized)this.init();if(this.resume(),this.isMuted)return;let t=this.ctx.currentTime;this._strikeBell(t,2350,2890,0.7),this._strikeBell(t+0.14,2520,3100,0.9)}_strikeBell(t,e,n,i){[e,n].forEach((s,r)=>{let a=this.ctx.createOscillator(),o=this.ctx.createGain(),l=this.ctx.createBiquadFilter();a.type="sine",a.frequency.setValueAtTime(s,t),a.frequency.exponentialRampToValueAtTime(s*0.998,t+1.2),l.type="bandpass",l.frequency.setValueAtTime(s,t),l.Q.setValueAtTime(15,t),o.gain.setValueAtTime(i*(r===0?0.7:0.5),t),o.gain.exponentialRampToValueAtTime(0.0001,t+(r===0?1.5:1.1)),a.connect(l),l.connect(o),o.connect(this.masterGain),a.start(t),a.stop(t+1.6)})}playHonk(){if(!this.initialized)this.init();if(this.resume(),this.isMuted)return;let t=this.ctx.currentTime,e=0.38,n=this.ctx.createOscillator(),i=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.type="sawtooth",i.type="triangle",n.frequency.setValueAtTime(320,t),n.frequency.linearRampToValueAtTime(420,t+0.08),n.frequency.exponentialRampToValueAtTime(180,t+e),i.frequency.setValueAtTime(160,t),i.frequency.linearRampToValueAtTime(210,t+0.08),i.frequency.exponentialRampToValueAtTime(90,t+e),s.type="bandpass",s.frequency.setValueAtTime(1100,t),s.frequency.linearRampToValueAtTime(1450,t+0.1),s.frequency.exponentialRampToValueAtTime(650,t+e),s.Q.setValueAtTime(6,t),r.gain.setValueAtTime(0.01,t),r.gain.linearRampToValueAtTime(0.65,t+0.04),r.gain.exponentialRampToValueAtTime(0.001,t+e),n.connect(s),i.connect(s),s.connect(r),r.connect(this.masterGain),n.start(t),i.start(t),n.stop(t+e),i.stop(t+e)}playChainTick(t=1){if(!this.initialized||this.isMuted)return;let e=this.ctx.currentTime,n=this.ctx.sampleRate*0.012,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let l=0;l<n;l++)s[l]=(Math.random()*2-1)*Math.exp(-l/(n*0.25));let r=this.ctx.createBufferSource();r.buffer=i;let a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(2800+Math.random()*400,e);let o=this.ctx.createGain();o.gain.setValueAtTime(0.06*Math.min(t,1.5),e),o.gain.exponentialRampToValueAtTime(0.001,e+0.015),r.connect(a),a.connect(o),o.connect(this.masterGain),r.start(e)}setupWind(){let t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0),i=0;for(let s=0;s<t;s++){let r=Math.random()*2-1;n[s]=(i+0.02*r)/1.02,i=n[s],n[s]*=2.5}this.windNode=this.ctx.createBufferSource(),this.windNode.buffer=e,this.windNode.loop=!0,this.windFilter=this.ctx.createBiquadFilter(),this.windFilter.type="bandpass",this.windFilter.frequency.setValueAtTime(200,this.ctx.currentTime),this.windFilter.Q.setValueAtTime(1.5,this.ctx.currentTime),this.windGain=this.ctx.createGain(),this.windGain.gain.setValueAtTime(0.001,this.ctx.currentTime),this.windNode.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.masterGain),this.windNode.start()}updateSpeed(t){if(!this.initialized||!this.windGain||this.isMuted)return;let e=this.ctx.currentTime,n=Math.max(0,Math.min(t,2.5)),i=180+n*650,s=0.02+n*0.12;this.windFilter.frequency.setTargetAtTime(i,e,0.1),this.windGain.gain.setTargetAtTime(s,e,0.1)}setupOcean(){let t=this.ctx.sampleRate*3,e=this.ctx.createBuffer(2,t,this.ctx.sampleRate);for(let s=0;s<2;s++){let r=e.getChannelData(s),a=0,o=0,l=0;for(let c=0;c<t;c++){let u=Math.random()*2-1;a=0.99*a+u*0.05,o=0.97*o+u*0.08,l=0.92*l+u*0.12,r[c]=(a+o+l)*0.4}}let n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;let i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(450,this.ctx.currentTime),this.oceanGain=this.ctx.createGain(),this.oceanGain.gain.setValueAtTime(0.04,this.ctx.currentTime),n.connect(i),i.connect(this.oceanGain),this.oceanGain.connect(this.masterGain),n.start()}toggleBGM(){if(!this.initialized)this.init();if(this.resume(),this.bgmPlaying)return this.stopBGM(),!1;else return this.startBGM(),!0}startBGM(){if(this.bgmPlaying)return;this.bgmPlaying=!0;let t=0,n=0.35714285714285715,i=[[174.61,220,261.63,329.63],[164.81,220,246.94,293.66],[116.54,174.61,220,261.63],[130.81,164.81,196,246.94]],s=[87.31,110,58.27,65.41],r=()=>{if(!this.bgmPlaying)return;let a=this.ctx.currentTime,o=Math.floor(t/16)%4,l=t%16;if(l===0||l===8)i[o].forEach((u)=>{this._playRhodesNote(u,a,n*7.5,0.08)});if(l===0||l===6||l===10)this._playBassNote(s[o],a,n*3.5,0.12);if(l===0||l===8||l===14)this._playLoFiKick(a);if(l===4||l===12)this._playLoFiSnare(a);if(l%2===0)this._playLoFiHat(a,l%4===2?0.03:0.018);t++,this.bgmTimer=setTimeout(r,n*1000)};r()}stopBGM(){if(this.bgmPlaying=!1,this.bgmTimer)clearTimeout(this.bgmTimer),this.bgmTimer=null}_playRhodesNote(t,e,n,i){if(this.isMuted)return;let s=this.ctx.createOscillator(),r=this.ctx.createGain(),a=this.ctx.createBiquadFilter();s.type="triangle",s.frequency.setValueAtTime(t,e),a.type="lowpass",a.frequency.setValueAtTime(900,e),a.frequency.exponentialRampToValueAtTime(450,e+n),r.gain.setValueAtTime(0.001,e),r.gain.linearRampToValueAtTime(i,e+0.03),r.gain.exponentialRampToValueAtTime(0.0001,e+n),s.connect(a),a.connect(r),r.connect(this.masterGain),s.start(e),s.stop(e+n)}_playBassNote(t,e,n,i){if(this.isMuted)return;let s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t,e),r.gain.setValueAtTime(i,e),r.gain.exponentialRampToValueAtTime(0.0001,e+n),s.connect(r),r.connect(this.masterGain),s.start(e),s.stop(e+n)}_playLoFiKick(t){if(this.isMuted)return;let e=this.ctx.createOscillator(),n=this.ctx.createGain();e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(35,t+0.15),n.gain.setValueAtTime(0.2,t),n.gain.exponentialRampToValueAtTime(0.001,t+0.18),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+0.2)}_playLoFiSnare(t){if(this.isMuted)return;let e=this.ctx.sampleRate*0.08,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let o=0;o<e;o++)i[o]=(Math.random()*2-1)*Math.exp(-o/(e*0.3));let s=this.ctx.createBufferSource();s.buffer=n;let r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(1400,t);let a=this.ctx.createGain();a.gain.setValueAtTime(0.08,t),a.gain.exponentialRampToValueAtTime(0.001,t+0.08),s.connect(r),r.connect(a),a.connect(this.masterGain),s.start(t)}_playLoFiHat(t,e){if(this.isMuted)return;let n=this.ctx.sampleRate*0.03,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let l=0;l<n;l++)s[l]=(Math.random()*2-1)*Math.exp(-l/(n*0.15));let r=this.ctx.createBufferSource();r.buffer=i;let a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.setValueAtTime(6000,t);let o=this.ctx.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(0.0001,t+0.03),r.connect(a),a.connect(o),o.connect(this.masterGain),r.start(t)}}var qn=new Vh;class Xh{constructor(){this.container=document.getElementById("canvas-container"),this.speed=4.5,this.targetSpeed=4.5,this.maxSpeed=14,this.steer=0,this.distance=0,this.energy=95,this.isWheelie=!1,this.isBraking=!1,this.isAccelerating=!1,this.cameraMode="follow",this.orbitRadius=5.5,this.orbitTheta=0.5,this.orbitPhi=1.1,this.isDragging=!1,this.lastPointer={x:0,y:0},this.lastChainTickAngle=0,this.clock=new Ur,this.initThree(),this.initSceneObjects(),this.initEventListeners(),this.initUI(),this.animate=this.animate.bind(this),this.renderer.setAnimationLoop(this.animate),setInterval(()=>{if(this.clock.getDelta()>0.05)this.animate()},100),this.animate()}initThree(){this.scene=new _r;let t=window.innerWidth/window.innerHeight;this.camera=new De(48,t,0.1,400),this.camera.position.set(-2.8,1.4,1.9),this.camera.lookAt(0.3,0.85,0),this.renderer=new sl({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nr,this.renderer.toneMapping=ls,this.renderer.toneMappingExposure=1.1,this.container.appendChild(this.renderer.domElement)}initSceneObjects(){this.world=new ol(this.scene),this.bicycle=new rl,this.scene.add(this.bicycle.group),this.pelican=new al(this.bicycle),this.scene.add(this.pelican.group)}initEventListeners(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.keys={},window.addEventListener("keydown",(e)=>{if(qn.resume(),this.keys[e.code]=!0,e.code==="Space")e.preventDefault(),this.ringBell();else if(e.code==="KeyH")this.honkPelican();else if(e.code==="KeyC")this.cycleCamera();else if(e.code==="KeyT")this.cycleTimeOfDay();else if(e.code==="KeyM")this.toggleSound();else if(e.code==="KeyB")this.toggleBGM()}),window.addEventListener("keyup",(e)=>{this.keys[e.code]=!1});let t=this.renderer.domElement;t.addEventListener("pointerdown",(e)=>{this.isDragging=!0,this.lastPointer.x=e.clientX,this.lastPointer.y=e.clientY}),window.addEventListener("pointermove",(e)=>{if(!this.isDragging)return;let n=e.clientX-this.lastPointer.x,i=e.clientY-this.lastPointer.y;if(this.lastPointer.x=e.clientX,this.lastPointer.y=e.clientY,this.cameraMode==="orbit")this.orbitTheta-=n*0.008,this.orbitPhi=Math.max(0.2,Math.min(Math.PI*0.48,this.orbitPhi-i*0.008));else this.camera.position.x+=n*0.003,this.camera.position.y-=i*0.003}),window.addEventListener("pointerup",()=>{this.isDragging=!1}),t.addEventListener("wheel",(e)=>{if(this.cameraMode==="orbit")this.orbitRadius=Math.max(2.5,Math.min(15,this.orbitRadius+e.deltaY*0.005))},{passive:!0})}initUI(){if(this.speedNumEl=document.getElementById("speed-num"),this.rpmNumEl=document.getElementById("rpm-num"),this.distNumEl=document.getElementById("dist-num"),this.energyBarEl=document.getElementById("energy-fill"),this.camBadgeEl=document.getElementById("cam-badge"),this.timeBadgeEl=document.getElementById("time-badge"),this.audioBtnEl=document.getElementById("btn-sound"),this.bgmBtnEl=document.getElementById("btn-bgm"),document.getElementById("btn-pedal")?.addEventListener("pointerdown",()=>{this.isAccelerating=!0}),document.getElementById("btn-pedal")?.addEventListener("pointerup",()=>{this.isAccelerating=!1}),document.getElementById("btn-pedal")?.addEventListener("pointerleave",()=>{this.isAccelerating=!1}),document.getElementById("btn-brake")?.addEventListener("pointerdown",()=>{this.isBraking=!0}),document.getElementById("btn-brake")?.addEventListener("pointerup",()=>{this.isBraking=!1}),document.getElementById("btn-brake")?.addEventListener("pointerleave",()=>{this.isBraking=!1}),document.getElementById("btn-bell")?.addEventListener("click",()=>{this.ringBell()}),document.getElementById("btn-honk")?.addEventListener("click",()=>{this.honkPelican()}),document.getElementById("btn-wheelie")?.addEventListener("click",()=>{this.toggleWheelie()}),document.getElementById("btn-cam")?.addEventListener("click",()=>{this.cycleCamera()}),document.getElementById("btn-time")?.addEventListener("click",()=>{this.cycleTimeOfDay()}),document.getElementById("btn-sound")?.addEventListener("click",()=>{this.toggleSound()}),document.getElementById("btn-bgm")?.addEventListener("click",()=>{this.toggleBGM()}),this.speedSlider=document.getElementById("speed-slider"),this.speedSlider)this.speedSlider.addEventListener("input",(t)=>{this.targetSpeed=parseFloat(t.target.value)})}ringBell(){if(qn.playBell(),this.bicycle.bellMesh)this.bicycle.bellMesh.rotation.z=0.35,setTimeout(()=>{if(this.bicycle.bellMesh)this.bicycle.bellMesh.rotation.z=0},180)}honkPelican(){qn.playHonk(),this.pelican.honk()}toggleWheelie(){this.isWheelie=!this.isWheelie;let t=document.getElementById("btn-wheelie");if(t)t.classList.toggle("active",this.isWheelie)}toggleSound(){let t=qn.toggleMute();if(this.audioBtnEl)this.audioBtnEl.innerHTML=t?"\uD83D\uDD0A":"\uD83D\uDD07",this.audioBtnEl.classList.toggle("active",t)}toggleBGM(){let t=qn.toggleBGM();if(this.bgmBtnEl)this.bgmBtnEl.innerHTML=t?"\uD83C\uDFB5 音乐开启":"\uD83C\uDFB5 音乐关闭",this.bgmBtnEl.classList.toggle("active",t)}cycleCamera(){let t=["follow","beak","side","front","orbit"],e=t.indexOf(this.cameraMode);switch(this.cameraMode=t[(e+1)%t.length],this.cameraMode){case"follow":this.camera.position.set(-2.8,1.4,1.9);break;case"beak":this.camera.position.set(0.45,1.48,0);break;case"side":this.camera.position.set(0,1,3.8);break;case"front":this.camera.position.set(3.4,0.7,1.6);break;case"orbit":this.camera.position.set(0,2.5,5);break}if(this.camBadgeEl){let n={follow:"追随视角 \uD83C\uDFA5",beak:"鹈鹕第一视角 \uD83E\uDEBF",side:"侧面特写 \uD83D\uDEB2",front:"正面英雄 \uD83D\uDCF7",orbit:"360° 自由观察 \uD83D\uDE81"};this.camBadgeEl.innerText=n[this.cameraMode]}this.animate()}cycleTimeOfDay(){let t=["day","sunset","cyberpunk","night"],e=t.indexOf(this.world.currentTimeOfDay),n=t[(e+1)%t.length];if(this.world.setTimeOfDay(n),this.timeBadgeEl){let i={day:"晴空正午 ☀️",sunset:"落日余晖 \uD83C\uDF05",cyberpunk:"赛博霓虹 \uD83C\uDF06",night:"静谧星空 \uD83C\uDF19"};this.timeBadgeEl.innerText=i[n]}this.animate()}updatePhysics(t){let e=0;if(this.keys.KeyW||this.keys.ArrowUp||this.isAccelerating)e+=4.5;if(this.keys.KeyS||this.keys.ArrowDown||this.isBraking)e-=8;let n=0;if(this.keys.KeyA||this.keys.ArrowLeft)n-=1;if(this.keys.KeyD||this.keys.ArrowRight)n+=1;if(this.steer+=(n-this.steer)*Math.min(t*8,1),this.isWheelie=!!(this.keys.ShiftLeft||this.keys.ShiftRight||this.isWheelie),e!==0){if(this.targetSpeed=Math.max(0.5,Math.min(this.maxSpeed,this.targetSpeed+e*t)),this.speedSlider)this.speedSlider.value=this.targetSpeed.toFixed(1)}let i=e>0?3:e<0?7:1.5;if(this.speed+=(this.targetSpeed-this.speed)*Math.min(t*i,1),this.speed=Math.max(0.2,Math.min(this.isWheelie?16:this.maxSpeed,this.speed)),this.distance+=this.speed*t,this.speed>8)this.energy=Math.max(10,this.energy-t*2.5);else this.energy=Math.min(100,this.energy+t*1.5);qn.updateSpeed(this.speed/5);let s=this.bicycle.crankAngle;if(Math.abs(s-this.lastChainTickAngle)>0.45)qn.playChainTick(this.speed/5),this.lastChainTickAngle=s}updateCamera(t){let e=new C(0,0.9,0),n=new C,i=e.clone();switch(this.cameraMode){case"follow":n.set(-2.8,1.4,1.9),i.set(0.3,0.85,0),n.z+=this.steer*0.8;break;case"beak":n.set(0.45,1.48,0),i.set(8,1.25,this.steer*2.5);break;case"side":n.set(0,1,3.8),i.set(0,0.85,0);break;case"front":n.set(3.4,0.7,1.6),i.set(0,1.1,0);break;case"orbit":let r=this.orbitRadius*Math.sin(this.orbitPhi)*Math.sin(this.orbitTheta),a=this.orbitRadius*Math.cos(this.orbitPhi)+0.6,o=this.orbitRadius*Math.sin(this.orbitPhi)*Math.cos(this.orbitTheta);n.set(r,a,o);break}let s=this.cameraMode==="beak"?0.35:Math.min(t*6,1);this.camera.position.lerp(n,s),this.camera.lookAt(i)}updateHUD(){let t=(this.speed*3.6).toFixed(1);if(this.speedNumEl)this.speedNumEl.innerText=t;let e=Math.round(this.speed/this.bicycle.wheelRadius/2.4*(60/(Math.PI*2)));if(this.rpmNumEl)this.rpmNumEl.innerText=e;let n=(this.distance/1000).toFixed(2);if(this.distNumEl)this.distNumEl.innerText=n;if(this.energyBarEl)this.energyBarEl.style.width=`${this.energy.toFixed(0)}%`}animate(){requestAnimationFrame(this.animate);let t=Math.min(this.clock.getDelta(),0.1);this.updatePhysics(t),this.bicycle.update(t,this.speed,this.steer,this.isWheelie),this.pelican.update(t,this.speed,this.isWheelie),this.world.update(t,this.speed),this.updateCamera(t),this.updateHUD(),this.renderer.render(this.scene,this.camera)}}function Wh(){if(!window.pelicanApp)window.pelicanApp=new Xh}if(document.readyState==="loading")window.addEventListener("DOMContentLoaded",Wh);else Wh();export{Xh as App};
