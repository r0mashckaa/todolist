<script>
	import { onMount } from "svelte";
	import Contols from "./Contols.svelte";
	import Item from "./Item.svelte";
    let items=[]
    
    let id = 0;
    
    function onChangeStatus(event){
        const item = items.find((i) => i.id === event.detail.id);
        item.isDone = !item.isDone;
        items=items;
        localStorage.setItem('items', JSON.stringify(items));
        }
    
    function onAddItem(event){
        const item = {
            id: id++,
            text: event.detail.text,
            isDone: false
        };
        items.push(item);
        items=items;
        localStorage.setItem('items', JSON.stringify(items));
    }

    function onDeleteItem(event){
        const idx = items.findIndex( (i) => i.id === event.detail.id);
        items.splice(idx, 1);
        items=items;
        localStorage.setItem('items', JSON.stringify(items));
    }

    onMount(()=>{
        if(localStorage.key('items')){
            items = JSON.parse(localStorage.getItem('items'));
        }
        if(items.length){
        items.forEach((i) => {
            if( id < i.id){
                id = i.id;
            }
        })
        id++
        }
    });
</script>

<div class="app">
    <Contols on:add = {onAddItem}/>

    <div class="field">
        {#each items as item }
            <Item id={item.id} text={item.text} isDone={item.isDone} on:change={onChangeStatus} on:remove={onDeleteItem}/>
        {/each}
</div>
</div>

<style>
    .app{
        min-width: 700px;
        background-color: rgb(17, 101, 17);
        min-height: 700px;
        border-radius: 40px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .field{
        background-color: white;
        flex-grow: 1;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 15px;
        overflow-y: auto;
    }
</style>
