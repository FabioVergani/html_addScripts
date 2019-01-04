const genResPaths=(a,b)=>{
	let x=b,l=x.length;
	if(0!==l){
		while(l){let i=x[--l];const m=i[1],p=[a+'/'+i[0],i=m.length];while(i){p[1]=m[--i];m[i]=p.join('/')};x[l]=m};
		x=[].concat(...b).filter((e,i,a)=>i===a.indexOf(e))
	};
	return x
};
//
const addScripts=(a,b)=>{
	let l=b.length;
	if(0!==l){
		const f=a.createDocumentFragment();
		for(const s of b){
			const e=f.appendChild(a.createElement('script'));
			e.async=false;
			e.src=s
		};
		(l=a.scripts[0]).parentElement.insertBefore(f,l)
	}
};
//
