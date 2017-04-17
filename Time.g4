grammar Time;

times
  : (time)+
  ;

time
  : absoluteTime
  ;

absoluteTime
  : hour TIME_SEPARATOR minute (ampm)?
  | hour TIME_SEPARATOR minute
  | hour (ampm)?
  | hour
  ;

hour
  : WHOLE_NUMBER
  ;

minute
  : WHOLE_NUMBER
  ;

ampm
  : 'a'
  | 'A'
  | 'am'
  | 'AM'
  | 'p'
  | 'P'
  | 'pm'
  | 'PM'
  ;

TIME_SEPARATOR
  : ':'
  ;

WHOLE_NUMBER
  : [0-9]+
  ;

WHITESPACE
  : [ \t\r\n]+ -> skip
  ;
