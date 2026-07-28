const s="hub:session:id";function t(){let e=sessionStorage.getItem(s);return e||(e=String(Date.now()),sessionStorage.setItem(s,e)),e}function n(e){return e===t()}export{t as g,n as i};
