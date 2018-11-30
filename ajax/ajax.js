$(function() {
  let data = null;
  let sortedData = null;
  let $tbody = $('#tbody');
  let sortById = 'siteName';
  let descending = true;
  let timer = null;

  function getData() {
    $.ajax({
      url: 'http://opendata2.epa.gov.tw/AQI.json',
      dataType: 'json',
      cache: 'false',
    })
      .done(function(e) {
        data = e.map(item => ({
          siteName: item.SiteName,
          pollutant: item.Pollutant,
          status: item.Status,
          avgPM2p5: item['PM2.5_AVG'],
        }));
        sortData();
        setTable();
      })
      .fail(function(e) {
        console.log('error', e);
      })
      .always(function() {
        //console.log('complete');
      });
  }

  function changeSortBy(e) {
    const nextSortById = $(e.target).attr('data-id');
    if (sortById === nextSortById) {
      descending = !descending;
    } else {
      sortById = nextSortById;
      descending = true;
    }
    sortData();
    setTable();
  }

  function sortData() {
    const sign = descending ? 1 : -1;
    const numeric = sortById === 'avgPM2p5';
    sortedData = data.slice(0).sort(function(a, b) {
      let v1 = a[sortById];
      let v2 = b[sortById];
      if (numeric) {
        v1 = Number(v1);
        v2 = Number(v2);
      }

      if (v1 < v2) {
        return -1 * sign;
      } else if (v1 > v2) {
        return 1 * sign;
      } else {
        return 0;
      }
    });
  }

  function setTable() {
    $tbody.empty();
    for (let i = 0; i < sortedData.length; i++) {
      const item = sortedData[i];
      $tbody.append(`
        <tr>
          <td>${item.siteName}</td>
          <td>${item.pollutant}</td>
          <td>${item.avgPM2p5}</td>
          <td>${item.status}</td>
        </tr>
      `);
    }
  }

  $('th').on('click', changeSortBy);

  getData();

  setInterval(function() {
    getData();
  }, 10000);
});
