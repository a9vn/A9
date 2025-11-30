# Music Page Features

## Tính năng mới đã thêm:

### 1. Thanh tìm kiếm (Search Bar)
- **Real-time search**: Tìm kiếm theo tên bài hát hoặc mô tả
- **Auto-reset pagination**: Tự động về trang 1 khi tìm kiếm
- **Search icon**: Icon tìm kiếm bên phải input
- **Focus effects**: Border xanh khi focus vào input

### 2. Phân trang (Pagination)
- **12 items per page**: Hiển thị 12 bài nhạc mỗi trang
- **Page navigation**: Nút Previous/Next và số trang
- **Active page indicator**: Trang hiện tại được highlight màu xanh
- **Disabled states**: Nút Previous/Next bị disable khi ở trang đầu/cuối
- **Page info**: Hiển thị thông tin trang hiện tại

### 3. Hiển thị kích thước bài nhạc
- **File size badge**: Hiển thị kích thước file (2.3 MB, 4.1 MB, etc.)
- **Format badge**: Hiển thị định dạng file (MP3)
- **Duration**: Thời lượng bài nhạc (2:30, 3:45, etc.)
- **Quality**: Chất lượng âm thanh (320kbps, 256kbps, etc.)
- **Bitrate**: Tốc độ bit (200-400 kbps)
- **ID**: Mã số bài nhạc (#001, #002, etc.)

### 4. Music Card Design
- **Hover effects**: Scale và color transitions
- **Play button overlay**: Nút play xuất hiện khi hover
- **Download button**: Nút download với gradient background
- **Image hover**: Ảnh scale khi hover
- **Text truncation**: Tên và mô tả được cắt gọn nếu quá dài

### 5. Results Counter
- **Dynamic count**: Hiển thị số kết quả tìm được
- **Search term display**: Hiển thị từ khóa đang tìm kiếm
- **Singular/plural**: "1 result" vs "5 results"

## Components được tạo/cập nhật:

#### `Music.jsx`
- State management cho search và pagination
- Filter logic với useMemo
- Pagination calculation
- Search bar với real-time filtering
- Results counter
- Pagination controls

#### `MusicCard.jsx` (Mới)
- Component riêng cho hiển thị bài nhạc
- File size và format badges
- Duration, quality, bitrate display
- Hover effects và animations
- Download button
- Play button overlay

## Cách hoạt động:

1. **Search**: Gõ vào thanh tìm kiếm để filter bài nhạc
2. **Pagination**: Click số trang hoặc nút Previous/Next
3. **Hover**: Hover vào card để xem play button
4. **Download**: Click nút Download để tải bài nhạc
5. **Auto-scroll**: Tự động scroll lên đầu khi chuyển trang

## State Management:
```javascript
const [searchTerm, setSearchTerm] = useState('')
const [currentPage, setCurrentPage] = useState(1)
const itemsPerPage = 12
```

## File Information Display:
- **File Size**: Random từ 1.8 MB đến 6.9 MB
- **Format**: MP3
- **Duration**: Random từ 2:00 đến 6:59
- **Quality**: Random từ 128kbps đến 320kbps
- **Bitrate**: Random từ 200 đến 400 kbps
- **ID**: Sequential numbering (#001, #002, etc.)

## CSS Classes:
- `backdrop-blur-sm`: Blur effect cho cards
- `group-hover:scale-105`: Scale effect khi hover
- `truncate`: Text truncation
- `transition-all duration-300`: Smooth transitions
- `bg-gradient-to-r`: Gradient backgrounds
