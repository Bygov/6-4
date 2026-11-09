import { Button } from "./shared/ui/Button/Button"
import { Input } from "./shared/ui/Input/Input"
import { Card } from "./shared/ui/Card/Card";
import { Badge } from "./shared/ui/Badge/Badge";

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
      <Input label="Email" inputSize="lg" defaultValue="neutral" />
      <Input label="Email" inputSize="lg" status="success" defaultValue="success" />
      <Input label="Email" inputSize="lg" status="danger" defaultValue="danger" />
    </div>
    <div className="flex gap-4">
      <Card size="lg">
        <h3 className="text-xl font-semibold">Card</h3>
        <p className="text-muted">Card description</p>
      </Card>
      <Card variant="filled" size="lg">
        <h3 className="text-xl font-semibold">Card</h3>
        <p className="text-muted">Card description</p>
      </Card>
      <Card variant="elevated" size="lg">
        <h3 className="text-xl font-semibold">Card</h3>
        <p className="text-muted">Card description</p>
      </Card>
    </div>
    <div className="flex gap-4">
      <Badge size="lg">Badge</Badge>
      <Badge variant="success" size="lg">Badge</Badge>
      <Badge variant="danger" size="lg">Badge</Badge>
    </div>
  </div>
);
}

export default App
