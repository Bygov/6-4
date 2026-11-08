import { Button } from "./shared/ui/Button/Button"
import { Input } from "./shared/ui/Input/Input"

function App() {


  // UI-kit -> Набор готовых компонентов интерфейса: кнопки, поля, карточки, модалки
  // Дизайн-токен -> Базовые значения: цвета, шрифты, отступы, радиусы и тени 
  // Дизайн-система -> Токены + Ui-kit + правила пользования + документация

  return (
  <div className="flex flex-col gap-6 p-6">
    <div className="flex gap-4">
      <Button size="lg">click me</Button>
      <Button variant="secondary" size="lg">click me</Button>
      <Button variant="danger" size="lg">click me</Button>
      <Button variant="ghost" size="lg">click me</Button>
    </div>
    <div className="flex gap-4">
      <Input label="Email" size="lg" defaultValue="neutral" />
      <Input label="Email" size="lg" status="success" defaultValue="success" />
      <Input label="Email" size="lg" status="danger" defaultValue="danger" />
    </div>
  </div>
  );
}

export default App
