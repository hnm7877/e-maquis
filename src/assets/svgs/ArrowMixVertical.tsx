export const ArrowMixVerticalIcon = (props: {color?: string}) => {
  return (
    <svg
      width="10"
      height="15"
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.4553 1.82986C5.23828 1.61285 4.88585 1.61285 4.66884 1.82986L1.3355 5.16319C1.11849 5.38021 1.11849 5.73264 1.3355 5.94965C1.55252 6.16666 1.90495 6.16666 2.12196 5.94965L5.06293 3.00868L8.00391 5.94792C8.22092 6.16493 8.57335 6.16493 8.79036 5.94792C9.00738 5.7309 9.00738 5.37847 8.79036 5.16146L5.45703 1.82812L5.4553 1.82986Z"
        fill={props.color || '#CCD6E0'}
      />
      <path
        d="M4.5447 12.9479C4.76172 13.1649 5.11415 13.1649 5.33116 12.9479L8.6645 9.61459C8.88151 9.39757 8.88151 9.04514 8.6645 8.82813C8.44748 8.61111 8.09505 8.61111 7.87804 8.82813L4.93707 11.7691L1.99609 8.82986C1.77908 8.61285 1.42665 8.61285 1.20964 8.82986C0.992622 9.04688 0.992622 9.39931 1.20964 9.61632L4.54297 12.9497L4.5447 12.9479Z"
        fill={props.color || '#CCD6E0'}
      />
    </svg>
  );
};