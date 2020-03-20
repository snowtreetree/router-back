<template>
    <div>
        <p @click="$router.back()">back</p>
         <img style="width: 100vw;" :src="`https://image01.oneplus.cn/shop/onedayonephoto/c7cee71a010691c781d4ca894f6593da_1920_0.jpg?random=${Math.random()}`" alt="" srcset="">
    </div>
</template>

<script>
export default {
    
}
</script>