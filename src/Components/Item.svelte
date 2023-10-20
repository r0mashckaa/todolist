<script>
    export let id;
    export let text;
    export let isDone;
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();



</script>

<div class="item"  class:item_done={isDone}>
    <input class="item_checkbox" type="checkbox" on:change = {dispatch('change', {id} ) } checked={isDone}/>
    <div class="item_text">{text}</div>
    <button class="item_btn" on:click = {dispatch('remove', {id} ) } >Удалить</button>

</div>

<style>
    .item{
        background-color: rgb(213, 100, 100);
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        height: 50px;
        padding: 10px;
        

    }
    .item_done .item_text{
        text-decoration: line-through;
    }
    .item_done{
        background-color: rgb(105, 244, 105);
    }

    .item_checkbox{
        border: none;
        width: 25px;
        
        
    }

    .item_text{
        display: flex;
        flex-grow: 0.9;
        align-items: center;
        
    }

    .item_btn{
        background-color: rgb(255, 221, 0);
        border: none;
        border-radius: 10px 20px 20px 10px;
        width: 65px;


    }


</style>