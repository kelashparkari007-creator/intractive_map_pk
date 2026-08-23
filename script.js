function showPakistan() {

    document.getElementById("provinceName").textContent = pakistan.name;
    document.getElementById("provinceImage").src = pakistan.image;

    document.getElementById("capital").innerHTML =
        "<strong>🏛 Capital:</strong> " + pakistan.capital;

    document.getElementById("population").innerHTML =
        "<strong>👥 Population:</strong> " + pakistan.population;

    document.getElementById("area").innerHTML =
        "<strong>📏 Area:</strong> " + pakistan.area;

    document.getElementById("language").innerHTML =
        "<strong>🗣 Language:</strong> " + pakistan.language;

    document.getElementById("districts").innerHTML =
        "<strong>🗺 Districts:</strong> " + pakistan.districts;

    document.getElementById("famousCity").innerHTML =
        "<strong>🏙 Famous City:</strong> " + pakistan.famousCity;

    document.getElementById("famousPlace").innerHTML =
        "<strong>📍 Famous Place:</strong> " + pakistan.famousPlace;

    document.getElementById("river").innerHTML =
        "<strong>🌊 Main River:</strong> " + pakistan.river;

    const gk = document.getElementById("gk");
    gk.innerHTML = "";

    pakistan.gk.forEach(function(item){
        const li = document.createElement("li");
        li.textContent = item;
        gk.appendChild(li);
    });

}
const map = document.getElementById("pakistanMap");

map.addEventListener("load", function () {
    showPakistan();


    const svg = map.contentDocument;

    if (!svg) {
        console.error("SVG load nahi hui.");
        return;
    }

    Object.keys(provinces).forEach(function(id){

        const province = svg.getElementById(id);

        if(!province){
            console.warn("Province ID not found:", id);
            return;
        }

        province.style.cursor = "pointer";

        // Hover
        province.addEventListener("mouseenter", function(){

            if(province.style.fill !== "red"){
                province.style.fill = "#90EE90";
            }

        });

        province.addEventListener("mouseleave", function(){

            if(province.style.fill !== "red"){
                province.style.fill = "";
            }

        });

        // Click
        province.addEventListener("click", function(){
           
            // Reset all
            Object.keys(provinces).forEach(function(pid){

                const p = svg.getElementById(pid);

                if(p){
                    p.style.fill = "";
                    p.style.stroke = "";
                    p.style.strokeWidth = "";
                }

            });
            


            // Highlight
            province.style.fill = "red";
            province.style.stroke = "#000";
            province.style.strokeWidth = "2";

            document.getElementById("provinceName").textContent =
                provinces[id].name;

            document.getElementById("provinceImage").src =
                provinces[id].image;

            document.getElementById("capital").innerHTML =
                "<strong>🏛 Capital:</strong> " + provinces[id].capital;

            document.getElementById("population").innerHTML =
                "<strong>👥 Population:</strong> " + provinces[id].population;

            document.getElementById("area").innerHTML =
                "<strong>📏 Area:</strong> " + provinces[id].area;

            document.getElementById("language").innerHTML =
                "<strong>🗣 Language:</strong> " + provinces[id].language;

            document.getElementById("districts").innerHTML =
                "<strong>🗺 Districts:</strong> " + provinces[id].districts;

            document.getElementById("famousCity").innerHTML =
                "<strong>🏙 Famous City:</strong> " + provinces[id].famousCity;

            document.getElementById("famousPlace").innerHTML =
                "<strong>📍 Famous Place:</strong> " + provinces[id].famousPlace;

            document.getElementById("river").innerHTML =
                "<strong>🌊 Main River:</strong> " + provinces[id].river;

            const gk = document.getElementById("gk");
            gk.innerHTML = "";

            provinces[id].gk.forEach(function(item){

                const li = document.createElement("li");
                li.textContent = item;
                gk.appendChild(li);

            });

        });

    });

});