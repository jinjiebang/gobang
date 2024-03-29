// 棋格颜色
const BOARD_GRID_COLOR = '#34495e'

// 每行、每列棋格数
const BOARD_GRIDS_COUNT = 15

// 棋格间隙
const BOARD_GRIDS_GAP = 1

// 棋格类型
const BOARD_GRID_TYPE_DEFAULT = -1
const BOARD_GRID_TYPE_CIRCLE = 0
const BOARD_GRID_TYPE_CROSS = 1

const PLAYER_TYPE_HUMAN = 1

const PLAYER_TYPE_AI = 0

// 棋格圆角弧度
const BOARD_GRID_RADIUS = 4

// cross类型的棋子（先手）
const CHESS_TYPE_CROSS = 1

// circle类型的棋子（后手）
const CHESS_TYPE_CIRCLE = 0

const CHESS_CIRCLE_COLOR = '#e74c3c'

const CHESS_CROSS_COLOR = '#2ecc71'

const CHESS_CROSS_LINECAP = 'round'

// 棋子默认大小
const BOARD_GRID_CHESS_DEFAULT_SIZE = 20

// 棋子默认线宽
const BOARD_GRID_CHESS_DEFAULT_LINEWIDTH = 3

// 默认棋格大小
const BOARD_GRID_DEFAULT_SIZE = 34

// 棋格大小变化量
const BOARD_GRID_RESIZE_COUNT = 4

const BOARD_GRID_MIN_SIZE = 22

const BOARD_GRID_MAX_SIZE = 42

// 屏幕宽度范围
// 最小宽度只适配到 320px
const SCREEN_WIDTH_RANGE = [1440, 1024, 768, 480, 375]

// 定义棋型分数
const CHESS_SHAPE_SCORE = {
  LONG_ROW: 0, // 长连：连成五个或以上已方棋子
  LIVE_FOUR: 0, // 活四
  RUSH_FOUR: 0, // 冲四
  LIVE_THREE: 0, // 活三
  SLEEP_THREE: 0, // 眠三
  LIVE_TWO: 0, // 活二
  SLEEP_TWO: 0, // 眠二
  DIE_FOUR: 0, // 死四
  DIE_THREE: 0, // 死三
  DIE_TWO: 0 // 死二
}

// 定义棋型数量

export {
  CHESS_SHAPE_SCORE,
  BOARD_GRID_COLOR,
  BOARD_GRIDS_COUNT,
  BOARD_GRIDS_GAP,
  BOARD_GRID_TYPE_DEFAULT,
  BOARD_GRID_TYPE_CIRCLE,
  BOARD_GRID_TYPE_CROSS,
  BOARD_GRID_RADIUS,
  PLAYER_TYPE_HUMAN,
  PLAYER_TYPE_AI,
  CHESS_TYPE_CROSS,
  CHESS_TYPE_CIRCLE,
  CHESS_CIRCLE_COLOR,
  CHESS_CROSS_COLOR,
  CHESS_CROSS_LINECAP,
  BOARD_GRID_CHESS_DEFAULT_SIZE,
  BOARD_GRID_CHESS_DEFAULT_LINEWIDTH,
  BOARD_GRID_DEFAULT_SIZE,
  BOARD_GRID_RESIZE_COUNT,
  BOARD_GRID_MIN_SIZE,
  BOARD_GRID_MAX_SIZE,
  SCREEN_WIDTH_RANGE
}
