<template>
    <div class="evn-navcat evn-primary">
        <div class="evn-category">
            <h3 class="evn-title">Menampilkan</h3>
            <select name="CatWhat" id="caty-what">
                <option value="1">Sport</option>
                <option value="1">Sport</option>
                <option value="1">Sport</option>
            </select>
        </div>
         <div class="evn-category">
            <h3 class="evn-title">Waktu</h3>
            <select name="CatTime" id="caty-time">
                <option value="1">Sport</option>
                <option value="1">Sport</option>
                <option value="1">Sport</option>
            </select>
        </div>
        <div class="evn-category">
            <h3 class="evn-title">Lokasi</h3>
            <select name="CatLocation" id="caty-location">
                <option value="1">Sport</option>
                <option value="1">Sport</option>
                <option value="1">Sport</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavCategory'
}
</script>

<style scoped>
.evn-navcat{
    display: flex;
    justify-content: center;
}
.evn-category{
    /* background-color: blueviolet; */
    height: 30px;
    padding: 3px;
    margin: 5px;
    display: flex;
    align-items: center;
}
.evn-category h3{
    color: #fff;
    font-size: 17px;
    margin-top: 10px;
    font-weight: 400;
}
.evn-category select{
    width: 200px;
    outline: none;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #fff;
    margin-left: 20px;
    color: #fff;
    padding: 5px;
}
.evn-category option{
    color: #000;
}
</style>
