import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!email.trim()) e.email = 'E-posta zorunlu';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Geçerli e-posta girin';
    if (!password) e.password = 'Şifre zorunlu';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;
    Alert.alert('Giriş başarılı', 'Hoş geldiniz!');
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.form}>
          <Text style={styles.title}>Giriş Yap</Text>

          <Text style={styles.label}>E-posta</Text>
          <TextInput
            style={styles.input}
            placeholder="ornek@mail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Text style={styles.label}>Şifre</Text>
          <TextInput
            style={styles.input}
            placeholder="Şifreniz"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            Hesabın yok mu?{' '}
            <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
              Kayıt Ol
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede9fe',
    paddingHorizontal: 20,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  form: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 20,
    shadowColor: '#7e22ce',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#6d28d9',
    textAlign: 'center',
    marginBottom: 25,
  },
  label: {
    fontWeight: '600',
    color: '#4b5563',
    marginBottom: 6,
  },
  input: {
    height: 46,
    borderWidth: 1.5,
    borderColor: '#c4b5fd',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fafafa',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#8b5cf6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    marginTop: 18,
    color: '#4b5563',
  },
  link: {
    color: '#7c3aed',
    fontWeight: '700',
  },
  error: {
    color: '#dc2626',
    marginTop: -6,
    marginBottom: 10,
    fontSize: 13,
  },
});
