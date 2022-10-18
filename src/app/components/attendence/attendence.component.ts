import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/common-services/data-service.service';
declare const $: any;

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss'],
})
export class AttendenceComponent implements OnInit {
  constructor(private attendenceData: DataServiceService) {}
  filterAttendenceList = this.attendenceData.attendenceList;

  PresentDayCount: number = 0;
  weeksOffCount: number = 0;
  leavesCount: number = 0;

  ngOnInit(): void {
    $(document).ready(function () {
      $('#example').DataTable({
        dom: 'Bfrtip',
        buttons: [
          {
            extend: 'excel',
            text: `<i class="fas fa fa-download"></i> Export Users`,
            filename: 'User Report',
          },
        ],
        info: false,
        pagingType: 'full_numbers',
        bLengthChange: false,

        order: [],
        columnDefs: [
          {
            targets: [-1, 0],
            orderable: false,
          },
        ],

        language: {
          paginate: {
            first: '<i class="fas fa fa-angle-double-left"></i>',

            last: '<i class="fas fa fa-angle-double-right"></i>',

            next: '<i class="fas fa fa-angle-right"></i>',

            previous: '<i class="fas fa fa-angle-left"></i>',
          },
          searchPlaceholder: 'Search records',
          search: '',
        },
      });
    });

    this.chechAnalytic();
  }

  searchData(data: any) {
    this.PresentDayCount = 0;
    this.leavesCount = 0;
    this.weeksOffCount = 0;
    const date = new Date(data);
    const iso = date.toISOString();
    if (data) {
      this.filterAttendenceList = this.attendenceData.attendenceList.filter(
        (ele) => new Date(ele.date).toISOString() < iso
      );
    } else {
      this.filterAttendenceList = this.attendenceData.attendenceList;
    }
    this.chechAnalytic();
  }
  reload() {
    window.location.reload();
  }

  chechAnalytic() {
    this.filterAttendenceList.map((item: any) => {
      if (item.attendance_status == 'present') {
        this.PresentDayCount++;
      } else if (item.attendance_status == 'leave') {
        this.leavesCount++;
      } else if (item.attendance_status == 'weekly-Off') {
        this.weeksOffCount++;
      }
    });
  }
}
