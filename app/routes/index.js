import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return  {
      labels: ["Latente", "Gestando", "Imprecisa", "Produciendo"],
      datasets: [
        {
          label: "Cantidad de Respuestas",
          data: [3, 1, 2, 2, 0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ]
        }
      ]
    };
  }
});
