<template>
    <footer>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-12 col-md-1">
                    <img src="../../public/img/photo.jpeg" alt="">
                </div>
                <div class="col-12 col-md-4">
                    <ul>
                        <li>vlad husiev</li>
                        <li>
                            <a href="https://github.com/vladhusiev">https://github.com/vladhusiev</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/vlad-husiev-63952a14b/">https://www.linkedin.com/in/vlad-husiev-63952a14b/</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    footer {
        width: 100%;
        margin-top: 50px;
        padding: 25px 0;
        border-top: 1px solid hsl(0, 7%, 80%);
    }
    img {
        max-width: 48px;
        border-radius: 50%;
    }
    ul {
        list-style: none;
    }
</style>