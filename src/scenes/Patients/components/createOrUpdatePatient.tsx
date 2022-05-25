import { Button, Card, DatePicker, Form, Input, InputNumber, Radio, Select, Switch } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import RadioButton from 'antd/lib/radio/radioButton';
import moment from 'moment';
import React from 'react'

const dateFormat = 'DD/MM/YYYY';
const { Option } = Select;

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue={`+52`} style={{ width: 70 }}>
        <Option value="52">+52</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

const createOrUpdatePatient = () => {
  return (
      <>
       <Card title="Paciente" style={{  }}>
            <Form>
                <FormItem label="Fecha">
                    <DatePicker defaultValue={moment()} format={dateFormat} />    
                </FormItem>
                <FormItem label="Nombre">
                    <Input placeholder="Nombre del paciente" />
                </FormItem>
                <FormItem label="Edad">
                    <InputNumber placeholder="#" />
                </FormItem>
                <FormItem label="Genero">
                    <Radio.Group>
                        <RadioButton value="H">H</RadioButton>
                        <RadioButton value="M">M</RadioButton>
                    </Radio.Group>
                </FormItem>
                <FormItem label="Fecha de nacimiento">
                    <DatePicker placeholder='Fecha' format={dateFormat} />    
                </FormItem>
                <FormItem label="Numero de semanas al nacer">
                    <InputNumber placeholder="#" />
                </FormItem>
                <FormItem label="Peso al nacer">
                    <InputNumber placeholder="#" />
                </FormItem>
                <FormItem label="Método de nacimiento">
                    <Radio.Group>
                        <RadioButton value="N">Parto Natural</RadioButton>
                        <RadioButton value="C">Césarea</RadioButton>
                    </Radio.Group>
                </FormItem>
                <FormItem label="Tiempo del embarazo">
                    <Radio.Group>
                        <RadioButton value="C">Completo</RadioButton>
                        <RadioButton value="P">Prematuro</RadioButton>
                    </Radio.Group>
                </FormItem>
                <FormItem label="Cuántos días permaneció hospitalizado después de nacer">
                    <InputNumber placeholder="#" />
                </FormItem>
                <FormItem label="Mencione si tuvo problemas durante el embarazo">
                    <Switch />
                    <Input.TextArea />
                </FormItem>
                <FormItem label="Ha estado el paciente hospitalizado después de su nacimiento">
                    <Switch />
                </FormItem>
                <FormItem label="Especifique fecha y por cuánto tiempo">
                    <DatePicker placeholder='Fecha' format={dateFormat} /> 
                    <InputNumber />
                    <Select defaultValue="D" style={{ width: 120 }}>
                        <Option value="D">Día - Días</Option>
                        <Option value="M">Mes - Meses</Option>
                        <Option value="Y">Año - Años</Option>
                    </Select>
                </FormItem>
                <FormItem label="¿Ha tenido alguna cirugía?">
                    <Switch />
                    <DatePicker placeholder='Fecha' format={dateFormat} /> 
                    <Input.TextArea />
                </FormItem>
                <FormItem label="Padece alguna enermedad o condición médica crónica">
                    <Switch />
                    <Input.TextArea />
                </FormItem>
                <FormItem label="Que medicamentos y que cantidad toma actualmente">
                    <Switch />
                    <Input.TextArea />
                </FormItem>
                <FormItem label="Padece algun tipo de alergia">
                    <Switch />
                    <Input.TextArea />
                </FormItem>
                <FormItem label="¿Fuma alguien en casa del paciente?">
                    <Switch />
                </FormItem>
                <FormItem label="¿Hay alguna mascota en casa?">
                    <Switch />
                </FormItem>
                <FormItem label="¿Cuantas personas viven en casa?">
                <InputNumber />
                </FormItem>
                <FormItem label="Los padres y/o hermanos del paciente tienen alguna condición medica importante">
                    <Switch />
                    <Input.TextArea />
                </FormItem>
                <FormItem label="Cuenta con Seguro de Gastos Médicos Mayores">
                    <Switch />
                </FormItem>
                <FormItem label="¿Con que compañia?">
                    <Input.TextArea />
                </FormItem>
                <FormItem label="Nombre">
                    <Input placeholder="Nombre de la madre" />
                </FormItem>
                <FormItem label="Edad">
                    <InputNumber placeholder="#" />
                </FormItem>
                <FormItem label="Teléfono">
                    <Input addonBefore={prefixSelector} placeholder="#" />  
                </FormItem>
                <FormItem label="Correo">
                    <Input placeholder="@" />
                </FormItem>
                <FormItem label="Nombre">
                    <Input placeholder="Nombre del padre" />
                </FormItem>
                <FormItem label="Edad">
                    <InputNumber placeholder="#" />
                </FormItem>
                <FormItem label="Teléfono">
                    <Input addonBefore={prefixSelector} placeholder="#" />  
                </FormItem>
                <FormItem label="Correo">
                    <Input placeholder="@" />
                </FormItem>
                <FormItem label="¿Quién le recomendó al Dr. Ennio Rodríguez Flores?">
                    <Input placeholder="Nombre de la persona" />
                </FormItem>

                <FormItem>
                    <Button type="primary" size="large">Submit</Button>
                </FormItem>
            </Form>
            
        </Card>
      </>
   
  )
}

export default createOrUpdatePatient
