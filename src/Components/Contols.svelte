<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let inputValue = '';

    function onClick(){
        if(inputValue.length){
            dispatch('add', {text: inputValue});
            inputValue='';
        }
    }

</script>


<div class="controls">
    
    <input class="controls_input" type="text" bind:value={inputValue}>
    <button class="controls_btn" on:click = {onClick} >Добавить</button>
</div>


<style>
    .controls{
        display: grid;
        grid-template-columns: 70% 30%;
        height: 40px;
        
    }
    .controls_input{
        border: none;
        border-radius: 20px 0 0 20px;
        padding: 15px;
    }
    .controls_btn{
        border: none;
        border-radius: 0 20px 20px 0;
        background-color: rgb(255, 221, 0);
    }
</style>
