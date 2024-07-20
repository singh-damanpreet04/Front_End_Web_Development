let entries="";
function printf	(val)
{
	let c = val;
	document.getElementById("text").value+= val;
	entries += val;
}
function result()
{
	entries= eval(entries);
	document.getElementById("text").value=entries;
}