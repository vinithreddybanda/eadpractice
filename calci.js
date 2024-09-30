function append(value)
{
    document.getElementById('display').value +=value;
}
function del(value)
{
    const display = document.getElementById('display');
    display.value=display.value.slice(0,-1);
}
function clr()
{
    document.getElementById('display').value='';
}
function res()
{
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value)

    }
    catch(e)
    {
        display.value='error'
    }

}
