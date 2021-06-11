<template>
  <div>
    <h3>Row: {{ rows }}</h3>
    <div v-if="loading"><h3>Data is loading ...</h3></div>
    <div v-else>
        <div class="row mb-4" v-for="row in rows" :key="'row'+row">
            <div class="col" v-for="(book, column) in bookablesInRow(row)" :key="'row'+row+column">
                <bookable-list-items 
                :title="book.title"
                :content="book.discription"
                :price="book.price"
                :row="row"
                />
            </div>
            <div class="col" v-for="p in placeHolderInRow(row)" :key="'placeholder' + row + p"></div>
        </div>  
    </div>
  </div>
</template>

<script>
import BookableListItems from './BookableListItems.vue'
export default {
    name:"Bookables",
    data(){
        return{
            bookables:null,
            loading:null,
            column:3
        }
    },
    components:{
        BookableListItems
    },
    methods:{
        bookablesInRow(row){
            return this.bookables.slice((row-1) * this.column, row * this.column); 
        },
        placeHolderInRow(row){
            return this.column - this.bookablesInRow(row).length
        }
    }
    ,
    computed:{
        rows(){
            return this.bookables == null ? 0 : Math.ceil(this.bookables.length/this.column);
        }
    },
    created(){
        // console.log("loading",this.loading);
        this.loading = true;
        axios.get('/api/bookables')
        .then((res)=>{
            console.log(res.data);
            this.bookables = res.data;
            this.loading = false
        })
        
    }
}
</script>

<style>

</style>